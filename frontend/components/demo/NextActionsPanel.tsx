export type NextActionItem = {
  title: string;
  owner: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  context: string;
};

type NextActionsPanelProps = {
  accountName: string;
  items: NextActionItem[];
};

function getPriorityClasses(priority: NextActionItem["priority"]) {
  if (priority === "Low") {
    return "bg-secondary/25 text-text";
  }

  if (priority === "Medium") {
    return "bg-[rgba(255,157,79,0.18)] text-text";
  }

  return "bg-[rgba(255,90,90,0.18)] text-text";
}

export default function NextActionsPanel({
  accountName,
  items,
}: NextActionsPanelProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
        Next Actions
      </p>
      <h2 className="text-text mt-4 text-3xl font-semibold text-balance">
        Turn pipeline visibility into clear ownership.
      </h2>
      <p className="text-text-muted mt-3 text-sm text-balance md:text-base">
        The action panel translates account context and scenario choices into
        explicit follow-through so the team knows what happens next.
      </p>
      <div className="border-border mt-4 inline-flex rounded-full border px-3 py-2 shadow-inner">
        <p className="text-text text-xs font-medium uppercase tracking-[0.12em]">
          Active actions for {accountName}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.owner}`}
            className="border-border bg-foreground rounded-[22px] border p-4 shadow-inner"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <span
                className={`border-border inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner ${getPriorityClasses(
                  item.priority,
                )}`}
              >
                {item.priority}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="border-border rounded-2xl border px-3 py-3 shadow-inner">
                <p className="text-text-muted text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Owner
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.owner}
                </p>
              </div>

              <div className="border-border rounded-2xl border px-3 py-3 shadow-inner">
                <p className="text-text-muted text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Due
                </p>
                <p className="text-text mt-2 text-sm font-medium">{item.due}</p>
              </div>

              <div className="border-border rounded-2xl border px-3 py-3 shadow-inner">
                <p className="text-text-muted text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Context
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.context}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
