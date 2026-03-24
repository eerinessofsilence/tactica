import { type FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type AuthMode = "signin" | "signup";

type AuthForm = {
  name: string;
  email: string;
  password: string;
};

type SessionUser = {
  email: string;
  name: string | null;
};

type Notice = {
  tone: "success" | "error";
  message: string;
} | null;

const AUTH_ENDPOINTS = {
  signin: "/api/auth/login/",
  signup: "/api/auth/register/",
  logout: "/api/auth/logout/",
  me: "/api/auth/me/",
} as const;

const INITIAL_FORM: AuthForm = {
  name: "",
  email: "",
  password: "",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getStringValue(
  source: Record<string, unknown>,
  key: string,
): string | null {
  const value = source[key];

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized ? normalized : null;
}

function readCookie(name: string): string | null {
  const cookieEntry = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  if (!cookieEntry) {
    return null;
  }

  const [, value] = cookieEntry.split("=");
  return value ? decodeURIComponent(value) : null;
}

function extractSessionUser(payload: unknown): SessionUser | null {
  if (!isRecord(payload)) {
    return null;
  }

  const candidates: Record<string, unknown>[] = [payload];
  const nestedUser = payload.user;

  if (isRecord(nestedUser)) {
    candidates.push(nestedUser);
  }

  for (const candidate of candidates) {
    const email =
      getStringValue(candidate, "email") ??
      getStringValue(candidate, "user_email");

    if (!email) {
      continue;
    }

    const name =
      getStringValue(candidate, "name") ??
      getStringValue(candidate, "full_name") ??
      getStringValue(candidate, "username");

    return { email, name };
  }

  return null;
}

function extractResponseMessage(payload: unknown): string | null {
  if (!isRecord(payload)) {
    return null;
  }

  const directMessage =
    getStringValue(payload, "detail") ??
    getStringValue(payload, "message") ??
    getStringValue(payload, "error");

  if (directMessage) {
    return directMessage;
  }

  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === "string" && value.trim()) {
      return `${key}: ${value.trim()}`;
    }

    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "string")
    ) {
      const joined = value
        .map((item) => item.trim())
        .filter(Boolean)
        .join(" ");

      if (joined) {
        return `${key}: ${joined}`;
      }
    }
  }

  return null;
}

async function parseJsonSafely(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  return response.json();
}

function isValidEmail(value: string): boolean {
  const normalized = value.trim();

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}

