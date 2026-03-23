import { useState } from "react";
import {
  ArrowLeft,
  Download,
  FolderOpen,
  History,
  LayoutDashboard,
  Plus,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import AccountsTable, {
  type AccountRow,
} from "../../components/demo/AccountsTable";
import DemoShell from "../../components/demo/Shell";
import DecisionLog, {
  type DecisionLogItem,
} from "../../components/demo/DecisionLog";
import DemoKpiCard from "../../components/demo/KpiCard";
import NextActionsPanel, {
  type NextActionItem,
} from "../../components/demo/NextActionsPanel";
import ScenarioPanel, {
  type ScenarioItem,
} from "../../components/demo/ScenarioPanel";
import DemoTopbar from "../../components/demo/Topbar";

type DemoView = "overview" | "plan" | "history";

type SidebarNavItem = {
  id: DemoView;
  label: string;
  description: string;
  icon: LucideIcon;
};

const KPI_ITEMS = [
  {
    label: "Open pipeline",
    value: "$725K",
    note: "Across 4 active accounts in the workspace",
    trend: "1 renewal save motion in play",
  },
  {
    label: "Scenario paths",
    value: "8",
    note: "Recovery, expansion, and close paths under review",
    trend: "2 options attached to every account",
  },
  {
    label: "Accounts at risk",
    value: "2",
    note: "Atlas and Apex need intervention this week",
    trend: "1 executive escalation active",
  },
  {
    label: "Actions due",
    value: "8",
    note: "Owners and due dates tied to the current plan",
    trend: "2 follow-ups due today",
  },
];

const SIDEBAR_ITEMS: SidebarNavItem[] = [
  {
    id: "overview",
    label: "Dashboard",
    description: "Pipeline snapshot and live focus",
    icon: LayoutDashboard,
  },
  {
    id: "plan",
    label: "Scenario Plan",
    description: "Compare recovery and expansion paths",
    icon: FolderOpen,
  },
  {
    id: "history",
    label: "Decision Log",
    description: "See how the plan changed over time",
    icon: History,
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
      account: "Atlas Health",
      owner: "Noah Patel",
      stage: "Renewal Review",
      health: "At risk",
      value: "$240K",
      nextStep: "Run executive alignment call",
      due: "Today",
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
        due: "Mar 20",
        priority: "High",
        context: "Recovery path",
      },
    ],
  },
  {
    row: {
      account: "Northstar Logistics",
      owner: "Ava Chen",
      stage: "Negotiation",
      health: "Healthy",
      value: "$180K",
      nextStep: "Finalize commercial terms",
      due: "Mar 20",
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
        due: "Mar 20",
        priority: "High",
        context: "Push expansion",
      },
      {
        title: "Confirm procurement decision owner",
        owner: "Leo Brooks",
        due: "Mar 20",
        priority: "Medium",
        context: "Negotiation path",
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
      due: "Mar 21",
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
        due: "Mar 21",
        priority: "Medium",
        context: "Multi-thread recovery",
      },
      {
        title: "Update Apex pricing options",
        owner: "Ava Chen",
        due: "Mar 21",
        priority: "Medium",
        context: "Budget-safe close",
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
      due: "Mar 24",
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
        due: "Mar 24",
        priority: "High",
        context: "Clean commit handoff",
      },
      {
        title: "Validate Meridian onboarding dependencies",
        owner: "Leo Brooks",
        due: "Mar 24",
        priority: "Medium",
        context: "Execution readiness",
      },
    ],
  },
];

function getHealthClasses(health: AccountRow["health"]) {
  if (health === "Healthy") {
    return "border-border/25 bg-foreground";
  }

  if (health === "Watch") {
    return "border-border/75 bg-secondary/25 text-text/75";
  }

  return "border-border bg-secondary text-text";
}

type DemoAccountSwitcherProps = {
  workspaces: DemoAccountWorkspace[];
  selectedAccountName: string;
  onChange: (accountName: string) => void;
};

