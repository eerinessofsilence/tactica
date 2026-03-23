type PipelineStage = {
  stage: string;
  amount: string;
  deals: number;
  coverage: number;
  delta: string;
};

type PipelineOverviewProps = {
  stages: PipelineStage[];
};

export default function PipelineOverview({ stages }: PipelineOverviewProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
            Pipeline Health
          </p>
          <h1 className="text-text mt-4 text-3xl font-semibold text-balance">
            See pipeline stage health and where momentum is slipping.
          </h1>
          <p className="text-text-muted mt-3 max-w-2xl text-sm text-balance md:text-base">
            This view helps the team inspect stage-by-stage coverage, spot
            stalled deals, and see where the next review needs to happen.
          </p>
        </div>

        <div className="border-border bg-secondary/25 rounded-2xl border px-4 py-3">
          <p className="text-text text-sm font-medium">
            Quarter target coverage
          </p>
          <p className="text-text mt-1 text-2xl font-semibold">3.8x</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {stages.map((stage) => (
          <article
            key={stage.stage}
            className="border-border bg-foreground rounded-[22px] border p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                <p className="text-text text-lg font-semibold">{stage.stage}</p>
                <p className="text-text-muted text-sm">
                  {stage.deals} active deals
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <p className="text-text text-lg font-semibold">
                  {stage.amount}
                </p>
                <span className="border-border rounded-full border px-3 py-1 text-xs font-medium uppercase">
                  {stage.delta}
                </span>
              </div>
            </div>

            <div className="bg-background/70 mt-4 h-3 overflow-hidden rounded-full">
              <div
                className="bg-secondary h-full rounded-full"
                style={{ width: `${stage.coverage}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-text-muted text-sm">Stage confidence</p>
              <p className="text-text text-sm font-medium">{stage.coverage}%</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
