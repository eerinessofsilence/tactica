import type { ReactNode } from "react";

type DemoShellProps = {
  sidebar: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
};

export default function DemoShell({
  sidebar,
  topbar,
  children,
}: DemoShellProps) {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,157,79,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.04))]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-420 gap-4 px-4 py-4 md:gap-5 md:px-5 md:py-5 xl:gap-6">
          <aside className="border-border bg-foreground shadow-text/20 hidden h-fit w-60 shrink-0 overflow-hidden rounded-4xl border shadow-inner xl:sticky xl:top-4 xl:flex xl:flex-col">
            {sidebar}
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {topbar ? (
              <div className="border-border bg-foreground shadow-text/20 overflow-hidden rounded-[28px] border shadow-inner">
                {topbar}
              </div>
            ) : null}

            <div className="border-border bg-foreground shadow-text/20 flex min-h-[calc(100vh-2rem)] min-w-0 flex-1 flex-col overflow-hidden rounded-4xl border shadow-inner xl:min-h-0">
              <div className="border-border border-b xl:hidden">{sidebar}</div>
              <main className="min-w-0 flex-1 p-5">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
