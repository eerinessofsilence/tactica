import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Who is Tactica built for?",
    answer:
      "Tactica is built for revenue teams that need one place to manage accounts, inspect pipeline health, decide next steps, and coordinate execution. It fits sales, RevOps, customer-facing, and cross-functional teams working around live revenue decisions.",
  },
  {
    question: "Is this meant to replace our CRM?",
    answer:
      "It is meant to replace the messy combination of CRM views, spreadsheets, and status docs that teams rely on to actually run pipeline reviews and account decisions. The product should feel like the operating layer where context, planning, and execution live together.",
  },
  {
    question: "How is this different from a standard CRM dashboard?",
    answer:
      "A standard CRM dashboard shows pipeline state. Tactica is designed to help the team decide what to do next with that information. It combines visibility, account context, scenario planning, decision memory, and coordinated follow-through in one workspace.",
  },
  {
    question: "Do we need a large team to get value from it?",
    answer:
      "No. Smaller teams can use Tactica to replace loose CRM habits, spreadsheets, and status updates with a clearer operating rhythm. Larger organizations benefit when multiple teams need the same account picture, decision history, and branching logic.",
  },
  {
    question: "Can we start with one revenue workflow and expand later?",
    answer:
      "Yes. Most teams start with a shared account or pipeline workflow, then expand into deeper inspection rituals, scenario planning, and broader cross-team coordination as adoption grows.",
  },
  {
    question: "What does onboarding and migration usually look like?",
    answer:
      "Starter and Ops can begin with a core workspace setup, account structure, and first review cadence. Command adds guided rollout, migration support, and coordination design for more complex revenue environments.",
  },
  {
    question: "How do pricing and support scale?",
    answer:
      "Starter and Ops are seat-based monthly plans. Command is scoped annually for organizations that need more governance, rollout help, and a tighter operating model across larger account portfolios and teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container mx-auto px-5 pb-8 lg:pb-16"
    >
      <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="max-xl:flex max-xl:justify-center max-xl:text-center xl:sticky xl:top-32 xl:self-start">
          <div>
            <h2
              id="faq-title"
              className="text-text max-w-xl text-4xl font-bold text-balance md:text-5xl"
            >
              The questions revenue teams ask before they switch
            </h2>
            <p className="mt-4 max-w-xl text-lg text-balance md:text-xl">
              Most evaluation friction is about CRM replacement, migration,
              adoption, and whether the workspace still helps when deals, owners
            </p>

            <a
              href="#pricing"
              className="border-border bg-foreground hover:bg-secondary hover:text-text mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 transition-colors duration-200"
            >
              Compare revenue plans
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-border bg-foreground h-fit overflow-hidden rounded-4xl border">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={
                  index < FAQ_ITEMS.length - 1 ? "border-border border-b" : ""
                }
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex((currentIndex) =>
                      currentIndex === index ? -1 : index,
                    )
                  }
                  className={`flex w-full gap-4 p-6 text-left ${isOpen ? "items-start" : "items-center"}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="text-text block text-lg font-semibold text-balance md:text-2xl">
                      {item.question}
                    </span>

                    <span
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <span className="min-h-0">
                        <span className="text-text-muted block max-w-2xl px-3 text-sm text-balance md:text-base">
                          {item.answer}
                        </span>
                      </span>
                    </span>
                  </span>

                  <span className="border-border/50 bg-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border">
                    <ChevronDown
                      className={`text-text h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
