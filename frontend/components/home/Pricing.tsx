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
    period: "/month",
    description:
      "For early revenue teams replacing spreadsheet-driven pipeline reviews with one shared workspace.",
    highlight: "Best for first operating playbooks",
    cta: "Start with Starter",
    icon: Radar,
    features: [
      "Shared account and pipeline dashboard",
      "Core CRM and opportunity tracking",
      "Next-step scenario planning",
      "Weekly pipeline review cadence",
    ],
  },
  {
    name: "Ops",
    price: "$79",
    period: "/month",
    description:
      "For revenue teams actively coordinating pipeline risk, account plans, and cross-functional follow-through.",
    highlight: "Most teams running live operations start here",
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
      "For organizations running strategic accounts across multiple teams, regions, and operating layers.",
    highlight: "For multi-team planning environments",
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
  "Replace CRM-plus-spreadsheet drift with one operating layer for pipeline reviews and next-step planning.",
  "Keep visibility, account context, and execution reviews in the same workspace.",
  "Scale into governance and rollout support only when coordination complexity actually demands it.",
];

const COMPARISON_ROWS = [
  {
    label: "Best fit",
    values: [
      "Founder-led or early revenue teams",
      "Growing teams running live pipeline reviews",
      "Strategic account organizations across multiple teams",
    ],
  },
  {
    label: "Workflow depth",
    values: [
      "Core CRM + workspace views",
      "Scenario planning + execution coordination",
      "Governed workflows + custom rollout",
    ],
  },
  {
    label: "Support model",
    values: ["Self-serve", "Guided team adoption", "Hands-on rollout support"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="container mx-auto px-5"
    >
      <div className="border-border/50 bg-foreground relative overflow-hidden rounded-[2.5rem] border p-6 shadow-inner shadow-white/15 lg:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.12),transparent_38%)]" />

        <div className="relative z-10 space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="pricing-title"
              className="text-text mt-4 text-4xl font-bold text-balance md:text-5xl"
            >
              Choose the revenue workspace your team needs now.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-balance md:text-xl">
              Start with shared account visibility and pipeline discipline, then
              add deeper planning, inspection rituals, and rollout support as
              account complexity grows.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {BUY_SIGNALS.map((signal) => (
              <div
                key={signal}
                className="border-border bg-foreground shadow-text/20 flex max-w-sm items-center gap-3 rounded-full border px-4 py-3 shadow-inner"
              >
                <Check className="text-text h-6 w-6 shrink-0" />
                <p className="text-sm text-balance">{signal}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
            {PLANS.map((plan) => {
              return (
                <article
                  key={plan.name}
                  className={`relative overflow-hidden rounded-4xl border p-5 ${
                    plan.featured
                      ? "border-border bg-foreground shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:-mt-6"
                      : "border-border/50 bg-foreground shadow-inner shadow-white/20"
                  }`}
                >
                  {plan.featured ? (
                    <div className="shadow-text/20 pointer-events-none absolute inset-0 shadow-inner" />
                  ) : null}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-28 ${
                      plan.featured
                        ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]"
                        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-text text-2xl font-semibold">
                        {plan.name}
                      </p>
                      {plan.featured ? (
                        <span className="bg-text text-background shadow-background/25 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase shadow-inner">
                          Recommended
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-end gap-2">
                        <p className="text-text text-4xl font-bold">
                          {plan.price}
                        </p>
                        <p className="text-text-muted pb-1 text-sm tracking-[0.18em] uppercase">
                          {plan.period}
                        </p>
                      </div>
                      <p className="text-sm text-balance md:text-base">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="mt-6 grid gap-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="border-border bg-foreground text-text shadow-text/20 flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm shadow-inner"
                        >
                          <Check className="h-4 w-4 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#faq"
                      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.975] ${
                        plan.featured
                          ? "shadow-text/20 hover:shadow-text/30 border-border bg-secondary text-text hover:bg-foreground hover:text-text-muted shadow-inner"
                          : "border-border hover:shadow-text/30 shadow-text/20 hover:text-text bg-foreground hover:bg-secondary shadow-inner"
                      }`}
                    >
                      {plan.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="shadow-text/20 border-border bg-foreground mt-8 overflow-hidden rounded-4xl border shadow-inner">
            <div className="overflow-x-auto overscroll-contain">
              <div className="min-w-180">
                <div className="text-text-muted/75 border-border grid grid-cols-[160px_repeat(3,minmax(160px,1fr))] border-b px-5 py-4 text-sm md:grid-cols-[1.1fr_1fr_1fr_1fr] md:px-6">
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
                    className={`grid grid-cols-[160px_repeat(3,minmax(160px,1fr))] gap-4 px-5 py-4 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:px-6 ${
                      index < COMPARISON_ROWS.length - 1
                        ? "border-border border-b"
                        : ""
                    }`}
                  >
                    <p className="text-text text-sm font-semibold md:text-base">
                      {row.label}
                    </p>
                    {row.values.map((value) => (
                      <p
                        key={value}
                        className="text-text-muted text-sm md:text-base"
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
