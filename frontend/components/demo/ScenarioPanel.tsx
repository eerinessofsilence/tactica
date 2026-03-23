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
    return "border-border/25 bg-background text-text-muted";
  }

  if (risk === "Medium") {
    return "border-border/50 bg-foreground text-text/75";
  }

  return "border-border bg-secondary text-text";
}

export default function ScenarioPanel({
  accountName,
  items,
}: ScenarioPanelProps) {
  return (
    <section className="border-border bg-foreground h-full rounded-[30px] border p-5">
      <h2 className="text-text text-3xl font-semibold max-lg:text-center">
        Compare the next move before the team commits.
      </h2>
      <p className="mt-3 text-sm leading-6 max-lg:text-center md:text-base">
        This is the planning layer of the workspace: the team can compare
        options, expected impact, ownership, and next actions around the same
        account instead of keeping strategy in separate docs.
      </p>
      <div className="flex max-lg:justify-center">
        <div className="border-border bg-foreground mt-4 inline-flex rounded-full border px-1.5 py-0.5">
          <p className="text-xs tracking-widest uppercase">
            Focused account:{" "}
            <strong className="text-text font-medium">{accountName}</strong>
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 xl:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.account}-${item.title}`}
            className="border-border/50 bg-foreground rounded-3xl border p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text text-lg font-semibold">{item.title}</p>
              </div>

              <span
                className={`inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium uppercase ${getRiskClasses(
                  item.risk,
                )}`}
              >
                {item.risk} risk
              </span>
            </div>

            <p className="text-text-muted mt-4 text-sm leading-6">
              {item.summary}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="border-border/50 bg-secondary/25 rounded-[20px] border px-4 py-3">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Expected impact
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.impact}
                </p>
              </div>

              <div className="border-border/50 bg-secondary/25 rounded-[20px] border px-4 py-3">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Owner
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.owner}
                </p>
              </div>
            </div>

            <div className="border-border bg-secondary mt-4 rounded-[20px] border px-4 py-3">
              <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                Next action
              </p>
              <p className="text-text mt-2 text-sm leading-6 font-medium">
                {item.nextAction}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
