import { useState } from "react";
import AccountsTable, {
  type AccountRow,
} from "../../components/demo/AccountsTable";
import DemoShell from "../../components/demo/DemoShell";
import DecisionLog, {
  type DecisionLogItem,
} from "../../components/demo/DecisionLog";
import DemoKpiCard from "../../components/demo/DemoKpiCard";
import FocusedAccountCard from "../../components/demo/FocusedAccountCard";
import NextActionsPanel, {
  type NextActionItem,
} from "../../components/demo/NextActionsPanel";
import PipelineOverview from "../../components/demo/PipelineOverview";
import RiskPanel from "../../components/demo/RiskPanel";
import DemoSidebar, {
  type DemoSidebarItem,
} from "../../components/demo/DemoSidebar";
import ScenarioPanel, {
  type ScenarioItem,
} from "../../components/demo/ScenarioPanel";
import DemoTopbar from "../../components/demo/DemoTopbar";

const SIDEBAR_ITEMS: DemoSidebarItem[] = [
  {
    label: "Dashboard",
    targetId: "demo-dashboard",
  },
  {
    label: "Accounts",
    targetId: "demo-accounts",
  },
  {
    label: "Pipeline",
    targetId: "demo-pipeline",
  },
  {
    label: "Scenarios",
    targetId: "demo-scenarios",
  },
  {
    label: "Tasks",
    targetId: "demo-tasks",
  },
  {
    label: "Activity",
    targetId: "demo-activity",
  },
];

const SECTION_COPY: Record<
  DemoSidebarItem["targetId"],
  { eyebrow: string; title: string; description: string }
> = {
  "demo-dashboard": {
    eyebrow: "Workspace overview",
    title: "See the live revenue picture without opening five tools.",
    description:
      "Start from the top-level signals: pipeline coverage, account risk, and the active account the team is working right now.",
  },
  "demo-accounts": {
    eyebrow: "Accounts",
    title:
      "Use the account list as the control point for the rest of the workspace.",
    description:
      "Pick the account you want to focus, then move into scenarios, tasks, or activity without losing the context behind the deal.",
  },
  "demo-pipeline": {
    eyebrow: "Pipeline",
    title:
      "Inspect stage health, momentum, and the deals that need intervention.",
    description:
      "This view keeps the broad pipeline picture separate from account-level planning, so the dashboard stays readable while the team can still drill into risk.",
  },
  "demo-scenarios": {
    eyebrow: "Scenarios",
    title: "Compare next-step paths before the team commits.",
    description:
      "Scenario planning is the layer that turns a CRM record into an operating workspace: every option has tradeoffs, owners, and an explicit next action.",
  },
  "demo-tasks": {
    eyebrow: "Tasks",
    title: "Turn account context into assigned next actions.",
    description:
      "This is the execution layer for the currently focused account, so follow-ups, handoffs, and due dates stay tied to the plan behind them.",
  },
  "demo-activity": {
    eyebrow: "Activity",
    title: "Keep the decision trail visible as the account changes.",
    description:
      "Instead of losing context in chat or notes, the workspace stores the why behind stage changes, risk updates, and ownership shifts.",
  },
};

const KPI_ITEMS = [
  {
    label: "Open pipeline",
    value: "$2.4M",
    note: "Across 18 active opportunities",
    trend: "+12% vs last month",
  },
  {
    label: "Forecast coverage",
    value: "3.8x",
    note: "Weighted coverage against target",
    trend: "Healthy for this quarter",
  },
  {
    label: "At-risk accounts",
    value: "5",
    note: "Require executive or cross-team review",
    trend: "2 escalated this week",
  },
  {
    label: "Next actions due",
    value: "14",
    note: "Tasks and handoffs due in 7 days",
    trend: "4 overdue right now",
  },
];

