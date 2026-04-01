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
    return "border-border bg-foreground text-text";
  }

  if (health === "Watch") {
    return "border-border bg-secondary text-text";
  }

  return "border-border bg-background text-text";
}

export default function AccountsTable({
  rows,
  selectedAccount,
  onSelectAccount,
}: AccountsTableProps) {
  return (
    <section className="border-border bg-foreground min-w-0 rounded-[30px] border p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-text text-3xl font-semibold max-lg:text-center">
          Track the accounts, owners, and next steps driving pipeline.
        </h2>
      </div>

      <div className="mt-6 min-w-0 overflow-x-auto overscroll-contain">
        <div className="min-w-245">
          <div className="bg-secondary text-text-muted grid grid-cols-[1.25fr_0.85fr_0.85fr_0.8fr_0.7fr_1.4fr_0.6fr] gap-3 rounded-[22px] px-4 py-3 text-xs font-semibold tracking-[0.22em] uppercase">
            <p>Account</p>
            <p>Owner</p>
            <p>Stage</p>
            <p>Health</p>
            <p>Value</p>
            <p>Next step</p>
            <p>Due</p>
          </div>

          <div className="mt-3 space-y-2">
            {rows.map((row) => {
              const isSelected = row.account === selectedAccount;

              return (
                <button
                  key={`${row.account}-${row.stage}`}
                  type="button"
                  onClick={() => onSelectAccount?.(row.account)}
                  aria-pressed={isSelected}
                  className={`grid w-full grid-cols-[1.25fr_0.85fr_0.85fr_0.8fr_0.7fr_1.4fr_0.6fr] items-center gap-3 rounded-3xl border p-5 text-left transition-all duration-200 active:scale-[0.99] ${
                    isSelected
                      ? "border-border bg-secondary"
                      : "border-border/50 bg-foreground hover:border-border hover:bg-secondary/25"
                  }`}
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
                      className={`inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium uppercase ${getHealthClasses(
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
      </div>
    </section>
  );
}
