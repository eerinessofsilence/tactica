type DemoTopbarProps = {
  title: string;
  subtitle: string;
};

export default function DemoTopbar({ title, subtitle }: DemoTopbarProps) {
  return (
    <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-text text-xl font-semibold md:text-2xl">{title}</p>
        <p className="text-text-muted mt-1 text-sm md:text-base">{subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="/signup"
          className="border-border bg-secondary text-text shadow-text/30 rounded-full border px-5 py-3 text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.975]"
        >
          Start free
        </a>
        <a
          href="/login"
          className="border-border shadow-text/20 bg-foreground text-text-muted rounded-full border px-5 py-3 text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.975]"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
