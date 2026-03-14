import type { LucideIcon } from "lucide-react";
import { GitBranchPlus, Lightbulb, Radar, Users } from "lucide-react";
import { useTheme } from "../../src/theme";

type SolutionCard = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const SOLUTION_CARDS: SolutionCard[] = [
  {
    eyebrow: "CRM Foundation",
    title: "Keep every account in view",
    description:
      "Track accounts, owners, open work, and pipeline movement in one shared workspace instead of splitting context across CRM tables and status docs.",
    icon: Radar,
  },
  {
    eyebrow: "Scenario Planning",
    title: "Plan the next move before the team commits",
    description:
      "Compare expansion, recovery, and fallback paths around the same account or initiative while decisions are still cheap to change.",
    icon: GitBranchPlus,
  },
  {
    eyebrow: "Shared Execution",
    title: "Align execution across the revenue team",
    description:
      "Give sales, ops, customer, and leadership the same live operating view instead of fragmented updates and recreated context.",
    icon: Users,
  },
];

export default function Solutions() {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="container mx-auto scroll-mt-32 px-5"
    >
      <div className="relative isolate">
        <div className="border-border bg-gradient shadow-text/25 relative rounded-[48px] border bg-linear-to-br p-6 shadow-inner lg:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-[radial-gradient(circle_at_top_left,rgba(255,157,79,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(112,82,90,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[52px_52px] opacity-35" />

          <div className="relative z-10">
            <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <div className="border-border bg-foreground text-text-muted shadow-text/25 hidden items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium shadow-inner backdrop-blur-sm lg:inline-flex">
                  <Lightbulb
                    fill="#f7c178"
                    className="h-5 w-5 text-[#f7c178]"
                  />
                  <span>Revenue Workspace</span>
                </div>

                <div className="flex flex-col items-center space-y-5 max-lg:justify-center max-lg:text-center lg:items-start">
                  <h2
                    id="solutions-title"
                    className="text-text max-w-md text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:leading-[0.95] xl:max-w-lg xl:text-6xl"
                  >
                    One workspace for accounts, pipeline, and next steps.
                  </h2>
                  <p className="max-w-lg:max-w-md text-lg text-balance lg:max-w-xs xl:max-w-xl xl:text-xl xl:leading-8">
                    Tactica is an operational CRM and revenue planning workspace
                    for teams managing complex accounts and live pipeline
                    decisions. It combines dashboard visibility, account
                    context, scenario planning, and execution tracking in one
                    system, so sales, RevOps, and customer-facing teams can make
                    better decisions, stay aligned on next steps, and move
                    revenue forward without rebuilding context across tools.
                  </p>
                </div>

                <div className="flex max-lg:justify-center">
                  <a
                    href="#pricing"
                    className="group text-text-muted hover:text-text hover:bg-secondary bg-foreground border-border hover:shadow-text/30 shadow-text/20 mt-3 inline-flex items-center gap-3 rounded-full border px-8 py-4 text-lg font-medium shadow-inner transition-all duration-200 active:scale-[0.975]"
                  >
                    Explore pricing
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center lg:hidden">
                  <div className="border-border bg-foreground text-text-muted shadow-text/25 mb-3 inline-flex w-fit items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium shadow-inner backdrop-blur-sm">
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
                      className={`shadow-text/25 bg-foreground border-border relative flex flex-col overflow-hidden rounded-4xl border p-6 shadow-inner ${
                        isLightTheme
                          ? "bg-[linear-gradient(120deg,rgba(0,0,0,0.025),rgba(0,0,0,0.25))]"
                          : "bg-[linear-gradient(120deg,rgba(255,255,255,0.025),rgba(255,255,255,0.1))]"
                      }`}
                    >
                      <div className="relative z-10 flex h-full flex-col space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-text max-w-md text-3xl font-semibold tracking-tight text-balance">
                            {card.title}
                          </h3>
                          <div className="border-border bg-foreground shadow-text/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-inner">
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
