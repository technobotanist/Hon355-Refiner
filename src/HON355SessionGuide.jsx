import { useMemo, useState } from "react";

const fields = [
    {
      id: "topic",
      label: "1. In one sentence, what is your project about?",
      placeholder: "Example: I want to study how AI companions shape ideas of loneliness and intimacy.",
      rows: 3,
    },
    {
      id: "researching",
      label: "2. I am researching / working on...",
      placeholder: "Name the specific case, platform, technology, audience, or comparison.",
      rows: 3,
    },
    {
      id: "understand",
      label: "3. Because I want to understand...",
      placeholder: "What do you not know yet? What is the real question behind your topic?",
      rows: 3,
    },
    {
      id: "matters",
      label: "4. In order to help my reader / listener / viewer understand...",
      placeholder: "Why should someone care about the answer?",
      rows: 3,
    },
    {
      id: "reading",
      label: "5. Relevant reading, QFC, class discussion, or concept...",
      placeholder: "List a quote, text, discussion, or course concept that grounds your idea.",
      rows: 3,
    },
    {
      id: "tension",
      label: "6. What tension or problem in that text matters for your project?",
      placeholder: "Avoid summary. Name the contradiction, pressure point, or unresolved issue.",
      rows: 4,
    },
    {
      id: "question",
      label: "7. Draft research question...",
      placeholder: "Write a question that is focused, arguable, and not just descriptive.",
      rows: 4,
    },
    {
      id: "medium",
      label: "8. Best medium and intended audience...",
      placeholder: "Explain what format fits best and who it is for.",
      rows: 4,
    },
    {
      id: "aiRight",
      label: "9. What the AI got right...",
      placeholder: "Identify at least one genuinely useful suggestion.",
      rows: 3,
    },
    {
      id: "aiWrong",
      label: "10. What the AI got wrong or made too generic...",
      placeholder: "Identify flattening, overreach, weak wording, or missed stakes.",
      rows: 3,
    },
  ];

