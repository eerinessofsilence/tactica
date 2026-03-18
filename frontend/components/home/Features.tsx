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
    title: "See the live pipeline picture in one dashboard",
    description:
      "Track accounts, opportunities, owners, and next actions without jumping between CRM records, spreadsheets, and status updates",
    bullets: ["Account health", "Pipeline visibility"],
    icon: Layers3,
  },
  {
    eyebrow: "Scenario Logic",
    title: "Compare next-step scenarios before you commit",
    description:
      "Create parallel branches for expansion, recovery, or constrained scenarios and inspect the tradeoffs side by side",
    bullets: ["What-if branches", "Faster course correction"],
    icon: GitBranch,
  },
  {
    eyebrow: "Decision Memory",
    title: "Capture why the account plan changed",
    description:
      "Keep assumptions, risks, checkpoints, and rationale attached to the record so context survives pressure and handoffs",
    bullets: ["Decision trail", "Clear handoffs"],
    icon: ScrollText,
  },
  {
    eyebrow: "Execution Focus",
    title: "Turn pipeline insight into coordinated action",
    description:
      "Surface critical milestones, near-term actions, and accountability so the team stays aligned on what happens next",
    bullets: ["Live priorities", "Explicit ownership"],
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
            <div className="space-y-3">
              <h2
                id="features-title"
                className="text-text max-w-xl text-4xl font-bold text-balance md:text-5xl"
              >
                What revenue teams run inside Tactica
              </h2>
              <p className="max-w-xl text-lg text-pretty md:text-xl">
                Not just CRM and not just another dashboard. These are the
                workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
