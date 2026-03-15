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

export default function DecisionLog({
  accountName,
  items,
}: DecisionLogProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
        Decision Log
      </p>
      <h2 className="text-text mt-4 text-3xl font-semibold text-balance">
        Keep the reasoning attached to the account, not buried in chat.
      </h2>
      <p className="text-text-muted mt-3 max-w-3xl text-sm text-balance md:text-base">
        The log keeps strategy changes, ownership updates, and review outcomes
        connected to the same workspace so context survives handoffs.
      </p>
      <div className="border-border mt-4 inline-flex rounded-full border px-3 py-2 shadow-inner">
        <p className="text-text text-xs font-medium uppercase tracking-[0.12em]">
          Decision trail for {accountName}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.time}`}
            className="border-border bg-foreground rounded-[22px] border p-4 shadow-inner"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <span className="text-text-muted text-xs font-medium uppercase tracking-[0.16em]">
                {item.time}
              </span>
            </div>

            <p className="text-text-muted mt-3 text-sm text-balance md:text-base">
              {item.detail}
            </p>

            <div className="border-border mt-4 inline-flex rounded-full border px-3 py-2 shadow-inner">
              <p className="text-text text-xs font-medium uppercase tracking-[0.12em]">
                {item.author}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
