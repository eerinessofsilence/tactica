export type DemoSidebarItem = {
  label: string;
  targetId: string;
};

type DemoSidebarProps = {
  items: DemoSidebarItem[];
  activeTargetId?: string;
  onSelectItem?: (targetId: string) => void;
};

export default function DemoSidebar({
  items,
  activeTargetId,
  onSelectItem,
}: DemoSidebarProps) {
  return (
    <div className="flex flex-col space-y-6 p-5">
      <p className="text-text text-2xl font-semibold">Revenue Workspace</p>

      <nav className="grid gap-2">
        {items.map((item) => {
          const isActive = item.targetId === activeTargetId;

          return (
            <button
              key={item.targetId}
              type="button"
              onClick={() => onSelectItem?.(item.targetId)}
              aria-pressed={isActive}
              className={`border-border rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                isActive
                  ? "bg-secondary text-text"
                  : "bg-foreground text-text-muted hover:bg-background/70"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
