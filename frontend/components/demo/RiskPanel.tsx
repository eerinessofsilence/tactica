type RiskItem = {
  title: string;
  severity: string;
  detail: string;
  meta: string;
};

type RiskPanelProps = {
  items: RiskItem[];
};

export default function RiskPanel({ items }: RiskPanelProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
        Attention Required
      </p>
      <h2 className="text-text mt-4 text-2xl font-semibold text-balance">
        Review the accounts that need a decision now.
      </h2>
      <p className="text-text-muted mt-3 text-sm text-balance md:text-base">
        This panel highlights the deals and renewals that should surface in the
        next pipeline inspection or executive review.
      </p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="border-border bg-foreground rounded-[22px] border p-4 shadow-inner"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-text text-sm font-semibold md:text-base">
                {item.title}
              </p>
              <span className="border-border bg-secondary/25 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase shadow-inner">
                {item.severity}
              </span>
            </div>

            <p className="text-text-muted mt-3 text-sm text-balance">
              {item.detail}
            </p>
            <p className="text-text mt-3 text-xs font-medium tracking-[0.08em] uppercase">
              {item.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
