"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Scale, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Diagnóstico",
        description: "Análise minuciosa do seu caso para identificar riscos e oportunidades legais.",
    },
    {
        number: "02",
        title: "Estratégia",
        description: "Desenvolvimento de um plano de ação personalizado e assertivo.",
    },
    {
        number: "03",
        title: "Execução",
        description: "Atuação técnica rigorosa nos tribunais ou em negociações extrajudiciais.",
    },
    {
        number: "04",
        title: "Resolução",
        description: "Busca incansável pelo melhor resultado possível para seus interesses.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image & Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        {/* Main Image */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div
                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: 'url("/images/metodology.jpeg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>

                            {/* Floating Quote Card */}
                            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl border-l-4 border-accent">
                                <p className="text-lg font-display italic text-foreground/90 mb-4">
                                    "A justiça sustenta-se na verdade, na competência e na dedicação incansável ao seu caso."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Scale className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">Arthur Ybson</p>
                                        <p className="text-xs text-muted">Advogado Especialista</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-2xl"></div>
                    </motion.div>

                    {/* Right Column - Steps */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                                Metodologia de Atuação
                            </h2>
                            <p className="text-muted text-lg">
                                Um processo estruturado para garantir segurança e transparência em cada etapa.
                            </p>
                        </motion.div>

                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden sm:block"></div>

                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    {/* Number Circle */}
                                    <div className="relative shrink-0 w-14 h-14 rounded-full border border-accent/30 bg-background flex items-center justify-center text-accent font-display font-bold text-xl group-hover:bg-accent group-hover:text-background transition-colors duration-300 z-10 shadow-[0_0_15px_rgba(201,162,39,0.1)] mr-6">
                                        {step.number}
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 pl-20"
                        >
                            <a
                                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20um%20atendimento."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors hover:space-x-4 cursor-pointer"
                            >
                                <span className="uppercase tracking-widest text-sm font-semibold">Iniciar Atendimento</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

