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
    return "border-border bg-foreground text-text";
  }

  if (priority === "Medium") {
    return "border-border bg-secondary text-text";
  }

  return "border-border bg-background text-text";
}

export default function NextActionsPanel({
  accountName,
  items,
}: NextActionsPanelProps) {
  return (
    <section className="border-border bg-foreground h-full rounded-[30px] border p-5">
      <h2 className="text-text text-3xl font-semibold max-lg:text-center">
        Turn pipeline visibility into clear ownership.
      </h2>
      <p className="mt-3 leading-6 max-lg:text-center">
        The action panel translates account context and scenario choices into
        explicit follow-through so the team knows what happens next.
      </p>
      <div className="flex max-lg:justify-center">
        <div className="border-border bg-secondary mt-4 inline-flex rounded-full border px-1.5 py-0.5">
          <p className="text-text text-xs font-medium tracking-widest uppercase">
            Active actions for {accountName}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.owner}`}
            className="border-border/50 bg-foreground rounded-3xl border p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <span
                className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase ${getPriorityClasses(
                  item.priority,
                )}`}
              >
                {item.priority}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="border-border/50 bg-secondary/25 rounded-[20px] border px-3 py-3">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Owner
                </p>
                <p className="text-text mt-2 text-sm font-medium">
                  {item.owner}
                </p>
              </div>

              <div className="border-border/50 bg-secondary/25 rounded-[20px] border px-3 py-3">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Due
                </p>
                <p className="text-text mt-2 text-sm font-medium">{item.due}</p>
              </div>

              <div className="border-border/50 bg-secondary/25 rounded-[20px] border px-3 py-3">
                <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
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
