import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useTheme } from "../src/theme";

const COMPANY_LINKS = [
  { label: "Why Tactica", href: "#features" },
  { label: "How the revenue workspace works", href: "#solutions" },
  { label: "Migration and rollout", href: "#faq" },
  { label: "Compare revenue plans", href: "#pricing" },
];

const NAVIGATION_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const CONTACT_ITEMS = [
  {
    label: "hello@tactica.app",
    href: "mailto:hello@tactica.app",
    icon: Mail,
  },
  {
    label: "+1 (555) 000-2048",
    href: "tel:+15550002048",
    icon: Phone,
  },
  {
    label: "Remote-first / distributed revenue teams",
    href: "#faq",
    icon: MapPin,
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
];

const FOOTER_LINKS = [
  { label: "Pipeline visibility", href: "#features" },
  { label: "Account planning", href: "#solutions" },
  { label: "Rollout support", href: "#faq" },
];

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme === "light";
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-5 pb-8">
      <div className="space-y-4">
        <section
          aria-labelledby="footer-cta-title"
          className="border-border bg-background shadow-text/20 relative overflow-hidden rounded-[40px] border px-6 py-12 shadow-inner lg:px-8 lg:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,104,34,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(200,157,79,0.18),transparent_34%),radial-gradient(circle_at_left,rgba(112,82,90,0.18),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,54,65,0.07),transparent_30%,rgba(53,200,43,0.1)_100%)]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              id="footer-cta-title"
              className="text-text mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
            >
              Ready to run accounts, pipeline, and next steps in one workspace?
            </h2>

            <p className="mt-4 max-w-2xl text-base text-balance md:text-lg">
              Replace CRM-plus-spreadsheet drift with one workspace for account
              context, pipeline reviews, scenario planning, and coordinated
              execution.
            </p>

            <a
              href="/demo"
              className="bg-foreground hover:shadow-text/30 group shadow-text/20 hover:text-text hover:bg-secondary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-inner transition-all duration-200 active:scale-[0.975]"
            >
              Open demo workspace
              <ArrowUpRight className="group h-5 w-5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        <div className="border-border bg-foreground shadow-text/20 relative overflow-hidden rounded-[2.5rem] border p-6 shadow-inner lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,157,79,0.06),transparent_26%)]" />

          <div className="relative z-10">
            <div className="grid gap-5 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-between">
              <a href="/" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Tactica"
                  className="aspect-8/3 w-30 lg:w-35"
                />
              </a>

              <div className="flex justify-end lg:text-right">
                <p className="max-w-md text-lg text-pretty">
                  Revenue workspace for teams that need account context, pipeline
                  visibility, and next-step coordination in one place.
                </p>
              </div>
            </div>

            <div className="border-border/50 my-6 border-t" />

            <div className="flex justify-between">
              <div className="grid max-w-150 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-text text-lg font-semibold">Company</p>
                  <div className="mt-4 grid gap-3">
                    {COMPANY_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-text-muted hover:text-text inline-flex items-center gap-2 text-sm transition-colors duration-200"
                      >
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-text text-lg font-semibold">Navigation</p>
                  <div className="mt-4 grid gap-3">
                    {NAVIGATION_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-text-muted hover:text-text inline-flex items-center gap-2 text-sm transition-colors duration-200"
                      >
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-text text-lg font-semibold">Contact</p>
                  <div className="mt-4 space-y-2">
                    {CONTACT_ITEMS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group flex items-center gap-3"
                        >
                          <div className="border-border bg-foreground shadow-text/20 group-hover:bg-secondary group-hover:shadow-text/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-inner transition-all duration-200">
                            <Icon className="text-text h-5 w-5" />
                          </div>
                          <p className="text-text-muted group-hover:text-text text-sm transition-colors duration-200">
                            {item.label}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col items-end gap-5">
                <button
                  type="button"
                  role="switch"
                  aria-checked={isLightTheme}
                  aria-label={
                    isLightTheme
                      ? "Switch to dark theme"
                      : "Switch to light theme"
                  }
                  onClick={toggleTheme}
                  className="border-border/50 bg-foreground shadow-text/20 relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-full border px-1.5 shadow-inner transition-all duration-200 active:scale-[0.97]"
                >
                  <span className="pointer-events-none relative z-10 grid w-full grid-cols-2 place-items-center">
                    <Sun
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isLightTheme ? "text-text" : "text-text-muted/55"
                      }`}
                    />
                    <Moon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isLightTheme ? "text-text-muted" : "text-text"
                      }`}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className={`border-border bg-secondary absolute top-0.75 left-1.5 h-8 w-8 rounded-full border shadow-sm transition-transform duration-300 ${
                      isLightTheme ? "translate-x-0" : "translate-x-8.25"
                    }`}
                  />
                </button>

                <div className="flex flex-wrap gap-2 xl:justify-end">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="border-border group bg-foreground shadow-text/20 hover:bg-secondary hover:shadow-text/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-inner transition-all duration-200"
                      >
                        <Icon className="group group-hover:text-text h-5 w-5 transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-border/50 mt-6 flex flex-col gap-4 border-t pt-5 md:flex-row md:items-center md:justify-between">
              <p className="text-text-muted text-sm">
                © {year} Tactica. Built for revenue teams managing live
                accounts, pipeline decisions, and cross-functional execution.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-text-muted hover:text-text text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
