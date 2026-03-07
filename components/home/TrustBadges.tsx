"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Lock, Scale } from "lucide-react";

const badges = [
    {
        icon: ShieldCheck,
        title: "OAB Regular",
        description: "Registro ativo e em dia com a Ordem dos Advogados do Brasil",
    },
    {
        icon: Users,
        title: "Atendimento Personalizado",
        description: "Cada caso é único e recebe total dedicação e análise aprofundada",
    },
    {
        icon: Lock,
        title: "Confidencialidade",
        description: "Sigilo absoluto garantido pelo Código de Ética da OAB",
    },
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-background relative border-y border-white/5">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:space-x-6 p-6 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10"
                            >
                                {/* Icon Container with Glow */}
                                <div className="relative shrink-0 mb-4 md:mb-0">
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative w-16 h-16 rounded-full bg-linear-to-br from-accent/10 to-accent/5 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors">
                                        <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {badge.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed max-w-sm">
                                        {badge.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
