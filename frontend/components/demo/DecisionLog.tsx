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
    <section className="bg-foreground h-full space-y-6 rounded-[30px] p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-text text-3xl font-semibold max-lg:text-center">
          Keep the reasoning attached to the account
        </h2>
        <p className="border-border/25 bg-secondary/25 text-text-muted w-fit rounded-full border px-3 py-1 font-medium">
          {accountName}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.time}`}
            className="border-border/50 bg-foreground h-full space-y-2 rounded-3xl border p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="border-border/25 bg-secondary/50 inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium tracking-widest uppercase">
                {item.author}
              </span>

              <p className="text-text-muted text-xs font-medium tracking-widest uppercase">
                {item.time}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <p className="text-text-muted text-sm leading-6 md:text-base">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
