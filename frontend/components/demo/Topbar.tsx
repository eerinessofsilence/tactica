import { Bell, Search } from "lucide-react";

export default function DemoTopbar() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex gap-3">
        <div className="relative w-100">
          <Search className="text-text-muted pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
          <input
            placeholder="Search account"
            className="border-border/50 bg-secondary/25 text-text-muted placeholder:text-text-muted/75 focus:border-border focus:ring-text-muted/10 w-full rounded-3xl border py-3 pr-4 pl-11 text-sm font-medium transition-all duration-200 outline-none focus:ring-4"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="border-border/50 bg-secondary/25 text-text-muted hover:bg-secondary hover:text-text inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 active:scale-[0.97]"
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="border-border/50 bg-secondary/25 flex min-w-0 items-center gap-3 rounded-2xl border px-3 py-2">
          <div className="bg-foreground text-text flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
            RV
          </div>
          <div className="min-w-0">
            <p className="text-text truncate text-sm font-semibold">
              Revenue Ops
            </p>
            <p className="text-text-muted truncate text-xs">
              workspace@tactica.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
