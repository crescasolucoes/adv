"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Users, Calculator, Home, Heart, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/constants";

const iconMap: Record<string, any> = {
    Briefcase,
    Scale,
    Users,
    Calculator,
    Home,
    Heart,
};

export default function PracticeAreas() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        Áreas de Atuação
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Soluções jurídicas completas para proteger seus direitos e interesses
                    </p>
                </motion.div>

                {/* Practice Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRACTICE_AREAS.map((area, index) => {
                        const Icon = iconMap[area.icon];
                        return (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Link href={`/areas#${area.slug}`}>
                                    <div className="premium-card p-8 h-full group cursor-pointer">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors duration-300">
                                                    <Icon className="w-7 h-7 text-accent" />
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                                        </div>

                                        <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                                            {area.title}
                                        </h3>

                                        <p className="text-muted text-sm leading-relaxed">
                                            {area.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/areas"
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors duration-300 cursor-pointer group"
                    >
                        <span>Ver todas as áreas de atuação</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
