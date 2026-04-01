import { Bell, Search } from "lucide-react";

const iconButtonClass =
  "border-border/50 bg-secondary/25 text-text-muted hover:bg-secondary hover:text-text inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 active:scale-[0.97]";

export default function DemoTopbar() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="border-border/50 bg-secondary/25 flex min-w-0 flex-1 items-center gap-3 rounded-3xl border px-4 py-3">
        <Search className="text-text-muted h-5 w-5 shrink-0" />
        <div className="min-w-0">
          <p className="text-text-muted truncate text-sm font-medium">
            Search account, owner, or next action
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className={iconButtonClass}
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>

        <div className="border-border/50 bg-secondary/25 flex min-w-0 items-center gap-3 rounded-3xl border px-3 py-2">
          <div className="bg-background text-text flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
            RV
          </div>
          <div className="min-w-0">
            <p className="text-text truncate text-sm font-semibold">
              Revenue Ops
            </p>
            <p className="text-text-muted truncate text-xs">
              workspace@tactica.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
