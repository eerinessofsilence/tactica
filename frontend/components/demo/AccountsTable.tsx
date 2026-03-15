export type AccountRow = {
  account: string;
  owner: string;
  stage: string;
  health: "Healthy" | "Watch" | "At risk";
  value: string;
  nextStep: string;
  due: string;
};

type AccountsTableProps = {
  rows: AccountRow[];
  selectedAccount?: string;
  onSelectAccount?: (account: string) => void;
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

export default function AccountsTable({
  rows,
  selectedAccount,
  onSelectAccount,
}: AccountsTableProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
            Accounts In Motion
          </p>
          <h2 className="text-text mt-4 text-3xl font-semibold text-balance">
            Track the accounts, owners, and next steps driving pipeline.
          </h2>
          <p className="text-text-muted mt-3 max-w-3xl text-sm text-balance md:text-base">
            This is the CRM layer of the workspace: the team sees the live
            stage, account health, value, ownership, and what must happen next
            without rebuilding context in separate docs. Select any account to
            update the scenario, decision, and action panels.
          </p>
        </div>

        <div className="border-border bg-secondary/25 rounded-2xl border px-4 py-3 shadow-inner">
          <p className="text-text text-sm font-medium">
            Accounts reviewed today
          </p>
          <p className="text-text mt-1 text-2xl font-semibold">12</p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto overscroll-contain">
        <div className="min-w-225">
          <div className="text-text-muted/75 border-border grid grid-cols-[1.25fr_0.85fr_0.85fr_0.8fr_0.7fr_1.4fr_0.6fr] border-b px-4 py-3 text-xs font-semibold tracking-[0.22em] uppercase">
            <p>Account</p>
            <p>Owner</p>
            <p>Stage</p>
            <p>Health</p>
            <p>Value</p>
            <p>Next step</p>
            <p>Due</p>
          </div>

          {rows.map((row, index) => {
            const isSelected = row.account === selectedAccount;

            return (
              <button
                key={`${row.account}-${row.stage}`}
                type="button"
                onClick={() => onSelectAccount?.(row.account)}
                aria-pressed={isSelected}
                className={`grid w-full grid-cols-[1.25fr_0.85fr_0.85fr_0.8fr_0.7fr_1.4fr_0.6fr] items-center gap-3 px-4 py-4 text-left transition-colors ${
                  isSelected ? "bg-secondary/25" : "hover:bg-background/70"
                } ${index < rows.length - 1 ? "border-border border-b" : ""}`}
              >
                <div>
                  <p className="text-text text-sm font-semibold md:text-base">
                    {row.account}
                  </p>
                  <p className="text-text-muted mt-1 text-sm">
                    {isSelected ? "Focused account" : "Live account view"}
                  </p>
                </div>

                <p className="text-text-muted text-sm md:text-base">
                  {row.owner}
                </p>
                <p className="text-text text-sm md:text-base">{row.stage}</p>

                <div>
                  <span
                    className={`border-border inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner ${getHealthClasses(
                      row.health,
                    )}`}
                  >
                    {row.health}
                  </span>
                </div>

                <p className="text-text text-sm font-medium md:text-base">
                  {row.value}
                </p>
                <p className="text-text-muted text-sm md:text-base">
                  {row.nextStep}
                </p>
                <p className="text-text text-sm md:text-base">{row.due}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
