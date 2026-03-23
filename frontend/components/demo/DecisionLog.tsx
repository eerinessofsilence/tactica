export type DecisionLogItem = {
  title: string;
  detail: string;
  author: string;
  time: string;
};

type DecisionLogProps = {
  accountName: string;
  items: DecisionLogItem[];
};

export default function DecisionLog({ accountName, items }: DecisionLogProps) {
  return (
    <section className="border-border bg-foreground h-full rounded-[30px] border p-5">
      <h2 className="text-text text-3xl font-semibold max-lg:text-center">
        Keep the reasoning attached to the account.
      </h2>
      <p className="mt-3 text-sm leading-6 max-lg:text-center md:text-base">
        The log keeps strategy changes, ownership updates, and review outcomes
        connected to the same workspace so context survives handoffs.
      </p>
      <div className="flex max-lg:justify-center">
        <div className="border-border bg-foreground mt-4 inline-flex rounded-full border px-1.5 py-0.5">
          <p className="text-text text-xs font-medium tracking-widest uppercase">
            Decision trail for {accountName}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.time}`}
            className="border-border/50 bg-foreground rounded-3xl border p-5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <span className="text-text-muted text-xs font-medium tracking-[0.16em] uppercase">
                {item.time}
              </span>
            </div>

            <p className="text-text-muted mt-3 text-sm leading-6 md:text-base">
              {item.detail}
            </p>

            <div className="border-border bg-secondary mt-4 inline-flex rounded-full border px-1.5 py-0.5">
              <p className="text-text text-xs font-medium tracking-widest uppercase">
                {item.author}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
