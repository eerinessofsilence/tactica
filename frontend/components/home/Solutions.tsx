import type { LucideIcon } from "lucide-react";
import { GitBranchPlus, Lightbulb, Radar, Users } from "lucide-react";

type SolutionCard = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const SOLUTION_CARDS: SolutionCard[] = [
  {
    eyebrow: "CRM Foundation",
    title: "Keep pipeline and account context in one view",
    description:
      "Track accounts, owners, risk, and open work in one shared workspace instead of stitching decisions together from CRM tabs and status docs",
    icon: Radar,
  },
  {
    eyebrow: "Scenario Planning",
    title: "Compare the next move before the team commits",
    description:
      "Model recovery, expansion, and fallback paths around the same account while the team can still weigh tradeoffs and change course",
    icon: GitBranchPlus,
  },
  {
    eyebrow: "Shared Execution",
    title: "Coordinate follow-through across the team",
    description:
      "Give sales, RevOps, customer, and leadership the same live plan so ownership, timing, and handoffs stay visible after the decision",
    icon: Users,
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="container mx-auto px-5"
    >
      <div className="relative isolate">
        <div className="border-border bg-foreground relative rounded-[48px] border bg-linear-to-br p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-[radial-gradient(circle_at_top_left,rgba(255,157,79,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(112,82,90,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[52px_52px] opacity-35" />

          <div className="relative z-10">
            <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:justify-between">
              <div className="space-y-6">
                <div className="border-border/50 bg-secondary/50 text-text-muted hidden items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium backdrop-blur-sm lg:inline-flex">
                  <Lightbulb
                    fill="#f7c178"
                    className="h-5 w-5 text-[#f7c178]/75"
                  />
                  <span>Revenue Workspace</span>
                </div>

                <div className="flex flex-col items-center space-y-5 text-pretty max-lg:justify-center max-lg:text-center lg:items-start">
                  <h2
                    id="solutions-title"
                    className="text-text max-w-lg text-3xl font-semibold tracking-tight md:text-4xl lg:leading-[0.95] xl:max-w-xl xl:text-5xl"
                  >
                    One workspace for pipeline reviews, account context, and
                    next actions
                  </h2>
                  <p className="max-w-md text-lg lg:max-w-2xl lg:text-xl xl:leading-8">
                    Tactica gives revenue teams a shared operating layer for
                    live accounts: pipeline visibility, scenario planning, and
                    execution in one place
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center lg:hidden">
                  <div className="border-border bg-foreground text-text-muted mb-3 inline-flex w-fit items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    <Lightbulb
                      fill="#f7c178"
                      className="h-5 w-5 text-[#f7c178]"
                    />
                    <span>Revenue Workspace</span>
                  </div>
                </div>
                {SOLUTION_CARDS.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.title}
                      className="bg-foreground border-border relative flex flex-col overflow-hidden rounded-4xl border bg-[linear-gradient(120deg,rgba(255,255,255,0.025),rgba(255,255,255,0.1))] p-6"
                    >
                      <div className="relative z-10 flex h-full flex-col space-y-1.5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-text max-w-md text-3xl font-semibold tracking-tight text-balance">
                            {card.title}
                          </h3>
                          <div className="bg-foreground shadow-text/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                            <Icon className="text-text-muted h-5 w-5" />
                          </div>
                        </div>

                        <p className="text-text-muted max-w-md leading-5 text-pretty">
                          {card.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
