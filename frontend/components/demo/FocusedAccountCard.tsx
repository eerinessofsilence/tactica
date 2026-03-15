import type { AccountRow } from "./AccountsTable";

type FocusedAccountCardProps = {
  row: AccountRow;
  summary: string;
  scenarioCount: number;
  actionCount: number;
  updateTime: string;
};

function getHealthClasses(health: AccountRow["health"]) {
  if (health === "Healthy") {
    return "bg-secondary/25 text-text";
  }

  if (health === "Watch") {
    return "bg-[rgba(255,157,79,0.18)] text-text";
  }

  return "bg-[rgba(255,90,90,0.18)] text-text";
}

export default function FocusedAccountCard({
  row,
  summary,
  scenarioCount,
  actionCount,
  updateTime,
}: FocusedAccountCardProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
            Focused Account
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="text-text text-3xl font-semibold text-balance">
              {row.account}
            </h2>
            <span
              className={`border-border inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner ${getHealthClasses(
                row.health,
              )}`}
            >
              {row.health}
            </span>
          </div>
          <p className="text-text-muted mt-3 max-w-3xl text-sm text-balance md:text-base">
            {summary}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:w-105">
          <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
            <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
              Owner
            </p>
            <p className="text-text mt-2 text-sm font-medium">{row.owner}</p>
          </div>
          <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
            <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
              Stage
            </p>
            <p className="text-text mt-2 text-sm font-medium">{row.stage}</p>
          </div>
          <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
            <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
              Value
            </p>
            <p className="text-text mt-2 text-sm font-medium">{row.value}</p>
          </div>
          <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
            <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
              Due
            </p>
            <p className="text-text mt-2 text-sm font-medium">{row.due}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Current next step
          </p>
          <p className="text-text mt-2 text-sm font-medium text-balance">
            {row.nextStep}
          </p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Scenarios
          </p>
          <p className="text-text mt-2 text-sm font-medium">
            {scenarioCount} active paths
          </p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Actions
          </p>
          <p className="text-text mt-2 text-sm font-medium">
            {actionCount} assigned items
          </p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Last update
          </p>
          <p className="text-text mt-2 text-sm font-medium">{updateTime}</p>
        </div>
      </div>
    </section>
  );
}
