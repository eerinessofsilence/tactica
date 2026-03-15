type DemoKpiCardProps = {
  label: string;
  value: string;
  note: string;
  trend: string;
};

export default function DemoKpiCard({
  label,
  value,
  note,
  trend,
}: DemoKpiCardProps) {
  return (
    <article className="border-border bg-foreground shadow-text/20 rounded-3xl border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.24em] uppercase">
        {label}
      </p>
      <p className="text-text mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {value}
      </p>
      <p className="text-text-muted mt-2 text-sm text-balance">{note}</p>
      <div className="border-border shadow-text/20 mt-4 rounded-full border px-3 py-2 shadow-inner">
        <p className="text-text text-xs font-medium tracking-[0.08em] uppercase">
          {trend}
        </p>
      </div>
    </article>
  );
}
