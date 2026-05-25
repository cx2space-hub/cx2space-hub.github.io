import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Workflow,
  Mail,
  CheckCircle2,
  Radar,
  BrainCircuit,
  Network,
  Search,
  LockKeyhole,
  Cpu,
  Activity,
  Sparkles,
  DatabaseZap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function CX2SpaceHome() {
  const services = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI Automation & Operational Intelligence",
      text: "Intelligent workflow systems that connect processes, documents, communication channels, data, approvals, and reporting into cleaner operating environments.",
      points: ["Workflow intelligence", "Knowledge and document automation", "AI agents with human oversight"],
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Cyber Readiness & Security Operations Support",
      text: "Cyber capability covering phishing simulation, threat intelligence, threat hunting, incident support, deep/dark web investigation, and AI-assisted security operations.",
      points: ["Threat hunting and incident support", "Deep/dark web investigation", "AI agents for cyber workflows"],
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Practical Cybersecurity Training",
      text: "Hands-on cybersecurity learning built around SOC thinking, alert investigation, real-world cases, and analyst decision-making.",
      points: ["SOC analyst foundations", "Investigation labs", "Career-ready security skills"],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div className="fixed inset-0 -z-20 bg-[#f8fbff]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(56,182,255,0.18),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(124,58,237,0.10),transparent_26%),radial-gradient(circle_at_75%_78%,rgba(29,78,216,0.10),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(2,8,20,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(2,8,20,0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-60" />

      <motion.div
        className="pointer-events-none fixed left-1/2 top-16 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
        animate={{ x: [-120, 120, -120], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/cx2space-logo.png" alt="CX2Space" className="h-14 w-auto object-contain drop-shadow-[0_8px_22px_rgba(15,23,42,0.18)]" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#automation" className="hover:text-blue-700">AI Automation</a>
            <a href="#cyber" className="hover:text-blue-700">Cyber Operations</a>
            <a href="#training" className="hover:text-blue-700">Training</a>
            <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 font-extrabold text-white shadow-lg shadow-slate-900/15 hover:bg-blue-700">Start a Conversation</a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-blue-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_#38b6ff]" />
            AI automation · Cyber operations · Practical capability
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-slate-950 md:text-7xl">
            Building intelligent operational systems powered by <span className="bg-gradient-to-r from-sky-500 via-blue-700 to-violet-600 bg-clip-text text-transparent">AI, automation, and cybersecurity expertise.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            CX2Space delivers advanced automation systems, cyber readiness services, and practical cybersecurity training for teams that want sharper operations, stronger awareness, and better decision-making.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-extrabold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Start a Conversation <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-700">
              Explore Capabilities
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="relative">
          <motion.div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-sky-300/50 via-blue-500/20 to-violet-500/30 blur-xl" animate={{ opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 3.5, repeat: Infinity }} />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/85 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-t-[2rem] border-b border-slate-200 bg-slate-950 px-6 py-5 text-white">
              <span className="text-sm font-bold">CX2Space capability layer</span>
              <span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-bold text-sky-300">Active Systems</span>
            </div>
            <div className="space-y-4 p-6">
              <StackItem short="AI" title="Operational Intelligence" text="Workflow systems, knowledge automation, AI agents, and reporting logic" />
              <StackItem short="SEC" title="Cyber Operations Support" text="Threat hunting, incident support, intelligence review, and readiness workflows" />
              <StackItem short="LAB" title="Cyber Capability Training" text="SOC thinking, analyst labs, phishing awareness, and real-case learning" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Core Capabilities" title="Advanced automation systems and cyber capability for modern operational environments." text="CX2Space combines AI automation, cybersecurity operations support, and practical training into a focused technology capability designed for real-world use." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.article variants={fadeUp} key={service.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-200 bg-sky-50 text-blue-700 transition group-hover:scale-105">{service.icon}</div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="automation" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="AI Automation" title="Intelligent workflows that do more than answer prompts." text="CX2Space designs AI-enabled systems around process, context, data movement, approvals, reporting, and repeatable business logic — built to support how operations actually run." />
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-slate-200 bg-white p-7 text-slate-950 shadow-2xl shadow-slate-900/10">
            <FlowStep icon={<Workflow className="h-5 w-5" />} title="Workflow intelligence" text="Structured systems that map tasks, inputs, outputs, owners, approvals, and decision points." />
            <FlowStep icon={<DatabaseZap className="h-5 w-5" />} title="Document and knowledge automation" text="Extraction, transformation, comparison, summarisation, and generation across business information flows." />
            <FlowStep icon={<Network className="h-5 w-5" />} title="Connected operating layers" text="Automations that connect email, forms, spreadsheets, CRMs, reporting tools, portals, and internal processes." />
            <FlowStep icon={<Cpu className="h-5 w-5" />} title="Controlled AI agents" text="Task-specific AI agents with guardrails, approvals, audit trails, and human oversight." />
          </motion.div>
        </div>
      </section>

      <section id="cyber" className="border-y border-slate-200 bg-white/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Cyber Operations" title="Cyber readiness services across awareness, intelligence, hunting, and response support." text="CX2Space supports organisations with practical cyber capability: phishing simulation, security awareness, deep/dark web investigation, threat hunting, incident support, and AI-assisted security operations." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-4">
            <MiniCard icon={<Mail className="h-5 w-5" />} title="Phishing Simulation" text="Controlled campaigns, staff awareness, and clear management reporting." />
            <MiniCard icon={<Search className="h-5 w-5" />} title="Deep & Dark Web Investigation" text="Review of exposed data, credential leaks, brand mentions, and external threat signals." />
            <MiniCard icon={<Radar className="h-5 w-5" />} title="Threat Hunting" text="Investigation support across suspicious activity, users, endpoints, network signals, and intelligence leads." />
            <MiniCard icon={<LockKeyhole className="h-5 w-5" />} title="Incident Support" text="Triage, evidence review, reporting, and response coordination support." />
          </motion.div>
        </div>
      </section>

      <section id="training" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Cybersecurity Training" title="Practical training built around how security work is actually performed." text="CX2Space training helps learners think like analysts: review evidence, investigate alerts, understand attacker behaviour, and communicate findings with confidence." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-3">
            <TrainingCard num="01" title="SOC Foundations" text="How alerts, logs, users, devices, and incidents connect inside real security operations." />
            <TrainingCard num="02" title="Investigation Practice" text="Hands-on examples using realistic alert scenarios, phishing cases, endpoint events, and timelines." />
            <TrainingCard num="03" title="Cyber Career Readiness" text="Analyst thinking, reporting, communication, interview preparation, and practical skill-building." />
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-7xl rounded-[2rem] border border-sky-200 bg-gradient-to-r from-white to-sky-50 p-8 shadow-xl shadow-slate-900/5 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-700"><Sparkles className="h-4 w-4" /> CX2Space Approach</div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Practical engineering. Clear communication. Security-aware delivery.</h2>
              <p className="mt-4 max-w-3xl text-slate-600">Every engagement is shaped around operational value: what needs to work, what needs to be trusted, and what outcome the business needs to see.</p>
            </div>
            <Activity className="hidden h-20 w-20 text-sky-500 md:block" />
          </div>
        </motion.div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-3 text-xs font-extrabold uppercase tracking-widest text-sky-300">Contact</div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Start with a direct conversation.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">Discuss AI automation, cyber readiness, training, or a specific operational challenge that needs a sharper solution.</p>
          </div>
          <a href="mailto:hello@cx2space.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-extrabold text-slate-950 hover:bg-sky-300">
            hello@cx2space.com <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="bg-white py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
          <img src="/cx2space-logo.png" alt="CX2Space" className="h-10 w-auto object-contain" />
          <span>© 2026 CX2Space.</span>
          <span>AI automation · Cyber operations · Practical cybersecurity training</span>
        </div>
      </footer>
    </main>
  );
}

function StackItem({ short, title, text }) {
  return (
    <motion.div whileHover={{ x: 6 }} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sm font-black text-blue-700">{short}</div>
      <div>
        <b className="block text-sm text-slate-950">{title}</b>
        <small className="text-xs leading-5 text-slate-500">{text}</small>
      </div>
      <CheckCircle2 className="h-5 w-5 text-sky-500" />
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="max-w-3xl">
      <div className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-700">{eyebrow}</div>
      <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </motion.div>
  );
}

function FlowStep({ icon, title, text }) {
  return (
    <motion.div whileHover={{ scale: 1.015 }} className="mb-4 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 last:mb-0">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-blue-700">{icon}</div>
      <div>
        <b className="block text-slate-950">{title}</b>
        <span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span>
      </div>
    </motion.div>
  );
}

function MiniCard({ icon, title, text }) {
  return (
    <motion.article variants={fadeUp} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-blue-700">{icon}</div>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </motion.article>
  );
}

function TrainingCard({ num, title, text }) {
  return (
    <motion.article variants={fadeUp} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="text-5xl font-black tracking-tight text-blue-700/15">{num}</div>
      <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </motion.article>
  );
}
