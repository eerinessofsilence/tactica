import type { ReactNode } from "react";

type DemoShellProps = {
  sidebar?: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
};

export default function DemoShell({
  sidebar,
  topbar,
  children,
}: DemoShellProps) {
  const hasSidebar = sidebar != null;

  return (
    <div className="dashboard bg-secondary/50 p-5">
      <div
        className={`border-border/30 bg-background mx-auto flex w-full flex-col gap-4 rounded-[40px] border p-5 xl:flex-row ${
          hasSidebar ? "max-w-400" : "max-w-7xl"
        }`}
      >
        {hasSidebar ? (
          <aside className="border-border bg-foreground h-fit w-full shrink-0 rounded-4xl border p-5 xl:sticky xl:top-5 xl:w-75">
            {sidebar}
          </aside>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {topbar ? (
            <div className="border-border bg-foreground rounded-[30px] border p-5">
              {topbar}
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </div>
  );
}
