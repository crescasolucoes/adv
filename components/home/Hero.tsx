"use client";

import { motion, } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, MapPin } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
    onOpenContactModal?: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section id="sobre" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-transparent"></div>
            </div>

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
                                <span>{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state}</span>
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
                                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
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
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2 relative w-full lg:pl-10 transform-gpu"
                    >
                        {/* Decorative Glow Elements - Optimized */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse-slow transform-gpu"></div>

                        {/* Premium Abstract Shapes Behind Image */}
                        <div className="absolute -inset-6 bg-linear-to-tr from-accent/25 to-transparent rounded-[3rem] rotate-6 blur-md -z-10 hidden lg:block opacity-40 transform-gpu"></div>
                        <div className="absolute -inset-2 bg-linear-to-bl from-accent/15 to-transparent rounded-[2.5rem] -rotate-3 blur-sm -z-10 hidden lg:block transform-gpu"></div>

                        <div className="relative w-full max-w-[520px] h-[550px] lg:h-[720px] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] group bg-background/50 transform-gpu transition-all duration-700 hover:shadow-accent/20">
                            <Image
                                src="/images/hero.jpeg"
                                alt="Retrato do Advogado Especialista"
                                fill
                                quality={90}
                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />

                            {/* Premium Overlays */}
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 rounded-[2.5rem] lg:rounded-[3.5rem] ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute bottom-10 -left-6 lg:bottom-20 lg:-left-8 glass p-5 lg:p-6 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-4 backdrop-blur-lg bg-background/40 z-20 transform-gpu"
                        >
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent/30 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                                <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                            </div>
                            <div>
                                <p className="text-base lg:text-lg font-bold text-foreground tracking-tight">Alta Complexidade</p>
                                <p className="text-xs lg:text-sm text-muted/90 font-medium">Foco em Resultados</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