function DemoAccountSwitcher({
  workspaces,
  selectedAccountName,
  onChange,
}: DemoAccountSwitcherProps) {
  return (
    <section className="border-border bg-foreground rounded-[30px] border p-5">
      <div className="flex flex-col gap-3 md:justify-between">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium tracking-widest uppercase">
            Focused account
          </p>
          <div className="border-border bg-secondary text-text/75 w-fit rounded-full border px-1.5 py-0.5 text-xs font-medium tracking-widest text-nowrap uppercase">
            4 live accounts
          </div>
        </div>
        <p className="text-text text-lg font-semibold">
          Switch the live workspace context without losing the dashboard.
        </p>
      </div>

      <div className="mt-4 overflow-x-auto overscroll-contain">
        <div className="flex min-w-max gap-2">
          {workspaces.map((workspace) => {
            const isActive = workspace.row.account === selectedAccountName;

            return (
              <button
                key={workspace.row.account}
                type="button"
                onClick={() => onChange(workspace.row.account)}
                aria-pressed={isActive}
                className={`min-w-55 rounded-3xl border px-4 py-4 text-left transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? "border-border bg-secondary"
                    : "border-border/50 bg-foreground hover:border-border hover:bg-secondary"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-text text-sm font-semibold">
                      {workspace.row.account}
                    </p>
                    <p className="text-text-muted mt-1 text-xs tracking-[0.12em] uppercase">
                      {workspace.row.stage}
                    </p>
                  </div>
                  <span
                    className={`text-text-muted inline-flex rounded-full border px-1.5 py-0.5 text-[10px] uppercase ${getHealthClasses(
                      workspace.row.health,
                    )}`}
                  >
                    {workspace.row.health}
                  </span>
                </div>

                <p className="mt-4 text-sm">
                  {workspace.row.owner} ·{" "}
                  <strong className="text-text">{workspace.row.value}</strong>
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type DemoSidebarProps = {
  activeView: DemoView;
  onChange: (view: DemoView) => void;
  selectedWorkspace: DemoAccountWorkspace;
};

function DemoSidebar({ activeView, onChange }: DemoSidebarProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-text text-lg font-semibold">Tactica</p>
          <p className="text-text-muted text-sm">Revenue Workspace</p>
        </div>
        <div className="border-border bg-foreground text-text-muted inline-flex items-center gap-2 rounded-full border px-2 py-0.5 text-xs font-medium tracking-wider uppercase">
          <Sparkles className="h-3 w-3" />
          Demo
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3 xl:grid-cols-1">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeView;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
                aria-pressed={isActive}
                className={`flex h-fit items-start gap-3 rounded-[22px] border px-4 py-4 text-left transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? "border-border bg-secondary"
                    : "border-border/50 bg-foreground hover:border-border hover:bg-secondary"
                }`}
              >
                <div
                  className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                    isActive
                      ? "bg-background text-text"
                      : "bg-secondary text-text-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-text text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-text-muted mt-1 text-xs leading-5">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <p className="text-text text-lg font-semibold">Back to site</p>
          <p className="text-text-muted mt-2 text-sm leading-6">
            Return to the landing page after reviewing the dashboard shell and
            workspace flow.
          </p>
          <Link
            to="/"
            className="border-border bg-foreground hover:bg-secondary hover:text-text mt-3 inline-flex items-center justify-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-200 active:scale-[0.975]"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  const [selectedAccountName, setSelectedAccountName] = useState(
    ACCOUNT_WORKSPACES[0]?.row.account ?? "",
  );
  const [activeView, setActiveView] = useState<DemoView>("overview");

  const selectedWorkspace =
    ACCOUNT_WORKSPACES.find(({ row }) => row.account === selectedAccountName) ??
    ACCOUNT_WORKSPACES[0];

  const renderActiveView = () => {
    if (activeView === "overview") {
      return (
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <AccountsTable
              rows={ACCOUNT_WORKSPACES.map(({ row }) => row)}
              selectedAccount={selectedWorkspace.row.account}
              onSelectAccount={setSelectedAccountName}
            />
          </div>

          <div className="space-y-4">
            <NextActionsPanel
              accountName={selectedWorkspace.row.account}
              items={selectedWorkspace.nextActions}
            />
            <DecisionLog
              accountName={selectedWorkspace.row.account}
              items={selectedWorkspace.decisionLog}
            />
          </div>
        </div>
      );
    }

    if (activeView === "plan") {
      return (
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <div>
              <ScenarioPanel
                accountName={selectedWorkspace.row.account}
                items={selectedWorkspace.scenarios}
              />
            </div>

            <div className="space-y-4">
              <NextActionsPanel
                accountName={selectedWorkspace.row.account}
                items={selectedWorkspace.nextActions}
              />
              <DecisionLog
                accountName={selectedWorkspace.row.account}
                items={selectedWorkspace.decisionLog}
              />
            </div>
          </div>

          <AccountsTable
            rows={ACCOUNT_WORKSPACES.map(({ row }) => row)}
            selectedAccount={selectedWorkspace.row.account}
            onSelectAccount={setSelectedAccountName}
          />
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <DecisionLog
          accountName={selectedWorkspace.row.account}
          items={selectedWorkspace.decisionLog}
        />
        <AccountsTable
          rows={ACCOUNT_WORKSPACES.map(({ row }) => row)}
          selectedAccount={selectedWorkspace.row.account}
          onSelectAccount={setSelectedAccountName}
        />
        <NextActionsPanel
          accountName={selectedWorkspace.row.account}
          items={selectedWorkspace.nextActions}
        />
      </div>
    );
  };

  return (
    <DemoShell
      sidebar={
        <DemoSidebar
          activeView={activeView}
          onChange={setActiveView}
          selectedWorkspace={selectedWorkspace}
        />
      }
      topbar={<DemoTopbar />}
    >
      <div className="space-y-4 lg:space-y-5">
        <section className="">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex max-w-3xl flex-col max-lg:items-center">
              <div className="border-border bg-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                Sales Command Center
              </div>
              <h1 className="text-text mt-4 text-4xl font-semibold tracking-tight max-lg:text-center md:text-5xl">
                Revenue dashboard
              </h1>
              <p className="text-text-muted mt-3 max-w-3xl text-sm leading-7 max-lg:text-center md:text-lg">
                Review the pipeline, pressure-test scenarios, and turn account
                context into actions without leaving the same workspace.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-nowrap sm:flex-row xl:flex-col">
              <button
                type="button"
                className="border-border bg-secondary text-text hover:bg-foreground hover:text-text-muted inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.98]"
              >
                <Plus className="h-4 w-4" />
                Run Review
              </button>
              <button
                type="button"
                className="border-border bg-foreground text-text-muted hover:bg-secondary hover:text-text inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                Import Data
              </button>
            </div>
          </div>

          <section className="border-border bg-secondary/25 mt-6 rounded-[28px] border p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-text text-2xl font-semibold">
                    {selectedWorkspace.row.account}
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-1.5 py-0.5 text-xs font-medium uppercase ${getHealthClasses(
                      selectedWorkspace.row.health,
                    )}`}
                  >
                    {selectedWorkspace.row.health}
                  </span>
                </div>
                <p className="text-sm leading-6 md:text-base">
                  {selectedWorkspace.summary}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="border-border/50 bg-foreground rounded-[22px] border px-4 py-3">
                <p className="text-xs tracking-widest uppercase">Owner</p>
                <p className="text-text mt-1 font-medium lg:text-lg">
                  {selectedWorkspace.row.owner}
                </p>
              </div>
              <div className="border-border/50 bg-foreground rounded-[22px] border px-4 py-3">
                <p className="text-xs tracking-widest uppercase">Stage</p>
                <p className="text-text mt-1 font-medium lg:text-lg">
                  {selectedWorkspace.row.stage}
                </p>
              </div>
              <div className="border-border/50 bg-foreground rounded-[22px] border px-4 py-3">
                <p className="text-xs tracking-widest uppercase">Value</p>
                <p className="text-text mt-1 font-medium lg:text-lg">
                  {selectedWorkspace.row.value}
                </p>
              </div>
              <div className="border-border/50 bg-foreground rounded-[22px] border px-4 py-3">
                <p className="text-xs tracking-widest uppercase">Next step</p>
                <p className="text-text mt-1 font-medium lg:text-lg">
                  {selectedWorkspace.row.nextStep}
                </p>
              </div>
            </div>
          </section>
        </section>

        <DemoAccountSwitcher
          workspaces={ACCOUNT_WORKSPACES}
          selectedAccountName={selectedWorkspace.row.account}
          onChange={setSelectedAccountName}
        />

        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {KPI_ITEMS.map((item, index) => (
            <DemoKpiCard
              key={item.label}
              label={item.label}
              value={item.value}
              note={item.note}
              trend={item.trend}
              accent={index === 0}
            />
          ))}
        </div>

        {renderActiveView()}
      </div>
    </DemoShell>
  );
}
