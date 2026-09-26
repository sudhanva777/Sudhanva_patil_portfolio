"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/shared/AnimatedText";

export default function TermsPage() {
    return (
        <div className="page-wrapper py-20 section">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">
                    <AnimatedText text="Terms of Service" />
                </h1>
                <div className="space-y-6 text-[var(--text-secondary)]">
                    <p>Last updated: February 2025</p>
                    <p>
                        By accessing this website, you agree to the following terms and conditions.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Intellectual Property</h2>
                    <p>
                        All content, including code, design, and projects, are the intellectual property of Sudhanva Patil unless otherwise stated.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Use License</h2>
                    <p>
                        Permission is granted to view the materials on this website for personal, non-commercial transitory viewing only.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Disclaimer</h2>
                    <p>
                        The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied.
                    </p>
                </div>
            </div>
        </div>
    );
}
