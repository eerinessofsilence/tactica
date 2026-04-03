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
}: DemoKpiCardProps) {
  return (
    <article className="border-border/50 bg-foreground space-y-3 rounded-[30px] border p-5">
      <p className="text-xs font-medium tracking-widest uppercase">{label}</p>
      <p className="text-text text-4xl font-semibold tracking-tight">{value}</p>

      <p className="leading-6">{note}</p>

      <span className="border-border/25 bg-secondary/50 inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium tracking-widest uppercase">
        {trend}
      </span>
    </article>
  );
}