export default function HON355SessionGuide() {
  const initialForm = useMemo(
    () =>
      fields.reduce((acc, field) => {
        acc[field.id] = "";
        return acc;
      }, {}),
    [],
  );

  const [form, setForm] = useState(initialForm);
  const [copied, setCopied] = useState(false);

  const setField = (id, value) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const generatedPrompt = useMemo(
    () => `I am developing a final project for HON 355 on how technology mediates experience, relationships, and social structures.\n\nMy topic is:\n${form.topic || "[insert topic]"}\n\nI am researching / working on:\n${form.researching || "[insert 3a]"}\n\nWhat I want to understand is:\n${form.understand || "[insert 3b]"}\n\nWhy it matters is:\n${form.matters || "[insert 3c]"}\n\nRelevant course reading, QFC, or concept:\n${form.reading || "[insert here]"}\n\nThe tension or problem I think matters is:\n${form.tension || "[insert tension]"}\n\nMy current draft question is:\n${form.question || "[insert draft question]"}\n\nMy current thought on medium and audience is:\n${form.medium || "[insert medium and audience]"}\n\nHelp me refine this into a more specific, arguable research question and suggest project formats that match the idea. Ask clarifying questions first. Do not write the whole proposal for me.`,
    [form],
  );

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  const resetForm = () => setForm(initialForm);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000]">
      <div className="h-3 w-full bg-[#CC0000]" />
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]">
            <div className="mb-4 inline-flex rounded-full bg-[#CC0000] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              NC State Libraries • HON 355 Project Worksheet
            </div>
            <h1 className="mb-3 text-3xl font-semibold tracking-tight md:text-5xl">
              From broad topic to focused project question
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-black/75 md:text-base">
              This session is built to help you move from an initial idea to a clearer research question,
              a viable medium, and a rough proposal structure. The goal is not to finish the project today.
              The goal is to leave with a sharper direction.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <StatCard label="Focus" value="Question over summary" accent="#CC0000" />
              <StatCard label="Method" value="AI as critique partner" accent="#427E93" />
              <StatCard label="Output" value="Proposal skeleton" accent="#6F7D1C" />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-[#F7F7F7] p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Session Tool</div>
            <h2 className="text-xl font-semibold">HON 355 Project Refiner</h2>
            <p className="mt-2 text-sm leading-6 text-black/75">
              Open the shared Gemini conversation partner for this workshop and use it to test, narrow, and strengthen your project idea.
            </p>
            <div className="mt-5 space-y-3 text-sm text-black/80">
              <a
                href="https://gemini.google.com/gem/1whwwZrisG-Gyu3Q72cxAwh5rMHrigg-9?usp=sharing"
                className="inline-flex rounded-2xl border border-black/10 bg-white px-4 py-3 font-semibold text-[#CC0000] hover:bg-[#FFF5F5]"
                target="_blank"
                rel="noreferrer"
              >
                Open the Gemini Project Refiner
              </a>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="font-semibold text-black">Use it for:</div>
                <ul className="mt-2 space-y-1 text-black/75">
                  <li>Refining a topic into a research question</li>
                  <li>Testing whether a question is still too broad</li>
                  <li>Comparing medium options</li>
                  <li>Spotting weak or generic phrasing</li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
            <h3 className="text-xl font-semibold">What you will do today</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Narrow a broad idea into a specific topic",
                "Turn that topic into an arguable research question",
                "Use QFC logic: quote → question → stakes → hypothesis",
                "Choose a medium that actually fits the argument",
                "Critique AI output instead of trusting it automatically",
                "Leave with a usable proposal outline",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-4 text-sm text-black/85"
                  style={{ borderLeft: `6px solid ${["#CC0000", "#427E93", "#6F7D1C", "#008473", "#D14905", "#4156A1"][index]}` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#FAC800]/50 bg-[#FFF8D9] p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
            <h3 className="text-xl font-semibold text-black">Ground rules for AI use</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-black/80">
              <li>Use AI to generate options, questions, and critiques.</li>
              <li>Do not use AI to write the full proposal for you.</li>
              <li>Assume polished output can still be vague, wrong, or flattened.</li>
              <li>Revise the AI&apos;s wording yourself before keeping any of it.</li>
              <li>Be able to explain what you kept, what you discarded, and why.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Student worksheet</div>
                <h2 className="text-2xl font-semibold">Editable working draft prompts</h2>
              </div>
              <button
                onClick={resetForm}
                className="rounded-2xl border border-black/10 bg-[#F7F7F7] px-4 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white"
              >
                Clear all fields
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {fields.map((field) => (
                <div key={field.id} className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-4">
                  <label className="block text-sm font-semibold text-black" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <textarea
                    id={field.id}
                    value={form[field.id]}
                    onChange={(event) => setField(field.id, event.target.value)}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    className="mt-3 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm leading-6 text-black placeholder:text-black/35 focus:border-[#CC0000] focus:outline-none focus:ring-2 focus:ring-[#CC0000]/20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Prompt for the tool</div>
              <h3 className="text-xl font-semibold">Built from your worksheet entries</h3>
              <textarea
                value={generatedPrompt}
                readOnly
                rows={18}
                className="mt-4 w-full rounded-2xl border border-black/10 bg-[#F7F7F7] p-4 font-mono text-sm leading-6 text-black focus:outline-none"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => copy(generatedPrompt)}
                  className="rounded-2xl bg-[#CC0000] px-4 py-2 text-sm font-semibold text-white hover:bg-[#990000]"
                >
                  {copied ? "Copied" : "Copy prompt"}
                </button>
                <a
                  href="https://gemini.google.com/gem/1whwwZrisG-Gyu3Q72cxAwh5rMHrigg-9?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 px-4 py-2 text-sm font-semibold text-black hover:bg-[#F7F7F7]"
                >
                  Open Project Refiner
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Discussion prompts</div>
              <h3 className="text-xl font-semibold">Use these to test your idea</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-black/75">
                <PromptCard accent="#CC0000" text="What makes this a question instead of just a topic?" />
                <PromptCard accent="#427E93" text="Where is the tension, contradiction, or unresolved issue?" />
                <PromptCard accent="#6F7D1C" text="What did the AI flatten, overstate, or make too generic?" />
                <PromptCard accent="#008473" text="Why is this medium the best vehicle for this idea?" />
                <PromptCard accent="#D14905" text="If this stayed at its current level of scope, would it become argument or summary?" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.16)]">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Leave with</div>
              <h3 className="text-xl font-semibold">What students should leave with</h3>
              <ul className="mt-4 space-y-3 text-sm text-black/75">
                <li>A narrowed project topic</li>
                <li>A draft research question</li>
                <li>A justified project medium</li>
                <li>At least one identified weakness in their current plan</li>
                <li>A rough proposal skeleton to build on</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-4" style={{ borderTop: `5px solid ${accent}` }}>
      <div className="text-xs font-semibold uppercase tracking-wide text-black/55">{label}</div>
      <div className="mt-1 text-sm font-semibold text-black">{value}</div>
    </div>
  );
}

function PromptCard({ accent, text }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-4" style={{ borderLeft: `6px solid ${accent}` }}>
      {text}
    </div>
  );
}
