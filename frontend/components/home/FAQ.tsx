import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Who is Tactica built for?",
    answer:
      "Tactica is built for teams that need to plan, compare scenarios, and keep execution aligned across multiple people. It fits product, operations, strategy, and cross-functional planning environments.",
  },
  {
    question: "Do we need a large team to get value from it?",
    answer:
      "No. Smaller teams can use Tactica to turn informal planning into a clearer operating system. Larger organizations benefit when multiple teams need the same mission view, decision history, and branching logic.",
  },
  {
    question: "How is this different from a generic project tracker?",
    answer:
      "A generic tracker records tasks after direction is chosen. Tactica is built earlier in the cycle: it helps teams shape the plan, test alternate paths, document intent, and then carry that context into execution.",
  },
  {
    question: "Can we start with one workflow and expand later?",
    answer:
      "Yes. The product is designed to start with a single mission or planning workflow and scale into deeper branching, review rituals, and broader cross-team coordination as adoption grows.",
  },
  {
    question: "What does onboarding usually look like?",
    answer:
      "Starter and Ops can begin quickly with a small planning structure and a first review cadence. Command adds guided rollout, operating support, and coordination for more complex team environments.",
  },
  {
    question: "How do pricing and support scale?",
    answer:
      "Starter and Ops are seat-based monthly plans. Command is scoped annually for organizations that need more governance, rollout help, and a tighter operating model across larger teams.",
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
              className="text-text max-w-xl text-4xl font-bold text-balance italic md:text-5xl"
            >
              The practical questions that show up before teams commit.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-balance md:text-xl">
              Most evaluation friction is about adoption, clarity, rollout
              shape, and whether the system still holds when conditions change
              fast.
            </p>

            <a
              href="#pricing"
              className="border-border bg-foreground hover:bg-secondary shadow-text/20 hover:text-text mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 shadow-inner transition-colors duration-200"
            >
              Compare plans
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-border bg-foreground shadow-text/20 h-fit overflow-hidden rounded-[2.5rem] border shadow-inner">
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

                  <span className="border-border bg-foreground shadow-text/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border shadow-inner">
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
