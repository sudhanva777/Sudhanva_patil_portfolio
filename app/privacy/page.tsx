"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/shared/AnimatedText";

export default function PrivacyPage() {
    return (
        <div className="page-wrapper py-20 section">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">
                    <AnimatedText text="Privacy Policy" />
                </h1>
                <div className="space-y-6 text-[var(--text-secondary)]">
                    <p>Last updated: February 2025</p>
                    <p>
                        This Privacy Policy describes how your personal information is handled when you visit my portfolio.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Information Collection</h2>
                    <p>
                        I do not collect any personal data through this website unless you voluntarily provide it through the contact form.
                        The contact form collects your name and email address so that I can respond to your inquiries.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Cookies</h2>
                    <p>
                        This site may use basic analytics provided by Vercel to understand site traffic. These do not identify individuals.
                    </p>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">Contact</h2>
                    <p>
                        If you have any questions about this policy, please contact me through the contact form.
                    </p>
                </div>
            </div>
        </div>
    );
}
