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
    return "border-border/50 bg-[oklch(75%_0.15_120)]/25";
  }

  if (priority === "Medium") {
    return "border-border/50 bg-[oklch(75%_0.15_40)]/50";
  }

  return "border-border/50 bg-[oklch(75%_0.15_20)]/75";
}

export default function NextActionsPanel({
  accountName,
  items,
}: NextActionsPanelProps) {
  return (
    <section className="bg-foreground h-full space-y-6 rounded-[30px] p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-text text-3xl font-semibold max-lg:text-center">
          Turn pipeline visibility into clear ownership
        </h2>
        <p className="border-border/25 bg-secondary/25 text-text-muted w-fit rounded-full border px-3 py-1 font-medium">
          {accountName}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.owner}`}
            className="border-border/50 bg-foreground space-y-8 rounded-3xl border p-5"
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

            <div className="flex justify-center">
              <div className="flex items-center gap-8">
                <div className="space-y-2 text-center">
                  <p className="text-text-muted/75 text-sm font-medium tracking-wide uppercase">
                    Owner
                  </p>
                  <p className="text-text font-semibold">{item.owner}</p>
                </div>

                <span className="bg-text-muted/25 h-6 w-px"></span>

                <div className="space-y-2 text-center">
                  <p className="text-text-muted/75 text-sm font-medium tracking-wide uppercase">
                    Due
                  </p>
                  <p className="text-text font-semibold">{item.due}</p>
                </div>

                <span className="bg-text-muted/25 h-6 w-px"></span>

                <div className="space-y-2 text-center">
                  <p className="text-text-muted/75 text-sm font-medium tracking-wide uppercase">
                    Context
                  </p>
                  <p className="text-text font-semibold">{item.context}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
