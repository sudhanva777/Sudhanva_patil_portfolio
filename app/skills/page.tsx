"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { getSkillIcon } from "@/components/SkillIcons";

export default function SkillsPage() {
  return (
    <div className="page-wrapper py-12 sm:py-20">
      <div className="mb-12">
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--accent-emerald)" }}
        >
          Technical Stack
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          Skills &{" "}
          <span className="gradient-text-ds">Technologies</span>
        </h1>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: catIndex * 0.07 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                {category.category}
              </h2>
              <div
                className="flex-1 h-px opacity-20"
                style={{ background: "var(--accent-indigo)" }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: catIndex * 0.07 + skillIndex * 0.02 }}
                  className="skill-icon-card"
                >
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-primary)] truncate w-full">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-sm text-[var(--text-secondary)] text-center"
      >
        Always learning. Currently exploring:{" "}
        <span style={{ color: "var(--accent-indigo)" }}>LangChain</span> ·{" "}
        <span style={{ color: "var(--accent-emerald)" }}>Ray</span> ·{" "}
        <span style={{ color: "var(--accent-violet)" }}>Rust for ML</span>
      </motion.p>
    </div>
  );
}
