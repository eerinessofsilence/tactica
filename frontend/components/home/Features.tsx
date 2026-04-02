import type { LucideIcon } from "lucide-react";
import { Crosshair, GitBranch, Layers3, ScrollText } from "lucide-react";

const FEATURES: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}[] = [
  {
    eyebrow: "Unified Dashboard",
    title: "See pipeline health and account focus in one dashboard",
    description:
      "Track coverage, risk, owners, and next actions without jumping across CRM records, spreadsheets, and status threads",
    bullets: ["Pipeline health", "Account focus"],
    icon: Layers3,
  },
  {
    eyebrow: "Scenario Logic",
    title: "Compare scenario paths before the team commits",
    description:
      "Lay out recovery, expansion, or fallback branches and review the tradeoffs side by side before changing the plan",
    bullets: ["Scenario branches", "Decision tradeoffs"],
    icon: GitBranch,
  },
  {
    eyebrow: "Decision Memory",
    title: "Keep the why behind every account change",
    description:
      "Store assumptions, risks, and review notes with the account so context survives pressure, handoffs, and ownership changes",
    bullets: ["Decision history", "Shared context"],
    icon: ScrollText,
  },
  {
    eyebrow: "Execution Focus",
    title: "Turn review decisions into owned next actions",
    description:
      "Push the team from inspection to follow-through with explicit owners, due dates, and the next step tied to the account",
    bullets: ["Clear ownership", "Next actions"],
    icon: Crosshair,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="container mx-auto px-5"
    >
      <div className="grid gap-16 xl:grid-cols-[1.2fr_0.66fr]">
        <div className="border-border bg-foreground h-fit overflow-hidden rounded-[36px] border">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const featureNumber = index + 1;

            return (
              <article
                key={feature.title}
                className={`bg-secondary/25 grid h-fit gap-5 px-7.5 py-14 pt-12 md:grid-cols-[72px_1fr_auto] ${
                  index < FEATURES.length - 1 ? "border-border border-b" : ""
                }`}
              >
                <div className="flex max-md:items-center max-md:justify-between">
                  <div className="text-text-muted/25 ml-2 text-4xl font-thin md:text-5xl">
                    {"0" + featureNumber}
                  </div>
                  <div className="border-border bg-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border md:mt-1 md:hidden">
                    <Icon className="text-text h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {feature.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="border-border bg-foreground text-text-muted py-0.35 rounded-full border px-2 text-sm"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-text max-w-lg text-2xl font-semibold text-balance md:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="max-w-2xl text-sm text-balance md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="bg-secondary hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl md:mt-1 md:flex">
                  <Icon className="text-text/90 h-6 w-6" />
                </div>
              </article>
            );
          })}
        </div>
        <div className="space-y-8 lg:space-y-16 xl:pt-4">
          <div className="flex max-xl:justify-center max-xl:text-center xl:sticky xl:top-32">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2
                  id="features-title"
                  className="text-text max-w-xl text-4xl font-bold text-balance md:text-5xl"
                >
                  What teams actually run inside Tactica
                </h2>
                <p className="max-w-xl text-lg text-pretty md:text-xl">
                  Not another CRM dashboard. A workspace for review, planning,
                  and follow-through.
                </p>
              </div>
              <div className="flex max-lg:justify-center">
                <a
                  href="/demo"
                  className="bg-secondary/10 text-text hover:text-background rounded-full px-6 py-3 text-xl shadow-[inset_0_2px_oklch(50%_0_0)] transition-all duration-300 hover:bg-[oklch(85%_0_0)] active:scale-[0.975]"
                >
                  Open demo workspace
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