const PIPELINE_STAGES = [
  {
    stage: "Qualified",
    amount: "$540K",
    deals: 5,
    coverage: 82,
    delta: "+6%",
  },
  {
    stage: "Proposal",
    amount: "$780K",
    deals: 4,
    coverage: 68,
    delta: "+14%",
  },
  {
    stage: "Security Review",
    amount: "$360K",
    deals: 3,
    coverage: 41,
    delta: "-3%",
  },
  {
    stage: "Negotiation",
    amount: "$520K",
    deals: 4,
    coverage: 73,
    delta: "+8%",
  },
  {
    stage: "Commit",
    amount: "$220K",
    deals: 2,
    coverage: 91,
    delta: "On track",
  },
];

const RISK_ITEMS = [
  {
    title: "Atlas Health renewal slipped",
    severity: "High",
    detail: "Executive sponsor changed and next-step ownership is unclear.",
    meta: "Renewal review due tomorrow",
  },
  {
    title: "Northstar legal review open",
    severity: "Medium",
    detail:
      "Security questionnaire is complete but legal is blocking proposal.",
    meta: "Proposal stage stalled for 6 days",
  },
  {
    title: "Apex Retail forecast moved",
    severity: "Medium",
    detail: "Probability dropped after budget timing shifted into next month.",
    meta: "Forecast delta: -$80K",
  },
];

type DemoAccountWorkspace = {
  row: AccountRow;
  summary: string;
  scenarios: ScenarioItem[];
  decisionLog: DecisionLogItem[];
  nextActions: NextActionItem[];
};