function isValidFullName(value: string): boolean {
  const normalized = value.trim().replace(/\s+/g, " ");

  if (normalized.length < 3) {
    return false;
  }

  return normalized.split(" ").filter(Boolean).length >= 2;
}

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [form, setForm] = useState<AuthForm>(INITIAL_FORM);
  const [notice, setNotice] = useState<Notice>(null);
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function loadSession() {
      try {
        const response = await fetch(AUTH_ENDPOINTS.me, {
          credentials: "include",
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          const payload = await parseJsonSafely(response);

          if (!isCancelled) {
            setSessionUser(extractSessionUser(payload));
          }
        }
      } catch {
        if (!isCancelled) {
          setSessionUser(null);
        }
      }
    }

    void loadSession();

    return () => {
      isCancelled = true;
    };
  }, []);

  function updateField(field: keyof AuthForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function switchMode(nextMode: AuthMode) {
    setMode(nextMode);
    setNotice(null);
    setForm((currentForm) => ({
      ...currentForm,
      name: nextMode === "signup" ? currentForm.name : "",
      password: "",
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);
    setIsSubmitting(true);

    const csrfToken = readCookie("csrftoken");
    const payload =
      mode === "signup"
        ? {
            name: form.name.trim(),
            email: form.email.trim(),
            password: form.password,
          }
        : {
            email: form.email.trim(),
            password: form.password,
          };

    try {
      const response = await fetch(AUTH_ENDPOINTS[mode], {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(csrfToken ? { "X-CSRFToken": csrfToken } : {}),
        },
        body: JSON.stringify(payload),
      });

      const responsePayload = await parseJsonSafely(response);

      if (!response.ok) {
        const fallbackMessage =
          response.status === 404
            ? "Auth API routes are not wired on the backend yet. The UI is ready for /api/auth/login/ and /api/auth/register/."
            : "The request did not complete. Check the backend response and try again.";

        setNotice({
          tone: "error",
          message: extractResponseMessage(responsePayload) ?? fallbackMessage,
        });
        return;
      }

      const nextSessionUser = extractSessionUser(responsePayload) ?? {
        email: form.email.trim(),
        name:
          mode === "signup"
            ? form.name.trim() || null
            : (sessionUser?.name ?? null),
      };

      setSessionUser(nextSessionUser);
      setForm((currentForm) => ({
        ...INITIAL_FORM,
        email: currentForm.email,
      }));
      setNotice({
        tone: "success",
        message:
          mode === "signin"
            ? "Signed in. The session is now active in this browser."
            : "Account created and session started.",
      });
    } catch {
      setNotice({
        tone: "error",
        message:
          "Unable to reach the auth API. Start the backend server or update the Vite proxy target.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const title = mode === "signin" ? "Sign in" : "Sign up";
  const subtitle =
    mode === "signin"
      ? "Continue into the revenue workspace and pick up the current review cycle."
      : "Create an owner account and start the first session for your workspace.";
  const switchPrompt =
    mode === "signin" ? "Need an account first?" : "Have an account already?";
  const switchLabel = mode === "signin" ? "Create one" : "Log in here";
  const showSignupEmailField =
    mode === "signup" && isValidFullName(form.name.trim());
  const showSignupPasswordField =
    mode === "signup" &&
    showSignupEmailField &&
    isValidEmail(form.email.trim());
  const showSigninPasswordField =
    mode === "signin" && isValidEmail(form.email.trim());
  const showEmailField = mode === "signin" || showSignupEmailField;
  const showPasswordField =
    mode === "signup" ? showSignupPasswordField : showSigninPasswordField;
  const canSubmit =
    mode === "signup"
      ? isValidFullName(form.name.trim()) &&
        isValidEmail(form.email.trim()) &&
        form.password.length >= 8
      : isValidEmail(form.email.trim()) && form.password.length >= 8;

  return (
    <section className="bg-background relative min-h-screen overflow-hidden p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--bg-light),transparent_28%),radial-gradient(circle_at_bottom_right,var(--bg),transparent_24%),linear-gradient(180deg,var(--bg-dark)_0%,var(--bg)_100%)]" />

      <div className="border-border relative mx-auto flex max-w-420 rounded-[34px] border bg-[linear-gradient(180deg,var(--bg-light),var(--bg))] p-2 shadow-[0_24px_120px_rgba(0,0,0,0.55)]">
        <div className="border-border/40 grid flex-1 overflow-hidden rounded-[30px] border xl:grid-cols-[1.3fr_0.7fr]">
          <div className="bg-foreground text-text relative p-10">
            <Link
              to="/"
              className="text-text-muted hover:text-text inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>

            <div className="mx-auto mt-5 max-w-lg">
              <div className="space-y-4">
                <h1 className="text-text text-4xl tracking-tight md:text-5xl">
                  {title}
                </h1>
                <p className="text-text-muted max-w-lg text-lg">
                  {subtitle} {switchPrompt}{" "}
                  <button
                    type="button"
                    onClick={() =>
                      switchMode(mode === "signin" ? "signup" : "signin")
                    }
                    className="text-text font-medium underline underline-offset-4 transition-opacity duration-200 hover:opacity-80"
                  >
                    {switchLabel}
                  </button>
                </p>
              </div>

              <form className="mt-8 max-w-xl" onSubmit={handleSubmit}>
                {mode === "signup" ? (
                  <label className="block space-y-2.5">
                    <span className="text-text font-medium">Full name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      autoComplete="name"
                      placeholder="Ava Chen"
                      className="border-border bg-background text-text placeholder:text-text-muted/55 focus:border-highlight focus:ring-highlight/10 w-full rounded-2xl border px-4 py-3 text-base transition-all duration-200 outline-none focus:ring-4"
                      required
                    />
                  </label>
                ) : null}

                <div
                  aria-hidden={!showEmailField}
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    showEmailField
                      ? `${mode === "signup" ? "mt-5" : "mt-0"} grid-rows-[1fr] opacity-100`
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div
                    className={`min-h-0 transition-transform duration-500 ease-out ${
                      showEmailField ? "translate-y-0" : "-translate-y-3"
                    }`}
                  >
                    <label className="block space-y-2.5">
                      <span className="text-text font-medium">
                        Email address
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        autoComplete="email"
                        placeholder="Provide your email address"
                        className="border-border bg-background text-text placeholder:text-text-muted/55 focus:border-highlight focus:ring-highlight/10 w-full rounded-2xl border px-4 py-3 text-base transition-all duration-200 outline-none focus:ring-4"
                        required={showEmailField}
                        disabled={!showEmailField}
                      />
                    </label>
                  </div>
                </div>

                <div
                  aria-hidden={!showPasswordField}
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    showPasswordField
                      ? "mt-5 grid-rows-[1fr] opacity-100"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div
                    className={`min-h-0 transition-transform duration-500 ease-out ${
                      showPasswordField ? "translate-y-0" : "-translate-y-3"
                    }`}
                  >
                    <label className="block space-y-2.5">
                      <span className="text-text font-medium">Password</span>
                      <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(event) =>
                          updateField("password", event.target.value)
                        }
                        autoComplete={
                          mode === "signin"
                            ? "current-password"
                            : "new-password"
                        }
                        placeholder="Create your password"
                        className="border-border bg-background text-text placeholder:text-text-muted/55 focus:border-highlight focus:ring-highlight/10 w-full rounded-2xl border px-4 py-3 text-base transition-all duration-200 outline-none focus:ring-4"
                        minLength={8}
                        required={showPasswordField}
                        disabled={!showPasswordField}
                      />
                    </label>
                  </div>
                </div>

                {notice ? (
                  <div
                    className={`mt-5 rounded-3xl border px-4 py-3.5 text-sm leading-6 ${
                      notice.tone === "success"
                        ? "border-highlight/40 bg-secondary text-text"
                        : "border-border bg-background text-text-muted"
                    }`}
                  >
                    {notice.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting || !canSubmit}
                  className="border-border text-text-muted hover:bg-secondary hover:text-text mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-6 py-4 font-semibold transition-all duration-200 active:scale-[0.975] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                  ) : null}
                  {mode === "signin" ? "Sign in" : "Sign up"}
                </button>
              </form>

              <div className="text-text-muted mt-6 flex max-w-xl items-center gap-4 text-xs font-semibold tracking-[0.26em] uppercase">
                <span className="bg-border h-px flex-1" />
                Or
                <span className="bg-border h-px flex-1" />
              </div>

              <Link
                to="/demo"
                className="border-border bg-secondary text-text hover:bg-foreground mt-6 inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-base font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-200 active:scale-[0.985]"
              >
                <span className="bg-foreground text-highlight flex h-9 w-9 items-center justify-center rounded-full">
                  <Sparkles className="h-4 w-4" />
                </span>
                Explore demo workspace first
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="text-text-muted mt-8 max-w-xl text-sm leading-7">
                By signing up you agree to Tactica's{" "}
                <a
                  href="#"
                  className="text-text hover:text-highlight font-medium underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-text hover:text-highlight font-medium underline"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>

          <aside className="text-text relative hidden overflow-hidden bg-[linear-gradient(180deg,var(--bg-light)_0%,var(--bg)_42%,var(--bg-dark)_100%)] p-10 xl:flex xl:flex-col xl:justify-between">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--bg-light),transparent_30%),radial-gradient(circle_at_bottom_right,var(--bg),transparent_26%),linear-gradient(180deg,var(--bg-light),transparent)] opacity-40" />
              <div className="border-border/50 absolute -top-10 -left-10 h-64 w-44 rotate-[-26deg] rounded-[42px] border bg-[linear-gradient(180deg,var(--bg-light),var(--bg))] opacity-60 shadow-[0_0_60px_rgba(0,0,0,0.24)] backdrop-blur-xl" />
              <div className="border-border/40 absolute top-28 right-16 h-96 w-32 rotate-24 rounded-[42px] border bg-[linear-gradient(180deg,var(--bg-light),var(--bg))] opacity-55 shadow-[0_0_80px_rgba(0,0,0,0.18)] backdrop-blur-xl" />
              <div className="border-border/40 absolute -right-8 bottom-8 h-72 w-48 rotate-32 rounded-[48px] border bg-[linear-gradient(180deg,var(--bg-light),var(--bg-dark))] opacity-55 shadow-[0_0_70px_rgba(0,0,0,0.24)] backdrop-blur-xl" />
              <div className="border-border/40 absolute bottom-16 left-28 h-56 w-24 rotate-52 rounded-[36px] border bg-[linear-gradient(180deg,var(--bg-light),var(--bg))] opacity-50 backdrop-blur-xl" />
              <div className="bg-secondary/35 absolute bottom-30 left-8 h-44 w-44 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <Link to="/" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Tactica"
                  className="aspect-8/3 w-34 brightness-[2.3] contrast-125"
                />
              </Link>
              <h2 className="max-w-sm text-5xl font-medium tracking-tight text-balance">
                Walk into the pipeline review already aligned
              </h2>
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-text-muted text-sm leading-6">
                Experiencing issues? <br />
                Get assistance via{" "}
                <a
                  href="mailto:hello@tactica.app"
                  className="text-text hover:text-highlight font-medium underline underline-offset-4"
                >
                  hello@tactica.app
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
