"use client";

import { motion } from "framer-motion";

export function AnimatedText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {text}
    </motion.span>
  );
}