const ACCOUNT_WORKSPACES: DemoAccountWorkspace[] = [
  {
    row: {
      account: "Northstar Logistics",
      owner: "Ava Chen",
      stage: "Negotiation",
      health: "Healthy",
      value: "$180K",
      nextStep: "Finalize commercial terms",
      due: "Mar 18",
    },
    summary:
      "Northstar is in a strong commercial position, but procurement alignment will decide whether the team lands an expansion or slips into another review loop.",
    scenarios: [
      {
        title: "Push expansion",
        account: "Northstar Logistics",
        impact: "+$120K upside",
        risk: "Medium",
        owner: "Ava Chen",
        nextAction: "Align procurement and send commercial revision",
        summary:
          "Use the current momentum to widen scope before legal review begins.",
      },
      {
        title: "Land core deal now",
        account: "Northstar Logistics",
        impact: "Protect $180K close",
        risk: "Low",
        owner: "Ava Chen",
        nextAction: "Reduce optional modules and lock signature path",
        summary:
          "Shorten the cycle by prioritizing the committed package over expansion.",
      },
    ],
    decisionLog: [
      {
        title: "Northstar pricing path updated",
        detail:
          "Commercial terms were revised after procurement signaled scope flexibility.",
        author: "Ava Chen",
        time: "4h ago",
      },
      {
        title: "Legal review risk removed",
        detail:
          "Security and legal dependencies were cleared before pricing revision was sent.",
        author: "Leo Brooks",
        time: "Yesterday",
      },
    ],
    nextActions: [
      {
        title: "Send Northstar revised commercial terms",
        owner: "Ava Chen",
        due: "Mar 18",
        priority: "High",
        context: "Push expansion",
      },
      {
        title: "Confirm procurement decision owner",
        owner: "Leo Brooks",
        due: "Mar 18",
        priority: "Medium",
        context: "Negotiation path",
      },
    ],
  },
  {
    row: {
      account: "Atlas Health",
      owner: "Noah Patel",
      stage: "Renewal Review",
      health: "At risk",
      value: "$240K",
      nextStep: "Executive alignment call",
      due: "Mar 16",
    },
    summary:
      "Atlas is the highest-priority risk in the workspace. The team needs an immediate save motion with explicit executive ownership before renewal momentum collapses.",
    scenarios: [
      {
        title: "Renewal defense",
        account: "Atlas Health",
        impact: "Protect $240K ARR",
        risk: "High",
        owner: "Noah Patel",
        nextAction: "Run executive save plan and confirm stakeholder map",
        summary:
          "Stabilize the renewal by assigning ownership and reframing the value case.",
      },
      {
        title: "Recovery with phased terms",
        account: "Atlas Health",
        impact: "Retain base contract",
        risk: "Medium",
        owner: "Noah Patel",
        nextAction: "Present phased rollout and value bridge proposal",
        summary:
          "Lower contract friction by narrowing the initial scope and preserving the relationship.",
      },
    ],
    decisionLog: [
      {
        title: "Renewal path changed for Atlas Health",
        detail:
          "Moved from standard renewal motion to executive save plan after sponsor turnover.",
        author: "Noah Patel",
        time: "2h ago",
      },
      {
        title: "Stakeholder map reopened",
        detail:
          "Primary economic buyer changed after operations leadership transition.",
        author: "Mila Carter",
        time: "Today",
      },
    ],
    nextActions: [
      {
        title: "Run Atlas executive alignment call",
        owner: "Noah Patel",
        due: "Today",
        priority: "High",
        context: "Renewal defense",
      },
      {
        title: "Rebuild Atlas stakeholder map",
        owner: "Mila Carter",
        due: "Mar 16",
        priority: "High",
        context: "Recovery path",
      },
    ],
  },
  {
    row: {
      account: "Apex Retail",
      owner: "Mila Carter",
      stage: "Proposal",
      health: "Watch",
      value: "$95K",
      nextStep: "Update pricing options",
      due: "Mar 19",
    },
    summary:
      "Apex is still recoverable, but the deal needs a new buying path and tighter pricing narrative before confidence returns.",
    scenarios: [
      {
        title: "Multi-thread recovery",
        account: "Apex Retail",
        impact: "+18% close probability",
        risk: "Medium",
        owner: "Mila Carter",
        nextAction: "Add finance stakeholder and rebuild pricing path",
        summary:
          "Recover deal confidence by widening access and changing the decision route.",
      },
      {
        title: "Budget-safe close",
        account: "Apex Retail",
        impact: "Protect initial footprint",
        risk: "Low",
        owner: "Mila Carter",
        nextAction:
          "Offer lower-scope package with quarterly expansion checkpoint",
        summary:
          "Reduce friction by matching the current budget window and preserving future upside.",
      },
    ],
    decisionLog: [
      {
        title: "Apex Retail scenario switched",
        detail:
          "Recovery plan replaced the original expansion path after budget timing shifted.",
        author: "Mila Carter",
        time: "Yesterday",
      },
      {
        title: "Procurement path delayed",
        detail:
          "Finance review moved into next week and changed the original close plan.",
        author: "Ava Chen",
        time: "Yesterday",
      },
    ],
    nextActions: [
      {
        title: "Add finance stakeholder for Apex Retail",
        owner: "Mila Carter",
        due: "Mar 19",
        priority: "Medium",
        context: "Multi-thread recovery",
      },
      {
        title: "Update Apex pricing options",
        owner: "Ava Chen",
        due: "Mar 19",
        priority: "Medium",
        context: "Budget-safe close",
      },
    ],
  },
  {
    row: {
      account: "Cinder Systems",
      owner: "Leo Brooks",
      stage: "Security Review",
      health: "Watch",
      value: "$130K",
      nextStep: "Confirm questionnaire owner",
      due: "Mar 20",
    },
    summary:
      "Cinder is blocked by review ownership, not by deal quality. The team needs to clear the security lane before commercial momentum drops.",
    scenarios: [
      {
        title: "Fast-track security unblock",
        account: "Cinder Systems",
        impact: "Recover stage velocity",
        risk: "Medium",
        owner: "Leo Brooks",
        nextAction: "Assign questionnaire owner and schedule review checkpoint",
        summary:
          "Remove the operational blocker before the deal starts to decay.",
      },
      {
        title: "Commercial parallel path",
        account: "Cinder Systems",
        impact: "Keep buyer engaged",
        risk: "Low",
        owner: "Leo Brooks",
        nextAction: "Advance pricing discussion while security closes",
        summary:
          "Preserve deal energy by continuing buyer work in parallel with review.",
      },
    ],
    decisionLog: [
      {
        title: "Security review owner still unassigned",
        detail:
          "The team flagged ownership risk after questionnaire prep finished without an internal reviewer.",
        author: "Leo Brooks",
        time: "3h ago",
      },
      {
        title: "Buyer requested earlier pricing preview",
        detail:
          "Commercial team kept engagement warm while security remained open.",
        author: "Ava Chen",
        time: "Today",
      },
    ],
    nextActions: [
      {
        title: "Confirm Cinder security questionnaire owner",
        owner: "Leo Brooks",
        due: "Mar 20",
        priority: "Medium",
        context: "Fast-track security unblock",
      },
      {
        title: "Send interim pricing preview",
        owner: "Ava Chen",
        due: "Mar 20",
        priority: "Low",
        context: "Commercial parallel path",
      },
    ],
  },
  {
    row: {
      account: "Horizon Energy",
      owner: "Ava Chen",
      stage: "Qualified",
      health: "Healthy",
      value: "$75K",
      nextStep: "Book technical discovery",
      due: "Mar 21",
    },
    summary:
      "Horizon is an early-stage opportunity with clean momentum. The priority is to qualify deeply before the team spends cross-functional effort.",
    scenarios: [
      {
        title: "Deep qualification",
        account: "Horizon Energy",
        impact: "Improve deal quality",
        risk: "Low",
        owner: "Ava Chen",
        nextAction: "Run technical discovery and confirm timing signal",
        summary:
          "Use the next call to validate need, timing, and realistic expansion potential.",
      },
      {
        title: "Fast commercial test",
        account: "Horizon Energy",
        impact: "Accelerate early signal",
        risk: "Medium",
        owner: "Ava Chen",
        nextAction: "Share lightweight pricing frame before full discovery",
        summary:
          "Test urgency earlier, but accept the risk of a shallower qualification path.",
      },
    ],
    decisionLog: [
      {
        title: "Discovery path confirmed for Horizon",
        detail:
          "Team agreed to validate technical fit before introducing cross-functional support.",
        author: "Ava Chen",
        time: "Today",
      },
      {
        title: "Expansion potential flagged",
        detail:
          "Initial buyer notes show likely follow-on scope if technical needs line up.",
        author: "Noah Patel",
        time: "Today",
      },
    ],
    nextActions: [
      {
        title: "Book Horizon technical discovery",
        owner: "Ava Chen",
        due: "Mar 21",
        priority: "Medium",
        context: "Deep qualification",
      },
      {
        title: "Document Horizon expansion notes",
        owner: "Noah Patel",
        due: "Mar 22",
        priority: "Low",
        context: "Qualification review",
      },
    ],
  },
  {
    row: {
      account: "Meridian Cloud",
      owner: "Noah Patel",
      stage: "Commit",
      health: "Healthy",
      value: "$210K",
      nextStep: "Prepare implementation handoff",
      due: "Mar 17",
    },
    summary:
      "Meridian is close to the line. The main risk now is handoff quality, not closing confidence, so the workspace should shift toward execution readiness.",
    scenarios: [
      {
        title: "Clean commit handoff",
        account: "Meridian Cloud",
        impact: "Protect close quality",
        risk: "Low",
        owner: "Noah Patel",
        nextAction: "Prepare implementation handoff before signature lands",
        summary:
          "Reduce post-close friction by aligning delivery ownership now instead of after commit.",
      },
      {
        title: "Upsell before signature",
        account: "Meridian Cloud",
        impact: "+$35K upside",
        risk: "Medium",
        owner: "Noah Patel",
        nextAction: "Test add-on package with procurement before final commit",
        summary:
          "Pursue upside only if it does not threaten the base close path.",
      },
    ],
    decisionLog: [
      {
        title: "Meridian handoff confirmed",
        detail:
          "Implementation owner was assigned before commit to reduce post-close delay.",
        author: "Noah Patel",
        time: "Yesterday",
      },
      {
        title: "Commit path locked",
        detail:
          "Team agreed not to widen scope unless it can be done without delaying signature.",
        author: "Leo Brooks",
        time: "Yesterday",
      },
    ],
    nextActions: [
      {
        title: "Prepare Meridian implementation handoff",
        owner: "Noah Patel",
        due: "Mar 17",
        priority: "High",
        context: "Clean commit handoff",
      },
      {
        title: "Validate Meridian onboarding dependencies",
        owner: "Leo Brooks",
        due: "Mar 17",
        priority: "Medium",
        context: "Execution readiness",
      },
    ],
  },
];

type DemoSectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function DemoSectionIntro({
  eyebrow,
  title,
  description,
}: DemoSectionIntroProps) {
  return (
    <section className="border-border bg-foreground shadow-text/20 rounded-[28px] border p-5 shadow-inner">
      <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
        {eyebrow}
      </p>
      <h1 className="text-text mt-4 max-w-2xl text-3xl font-semibold text-balance md:text-4xl">
        {title}
      </h1>
      <p className="text-text-muted mt-3 max-w-3xl text-sm text-pretty md:text-base">
        {description}
      </p>
    </section>
  );
}

type FocusContextBannerProps = {
  row: AccountRow;
  summary: string;
  onChangeAccount: () => void;
};

function FocusContextBanner({
  row,
  summary,
  onChangeAccount,
}: FocusContextBannerProps) {
  return (
    <section className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
            Focused account
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="text-text text-3xl font-semibold text-balance">
              {row.account}
            </h2>
            <span className="border-border text-text-muted inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner">
              {row.stage}
            </span>
            <span className="border-border text-text-muted inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase shadow-inner">
              {row.health}
            </span>
          </div>
          <p className="text-text-muted mt-3 max-w-3xl text-sm text-balance md:text-base">
            {summary}
          </p>
        </div>

        <button
          type="button"
          onClick={onChangeAccount}
          className="border-border bg-secondary text-text rounded-full border px-5 py-3 text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.975]"
        >
          Change account
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Owner
          </p>
          <p className="text-text mt-2 text-sm font-medium">{row.owner}</p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Value
          </p>
          <p className="text-text mt-2 text-sm font-medium">{row.value}</p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Next step
          </p>
          <p className="text-text mt-2 text-sm font-medium text-balance">
            {row.nextStep}
          </p>
        </div>
        <div className="border-border rounded-[22px] border px-4 py-3 shadow-inner">
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">
            Due
          </p>
          <p className="text-text mt-2 text-sm font-medium">{row.due}</p>
        </div>
      </div>
    </section>
  );
}

