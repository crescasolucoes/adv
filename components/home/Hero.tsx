"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface HeroProps {
    onOpenContactModal?: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y,
                    opacity
                }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 lg:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column - Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 mb-6 bg-accent/10 border border-accent/20 px-3 py-1 rounded text-accent text-sm font-semibold tracking-wide uppercase"
                        >
                            <Shield className="w-4 h-4" />
                            <span>Advogado Especialista</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                            Minha missão é <span className="text-gradient">proteger o seu futuro</span>
                        </h1>

                        <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">
                            Atuação estratégica e personalizada em causas complexas.
                            Estou pronto para defender seus interesses com rigor técnico, agilidade e total transparência.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Atendimento direto e sem intermediários",
                                "Estratégias construídas para o seu caso",
                                "Sigilo absoluto e segurança jurídica"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => document.getElementById("agendar-consulta")?.scrollIntoView({ behavior: "smooth" })}
                                className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer"
                            >
                                <span>Solicitar Análise de Caso</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex items-center text-accent">
                                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                            </div>
                            <span className="text-sm text-muted">Mais de <strong>500+</strong> casos resolvidos</span>
                        </div>
                    </motion.div>

                    {/* Right Column - Lawyer Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
                    >
                        {/* Glow Behind Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md h-[500px] overflow-hidden">
                            <Image
                                src="/lawyer.png"
                                alt="Retrato do Advogado Especialista"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gradient Overlay for better blending at the bottom */}
                            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-white/10 shadow-xl flex items-center space-x-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center hidden sm:flex">
                                <Shield className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Alta Complexidade</p>
                                <p className="text-xs text-muted">Foco em Resultados</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
