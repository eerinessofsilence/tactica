export type ScenarioItem = {
  title: string;
  account: string;
  impact: string;
  risk: "Low" | "Medium" | "High";
  owner: string;
  nextAction: string;
  summary: string;
};

type ScenarioPanelProps = {
  accountName: string;
  items: ScenarioItem[];
};

function getRiskClasses(risk: ScenarioItem["risk"]) {
  if (risk === "Low") {
    return "border-border/50 bg-[oklch(75%_0.15_120)]/25";
  }

  if (risk === "Medium") {
    return "border-border/50 bg-[oklch(75%_0.15_40)]/50";
  }

  return "border-border/50 bg-[oklch(75%_0.15_20)]/75";
}

export default function ScenarioPanel({
  accountName,
  items,
}: ScenarioPanelProps) {
  return (
    <section className="bg-foreground h-full rounded-[30px] p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-text text-3xl font-semibold max-lg:text-center">
          Compare the next move before the team commits
        </h2>
        <p className="border-border/50 bg-secondary/50 w-fit rounded-full border px-3 py-1 font-medium">
          {accountName}
        </p>
      </div>

      <div className="mt-6 grid gap-3 xl:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.account}-${item.title}`}
            className="border-border/50 bg-foreground flex flex-col justify-between gap-6 rounded-3xl border p-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h1 className="text-text text-xl font-medium">{item.title}</h1>

                <span
                  className={`text-text-muted inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium uppercase ${getRiskClasses(
                    item.risk,
                  )}`}
                >
                  {item.risk} risk
                </span>
              </div>
              <p className="text-text-muted max-w-md leading-6">
                {item.summary}
              </p>
            </div>

            <div className="grid gap-3 text-pretty md:grid-cols-2">
              <div className="border-border/25 bg-secondary/25 space-y-2 rounded-[20px] border px-4 py-3">
                <p className="text-text-muted text-xs font-medium tracking-widest uppercase">
                  Expected impact
                </p>
                <p className="text-text font-semibold">{item.impact}</p>
              </div>

              <div className="border-border/25 bg-secondary/25 space-y-2 rounded-[20px] border px-4 py-3">
                <p className="text-text-muted text-xs font-medium tracking-widest uppercase">
                  Owner
                </p>
                <p className="text-text font-semibold">{item.owner}</p>
              </div>
              <div className="border-border/25 bg-secondary/25 col-span-2 space-y-2 rounded-[20px] border px-4 py-3">
                <p className="text-text-muted text-xs font-medium tracking-widest uppercase">
                  Next action
                </p>
                <p className="text-text font-semibold">{item.nextAction}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