export default function Demo() {
  const [selectedAccountName, setSelectedAccountName] = useState(
    ACCOUNT_WORKSPACES[0]?.row.account ?? "",
  );
  const [activeSectionId, setActiveSectionId] = useState(
    SIDEBAR_ITEMS[0]?.targetId ?? "demo-dashboard",
  );

  const selectedWorkspace =
    ACCOUNT_WORKSPACES.find(({ row }) => row.account === selectedAccountName) ??
    ACCOUNT_WORKSPACES[0];
  const activeSection =
    SECTION_COPY[activeSectionId] ?? SECTION_COPY["demo-dashboard"];

  const handleSidebarSelect = (targetId: string) => {
    setActiveSectionId(targetId);
  };

  const renderActiveSection = () => {
    if (activeSectionId === "demo-dashboard") {
      return (
        <div className="space-y-5 lg:space-y-6">
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {KPI_ITEMS.map((item) => (
              <DemoKpiCard
                key={item.label}
                label={item.label}
                value={item.value}
                note={item.note}
                trend={item.trend}
              />
            ))}
          </div>

          <FocusedAccountCard
            row={selectedWorkspace.row}
            summary={selectedWorkspace.summary}
            scenarioCount={selectedWorkspace.scenarios.length}
            actionCount={selectedWorkspace.nextActions.length}
            updateTime={selectedWorkspace.decisionLog[0]?.time ?? "Now"}
          />
        </div>
      );
    }

    if (activeSectionId === "demo-accounts") {
      return (
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <AccountsTable
            rows={ACCOUNT_WORKSPACES.map(({ row }) => row)}
            selectedAccount={selectedWorkspace.row.account}
            onSelectAccount={setSelectedAccountName}
          />
          <div className="border-border bg-foreground rounded-[28px] border p-5 shadow-inner">
            <p className="text-text-muted text-xs font-semibold tracking-[0.28em] uppercase">
              Account focus
            </p>
            <h2 className="text-text mt-4 text-3xl font-semibold text-balance">
              Choose the account, then open the working view you need.
            </h2>
            <p className="text-text-muted mt-3 text-sm text-balance md:text-base">
              The selected row becomes the context for scenarios, tasks, and
              activity. That keeps the demo compact while still behaving like a
              real workspace.
            </p>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => handleSidebarSelect("demo-scenarios")}
                className="border-border bg-secondary text-text rounded-2xl border px-4 py-3 text-left text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.98]"
              >
                Open scenarios for {selectedWorkspace.row.account}
              </button>
              <button
                type="button"
                onClick={() => handleSidebarSelect("demo-tasks")}
                className="border-border bg-foreground text-text rounded-2xl border px-4 py-3 text-left text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.98]"
              >
                Open tasks for {selectedWorkspace.row.account}
              </button>
              <button
                type="button"
                onClick={() => handleSidebarSelect("demo-activity")}
                className="border-border bg-foreground text-text rounded-2xl border px-4 py-3 text-left text-sm font-medium shadow-inner transition-all duration-200 active:scale-[0.98]"
              >
                Open activity for {selectedWorkspace.row.account}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (activeSectionId === "demo-pipeline") {
      return (
        <div className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
          <PipelineOverview stages={PIPELINE_STAGES} />
          <RiskPanel items={RISK_ITEMS} />
        </div>
      );
    }

    if (activeSectionId === "demo-scenarios") {
      return (
        <div className="space-y-4">
          <FocusContextBanner
            row={selectedWorkspace.row}
            summary={selectedWorkspace.summary}
            onChangeAccount={() => handleSidebarSelect("demo-accounts")}
          />
          <ScenarioPanel
            accountName={selectedWorkspace.row.account}
            items={selectedWorkspace.scenarios}
          />
        </div>
      );
    }

    if (activeSectionId === "demo-tasks") {
      return (
        <div className="space-y-4">
          <FocusContextBanner
            row={selectedWorkspace.row}
            summary={selectedWorkspace.summary}
            onChangeAccount={() => handleSidebarSelect("demo-accounts")}
          />
          <NextActionsPanel
            accountName={selectedWorkspace.row.account}
            items={selectedWorkspace.nextActions}
          />
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <FocusContextBanner
          row={selectedWorkspace.row}
          summary={selectedWorkspace.summary}
          onChangeAccount={() => handleSidebarSelect("demo-accounts")}
        />
        <DecisionLog
          accountName={selectedWorkspace.row.account}
          items={selectedWorkspace.decisionLog}
        />
      </div>
    );
  };

  return (
    <DemoShell
      sidebar={
        <DemoSidebar
          items={SIDEBAR_ITEMS}
          activeTargetId={activeSectionId}
          onSelectItem={handleSidebarSelect}
        />
      }
      topbar={
        <DemoTopbar
          title="Demo Workspace"
          subtitle="Preview the shell for pipeline visibility, account context, and next-step planning."
        />
      }
    >
      <div className="space-y-5 lg:space-y-6">
        <DemoSectionIntro
          eyebrow={activeSection.eyebrow}
          title={activeSection.title}
          description={activeSection.description}
        />
        {renderActiveSection()}
      </div>
    </DemoShell>
  );
}
