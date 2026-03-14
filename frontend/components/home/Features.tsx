import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Crosshair,
  GitBranch,
  Layers3,
  ScrollText,
} from "lucide-react";

const FEATURES: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}[] = [
  {
    eyebrow: "Unified Dashboard",
    title: "See the live pipeline picture in one dashboard.",
    description:
      "Track accounts, opportunities, owners, and next actions without jumping between CRM records, spreadsheets, and status updates.",
    bullets: ["Account health", "Pipeline visibility"],
    icon: Layers3,
  },
  {
    eyebrow: "Scenario Logic",
    title: "Compare next-step scenarios before you commit.",
    description:
      "Create parallel branches for expansion, recovery, or constrained scenarios and inspect the tradeoffs side by side.",
    bullets: ["What-if branches", "Faster course correction"],
    icon: GitBranch,
  },
  {
    eyebrow: "Decision Memory",
    title: "Capture why the account plan changed.",
    description:
      "Keep assumptions, risks, checkpoints, and rationale attached to the record so context survives pressure and handoffs.",
    bullets: ["Decision trail", "Clear handoffs"],
    icon: ScrollText,
  },
  {
    eyebrow: "Execution Focus",
    title: "Turn pipeline insight into coordinated action.",
    description:
      "Surface critical milestones, near-term actions, and accountability so the team stays aligned on what happens next.",
    bullets: ["Live priorities", "Explicit ownership"],
    icon: Crosshair,
  },
];

const CONTROL_NOTES = [
  "Dashboard metrics stay tied to real account and pipeline context.",
  "Planning, CRM activity, and reviews live in the same workflow.",
  "Execution moves forward with the same decision trail the team used earlier.",
  "Scenario changes stay visible when ownership or risk shifts under pressure.",
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="container mx-auto px-5"
    >
      <div className="grid gap-8 xl:grid-cols-[0.66fr_1.34fr]">
        <div className="space-y-8 lg:space-y-16 xl:pt-4">
          <div className="flex max-xl:justify-center max-xl:text-center">
            <div className="space-y-3">
              <h2
                id="features-title"
                className="text-text max-w-xl text-4xl font-bold text-balance italic md:text-5xl"
              >
                What revenue teams can actually run inside Tactica.
              </h2>
              <p className="max-w-xl text-lg text-pretty md:text-xl">
                Not just another CRM and not just another dashboard. These are
                the core workflows revenue teams use to inspect pipeline, plan
                the next move, and coordinate execution.
              </p>
            </div>
          </div>

          <div className="border-border bg-foreground shadow-text/20 rounded-4xl border p-5 shadow-inner">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-text text-xl font-semibold">Control notes</p>
                <p className="max-w-sm text-sm md:text-base">
                  The value comes from keeping the operating picture connected.
                </p>
              </div>
              <a
                href="#solutions"
                className="border-border group bg-foreground text-text hover:bg-secondary shadow-text/20 hover:shadow-text/30 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-inner transition-colors duration-200"
                aria-label="See solutions"
              >
                <ArrowUpRight className="group group-hover:text-text h-6 w-6 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-5 space-y-3">
              {CONTROL_NOTES.map((note) => (
                <div
                  key={note}
                  className="border-border shadow-text/20 bg-foreground rounded-[20px] border px-4 py-2 shadow-inner"
                >
                  <p className="text-text text-sm md:text-base">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border bg-foreground shadow-text/20 h-fit overflow-hidden rounded-[42px] border shadow-inner">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const featureNumber = index + 1;

            return (
              <article
                key={feature.title}
                className={`grid h-fit gap-5 p-5 md:grid-cols-[72px_1fr_auto] ${
                  index < FEATURES.length - 1 ? "border-border border-b" : ""
                } ${index % 2 === 0 ? "bg-secondary/25" : "bg-foreground"}`}
              >
                <div className="flex max-md:items-center max-md:justify-between">
                  <div
                    className={`text-4xl font-semibold md:text-5xl ${featureNumber == 1 ? "text-text-muted/50" : ""} ${featureNumber == 2 ? "text-text-muted/75" : ""} ${featureNumber == 3 ? "text-text-muted" : ""} ${featureNumber == 4 ? "text-text/75" : ""}`}
                  >
                    {"0" + featureNumber}
                  </div>
                  <div className="border-border bg-foreground shadow-text/25 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-inner md:mt-1 md:hidden">
                    <Icon className="text-text h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-text max-w-lg text-2xl font-semibold text-balance md:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="max-w-2xl text-sm text-balance md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {feature.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="border-border bg-foreground text-text-muted shadow-text/20 rounded-full border px-3 py-2 text-sm shadow-inner"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-border bg-foreground shadow-text/25 hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-inner md:mt-1 md:flex">
                  <Icon className="text-text h-6 w-6" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
