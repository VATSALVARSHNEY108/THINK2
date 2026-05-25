"use client";

import Link from "next/link";
import {
  Brain,
  Network,
  Cpu,
  Monitor,
  CircuitBoard,
  Radio,
  Waves,
  Database,
  Gauge,
  Code,
  Zap,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";

/* ── Subject Metadata Maps ──────────────────────────────── */

const SUBJECT_ICON_MAP: Record<string, React.ElementType> = {
  dsa: Zap,
  "artificial-intelligence": Brain,
  "computer-network": Network,
  "computer-organization-and-architecture": Cpu,
  "operating-system": Monitor,
  "digital-electronics": CircuitBoard,
  "communication-systems": Radio,
  "signals-and-systems": Waves,
  "database-management-system": Database,
  "control-systems": Gauge,
  "compiler-design": Code,
};

const SUBJECT_COLORS: Record<string, { accent: string; bg: string; border: string; glow: string }> = {
  dsa:                                     { accent: "#01c3a8", bg: "rgba(1, 195, 168, 0.06)",  border: "rgba(1, 195, 168, 0.18)",  glow: "rgba(1, 195, 168, 0.12)" },
  "artificial-intelligence":               { accent: "#ffb741", bg: "rgba(255, 183, 65, 0.06)", border: "rgba(255, 183, 65, 0.18)", glow: "rgba(255, 183, 65, 0.12)" },
  "computer-network":                      { accent: "#1890ff", bg: "rgba(24, 144, 255, 0.06)", border: "rgba(24, 144, 255, 0.18)", glow: "rgba(24, 144, 255, 0.12)" },
  "computer-organization-and-architecture":{ accent: "#a63d2a", bg: "rgba(166, 61, 42, 0.06)",  border: "rgba(166, 61, 42, 0.18)",  glow: "rgba(166, 61, 42, 0.12)" },
  "operating-system":                      { accent: "#ffb741", bg: "rgba(255, 183, 65, 0.06)", border: "rgba(255, 183, 65, 0.18)", glow: "rgba(255, 183, 65, 0.12)" },
  "digital-electronics":                   { accent: "#01c3a8", bg: "rgba(1, 195, 168, 0.06)",  border: "rgba(1, 195, 168, 0.18)",  glow: "rgba(1, 195, 168, 0.12)" },
  "communication-systems":                 { accent: "#1890ff", bg: "rgba(24, 144, 255, 0.06)", border: "rgba(24, 144, 255, 0.18)", glow: "rgba(24, 144, 255, 0.12)" },
  "signals-and-systems":                   { accent: "#ffb741", bg: "rgba(255, 183, 65, 0.06)", border: "rgba(255, 183, 65, 0.18)", glow: "rgba(255, 183, 65, 0.12)" },
  "database-management-system":            { accent: "#1890ff", bg: "rgba(24, 144, 255, 0.06)", border: "rgba(24, 144, 255, 0.18)", glow: "rgba(24, 144, 255, 0.12)" },
  "control-systems":                       { accent: "#01c3a8", bg: "rgba(1, 195, 168, 0.06)",  border: "rgba(1, 195, 168, 0.18)",  glow: "rgba(1, 195, 168, 0.12)" },
  "compiler-design":                       { accent: "#a63d2a", bg: "rgba(166, 61, 42, 0.06)",  border: "rgba(166, 61, 42, 0.18)",  glow: "rgba(166, 61, 42, 0.12)" },
};


const SUBJECT_TOPIC_COUNT: Record<string, number> = {
  dsa: 12,
  "artificial-intelligence": 15,
  "computer-network": 11,
  "computer-organization-and-architecture": 1,
  "operating-system": 10,
  "digital-electronics": 1,
  "database-management-system": 1,
  "compiler-design": 1,
  "signals-and-systems": 1,
  "communication-systems": 1,
  "control-systems": 1,
};

const FALLBACK_COLORS = { accent: "#6366f1", bg: "rgba(99, 102, 241, 0.06)", border: "rgba(99, 102, 241, 0.18)", glow: "rgba(99, 102, 241, 0.12)" };

/* ── Types ──────────────────────────────────────────────── */

interface SubjectInfo {
  id: string;
  name: string;
  description?: string;
}

interface CurriculumCardsProps {
  subjects: SubjectInfo[];
}

/* ── Component ──────────────────────────────────────────── */

export default function CurriculumCards({ subjects }: CurriculumCardsProps) {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 overflow-hidden">
      {/* Hero Header */}
      <div className="relative z-10 pt-32 pb-8 px-6 lg:px-16 max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[10px] font-black tracking-widest uppercase mb-8 shadow-sm">
            <BookOpen size={12} className="text-indigo-500 animate-pulse" />
            THINK++ Curriculum
          </div>
          <h1
            className="text-5xl md:text-7xl mb-6 font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Your Learning<br />
            <span className="opacity-30">Paths.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-2xl opacity-85">
            Pick a subject to explore interactive lessons, real-time simulations, and hands-on sandboxes across the full CS engineering stack.
          </p>
        </header>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-6 mb-14">
          {[
            { value: subjects.length, label: "Subjects" },
            { value: "2,400+", label: "Lessons" },
            { value: "100%", label: "Interactive" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-2xl font-black text-[var(--text-primary)]" style={{ fontFamily: "var(--font-outfit)" }}>{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {subjects.map((subject, i) => {
            const colors = SUBJECT_COLORS[subject.id] || FALLBACK_COLORS;
            const Icon = SUBJECT_ICON_MAP[subject.id] || Layers;
            const topicCount = SUBJECT_TOPIC_COUNT[subject.id] ?? 1;

            return (
              <Link
                key={subject.id}
                href={`/curriculum/${subject.id}`}
                className="group relative flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(26, 26, 30, 0.55)",
                  backdropFilter: "blur(16px)",
                  borderColor: colors.border,
                  boxShadow: `0 4px 24px rgba(0,0,0,0.2)`,
                }}
                id={`subject-${subject.id}`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-500 group-hover:h-[4px]"
                  style={{ backgroundColor: colors.accent }}
                />

                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <Icon size={20} style={{ color: colors.accent }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-[var(--text-secondary)]">
                      {topicCount} {topicCount === 1 ? "topic" : "topics"}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--text-secondary)] opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-white transition-colors duration-300 leading-tight">
                    {subject.name}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] opacity-60 leading-relaxed line-clamp-2">
                    {subject.description || `Explore the ${subject.name} curriculum with interactive lessons and simulations.`}
                  </p>
                </div>


                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at 50% 0%, ${colors.glow}, transparent 60%)`,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
