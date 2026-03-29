type DemoKpiCardProps = {
  label: string;
  value: string;
  note: string;
  trend: string;
  accent?: boolean;
};

export default function DemoKpiCard({
  label,
  value,
  note,
  trend,
  accent = false,
}: DemoKpiCardProps) {
  return (
    <article
      className={`rounded-[30px] border p-5 ${
        accent ? "border-border bg-secondary/50" : "border-border bg-foreground"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase">
            {label}
          </p>
          <p className="text-text mt-4 text-4xl font-semibold tracking-tight">
            {value}
          </p>
        </div>
      </div>

      <p className="mt-2 leading-6">{note}</p>

      <div className="border-border bg-secondary mt-2 inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium tracking-[0.08em] uppercase">
        {trend}
      </div>
    </article>
  );
}
