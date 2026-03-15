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
    return "bg-secondary/25 text-text";
  }

  if (risk === "Medium") {
    return "bg-[rgba(255,157,79,0.18)] text-text";
  }

  return "bg-[rgba(255,90,90,0.18)] text-text";
}

export default function ScenarioPanel({
  accountName,
  items,
}: ScenarioPanelProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
        Scenario Planner
      </p>
      <h2 className="text-text mt-4 text-3xl font-semibold text-balance">
        Compare the next move before the team commits.
      </h2>
      <p className="text-text-muted mt-3 text-sm text-balance md:text-base">
        This is the planning layer of the workspace: the team can compare
        options, expected impact, ownership, and next actions around the same
        account instead of keeping strategy in separate docs.
      </p>
      <div className="border-border mt-4 inline-flex rounded-full border px-3 py-2 shadow-inner">
        <p className="text-text text-xs font-medium uppercase tracking-[0.12em]">
          Focused account: {accountName}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.account}-${item.title}`}
            className="border-border bg-foreground rounded-[22px] border p-4 shadow-inner"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-text text-lg font-semibold">{item.title}</p>
                <p className="text-text-muted mt-1 text-sm">{item.account}</p>
              </div>

              <span
                className={`border-border inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner ${getRiskClasses(
                  item.risk,
                )}`}
              >
                {item.risk} risk
              </span>
            </div>

            <p className="text-text-muted mt-4 text-sm text-balance">
              {item.summary}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="border-border rounded-2xl border px-4 py-3 shadow-inner">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Expected impact
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.impact}
                </p>
              </div>

              <div className="border-border rounded-2xl border px-4 py-3 shadow-inner">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Owner
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.owner}
                </p>
              </div>
            </div>

            <div className="border-border mt-4 rounded-2xl border px-4 py-3 shadow-inner">
              <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                Next action
              </p>
              <p className="text-text mt-2 text-sm font-medium text-balance">
                {item.nextAction}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
