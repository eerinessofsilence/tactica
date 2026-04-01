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

type DemoSidebarProps = {
  activeView: DemoView;
  onChange: (view: DemoView) => void;
  selectedWorkspace: DemoAccountWorkspace;
};

function DemoSidebar({ activeView, onChange }: DemoSidebarProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <p className="text-text text-lg font-semibold">Tactica</p>
        <div className="border-border bg-foreground text-text-muted inline-flex items-center gap-2 rounded-full border px-2 py-0.5 text-xs font-medium tracking-wider uppercase">
          <Sparkles className="h-3 w-3" />
          Demo
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3 2xl:grid-cols-1">
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
          <Link
            to="/"
            className="border-border bg-foreground hover:bg-secondary hover:text-text mt-3 inline-flex items-center justify-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-200 active:scale-[0.975]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
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
        <div className="flex min-w-0 flex-col gap-4">
          <div className="min-w-0 space-y-4">
            <AccountsTable
              rows={ACCOUNT_WORKSPACES.map(({ row }) => row)}
              selectedAccount={selectedWorkspace.row.account}
              onSelectAccount={setSelectedAccountName}
            />
          </div>

          <div className="min-w-0 space-y-4">
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
        <div className="min-w-0 space-y-4">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="min-w-0">
              <ScenarioPanel
                accountName={selectedWorkspace.row.account}
                items={selectedWorkspace.scenarios}
              />
            </div>

            <div className="min-w-0 space-y-4">
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
      <div className="min-w-0 space-y-4">
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
    <div className="dashboard bg-background/90 grid min-w-0 gap-3 overflow-x-hidden 2xl:grid-cols-[18.5rem_minmax(0,1fr)]">
      <div className="relative min-w-0">
        <div className="h-fit w-full shrink-0 p-5 2xl:sticky 2xl:top-5">
          <DemoSidebar
            activeView={activeView}
            onChange={setActiveView}
            selectedWorkspace={selectedWorkspace}
          />
        </div>
      </div>
      <div className="bg-background flex flex-col p-5">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <DemoTopbar />
          <div className="min-w-0 space-y-4 lg:space-y-5">
            <section className="flex flex-col gap-5 2xl:flex-row 2xl:items-start 2xl:justify-between">
              <div className="flex max-w-3xl flex-col max-lg:items-center">
                <h1 className="text-text mt-4 text-4xl font-semibold tracking-tight max-lg:text-center md:text-5xl">
                  Revenue dashboard
                </h1>
              </div>

              <div className="flex flex-col gap-3 text-nowrap sm:flex-row 2xl:flex-col">
                <button
                  type="button"
                  className="border-border bg-secondary text-text hover:bg-foreground hover:text-text-muted inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.98]"
                >
                  <Plus className="h-4 w-4" />
                  Add Company
                </button>
                <button
                  type="button"
                  className="border-border bg-foreground text-text-muted hover:bg-secondary hover:text-text inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.98]"
                >
                  <Download className="h-4 w-4" />
                  Import Data
                </button>
              </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
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
        </div>
      </div>
    </div>
  );
}
