import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Check,
  Crosshair,
  Radar,
  ShieldCheck,
} from "lucide-react";

const PLANS: {
  name: string;
  price: string;
  period: string;
  description: string;
  highlight: string;
  cta: string;
  icon: LucideIcon;
  featured?: boolean;
  features: string[];
}[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/ month",
    description:
      "For early revenue teams replacing scattered pipeline reviews with one shared workspace",
    highlight: "Best for first review and planning rhythms",
    cta: "Start with Starter",
    icon: Radar,
    features: [
      "Shared account and pipeline dashboard",
      "Core account and opportunity tracking",
      "Scenario planning basics",
      "Weekly review workflow",
    ],
  },
  {
    name: "Ops",
    price: "$79",
    period: "/ month",
    description:
      "For revenue teams coordinating pipeline risk, account strategy, and cross-functional execution every week",
    highlight: "Most teams running active reviews start here",
    cta: "Choose Ops",
    icon: Crosshair,
    featured: true,
    features: [
      "Everything in Starter",
      "Advanced scenario workflows",
      "Decision history and checkpoints",
      "Priority views for handoffs and execution",
      "Team review and inspection sessions",
    ],
  },
  {
    name: "Command",
    price: "Custom",
    period: "annual",
    description:
      "For organizations running strategic accounts across multiple teams, regions, and operating motions",
    highlight: "For governed multi-team rollouts",
    cta: "Talk to sales",
    icon: ShieldCheck,
    features: [
      "Everything in Ops",
      "Custom onboarding and migration",
      "Dedicated rollout and operating support",
      "Enterprise governance controls",
      "Scaled adoption across larger revenue teams",
    ],
  },
];

const BUY_SIGNALS = [
  "Run pipeline reviews and next-step planning in the same workspace",
  "Keep account context, ownership, and follow-through attached to the record",
  "Add rollout support only when team complexity actually requires it",
];

const COMPARISON_ROWS = [
  {
    label: "Best fit",
    values: [
      "Founder-led or early revenue teams",
      "Growing teams running weekly pipeline reviews",
      "Multi-team account organizations with governance needs",
    ],
  },
  {
    label: "Workflow depth",
    values: [
      "Shared visibility + basic planning",
      "Scenario planning + execution coordination",
      "Governed workflows + tailored rollout",
    ],
  },
  {
    label: "Support model",
    values: ["Self-serve", "Guided team adoption", "Hands-on rollout support"],
  },
];

const COMPARISON_GRID_CLASS =
  "grid grid-cols-[minmax(80px,0.5fr)_repeat(3,minmax(180px,1fr))] gap-x-5";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="container mx-auto px-5"
    >
      <div className="border-border/50 bg-foreground relative overflow-hidden rounded-[2.5rem] border p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.12),transparent_38%)]" />

        <div className="relative z-10 space-y-24">
          <div className="flex items-center">
            <div className="space-y-3">
              <h2
                id="pricing-title"
                className="text-text text-4xl font-bold md:text-5xl"
              >
                Choose the depth your team needs now
              </h2>
              <p className="text-lg text-pretty md:text-xl">
                Start with account and pipeline visibility, then add deeper
                planning, decision history, and rollout support as operating
                complexity grows
              </p>
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              {BUY_SIGNALS.map((signal, index) => (
                <div
                  key={signal}
                  className={`border-border/50 bg-foreground flex max-w-sm items-center gap-3 rounded-full border px-4 py-2 ${index == 1 ? "mr-5" : index == 2 ? "mr-10" : ""}`}
                >
                  <Check className="h-6 w-6 shrink-0 text-[#13C750]" />
                  <p className="max-w-[85%] text-sm text-pretty">{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
            {PLANS.map((plan) => {
              return (
                <article
                  key={plan.name}
                  className={`relative overflow-hidden rounded-4xl border p-5 ${
                    plan.featured
                      ? "border-border bg-secondary/10 shadow-[0_5px_15px_rgba(255,255,255,0.05)] lg:-mt-6"
                      : "border-border/50 bg-secondary/10"
                  }`}
                >
                  {plan.featured ? (
                    <div className="pointer-events-none absolute inset-0" />
                  ) : null}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-28 ${
                      plan.featured
                        ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]"
                        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-text-muted text-2xl">{plan.name}</p>
                      {plan.featured ? (
                        <span className="text-background shadow-background/25 rounded-full bg-[#FF8101] px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                          Recommended
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <p className="text-text text-4xl font-bold">
                          {plan.price}
                        </p>
                        <p className="text-text-muted text-sm tracking-widest">
                          {plan.period}
                        </p>
                      </div>
                      <p className="text-sm text-pretty md:text-base">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="mt-6 grid gap-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="border-border/25 bg-foreground text-text flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#13C750]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#faq"
                      className={`mt-6 inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-center text-xl shadow-[inset_0_2px_oklch(50%_0_0)] transition-all duration-300 hover:bg-[oklch(85%_0_0)] active:scale-[0.975] ${
                        plan.featured
                          ? "text-secondary hover:text-text hover:bg-foreground bg-[oklch(85%_0_0)] transition-all duration-300"
                          : "hover:text-background bg-foreground hover:bg-[oklch(85%_0_0)]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowUpRight className="mt-1 h-5 w-5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="border-border/25 bg-foreground mt-8 overflow-hidden rounded-4xl border">
            <div className="overflow-x-auto overscroll-contain">
              <div className="min-w-200">
                <div
                  className={`${COMPARISON_GRID_CLASS} text-text-muted/75 border-border/25 items-end border-b px-5 py-4 text-sm md:px-6`}
                >
                  <p className="font-medium tracking-widest uppercase">
                    Compare
                  </p>
                  {PLANS.map((plan) => (
                    <p
                      key={plan.name}
                      className="font-medium tracking-wider uppercase"
                    >
                      {plan.name}
                    </p>
                  ))}
                </div>

                {COMPARISON_ROWS.map((row, index) => (
                  <div
                    key={row.label}
                    className={`${COMPARISON_GRID_CLASS} items-start px-5 py-5 md:px-6 ${
                      index < COMPARISON_ROWS.length - 1
                        ? "border-border/25 border-b"
                        : ""
                    }`}
                  >
                    <p className="text-text pr-3 text-sm leading-6 font-semibold md:text-base">
                      {row.label}
                    </p>
                    {row.values.map((value) => (
                      <p
                        key={value}
                        className="text-text-muted text-sm leading-6 text-pretty md:text-base"
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
