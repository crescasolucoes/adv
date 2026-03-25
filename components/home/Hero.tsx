"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, MapPin } from "lucide-react";
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
                        <div className="flex flex-wrap items-center gap-3 mb-6">


                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-muted font-medium text-sm"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>Mossoró, RN</span>
                            </motion.div>
                        </div>

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
                    {/* Right Column - Lawyer Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2 relative w-full"
                    >
                        {/* Decorative Glow Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[120px] -z-10"></div>

                        {/* Premium Abstract Shape Behind Image */}
                        <div className="absolute -inset-4 bg-linear-to-tr from-accent/20 to-transparent rounded-[2.5rem] rotate-3 blur-sm -z-10 hidden lg:block"></div>

                        <div className="relative w-full max-w-[420px] h-[500px] lg:h-[650px] rounded-4xl overflow-hidden border border-white/10 shadow-2xl group bg-background/50">
                            <Image
                                src="/images/hero.jpg"
                                alt="Retrato do Advogado Especialista"
                                fill
                                quality={100}
                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />

                            {/* Premium Overlays */}
                            {/* 1. Dramatic bottom gradient for blending */}
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* 2. Sleek inner glow/border */}
                            <div className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute bottom-6 -left-4 lg:bottom-12 lg:-left-12 glass p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center space-x-4 backdrop-blur-md bg-background/60"
                        >
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm lg:text-base font-bold text-foreground">Alta Complexidade</p>
                                <p className="text-xs lg:text-sm text-muted">Foco em Resultados</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
