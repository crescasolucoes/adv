"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export default function FinalCTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-12 sm:p-16 text-center border border-accent/30"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 noise opacity-30"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6"
                        >
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-sm text-accent font-semibold">Atendimento Imediato</span>
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                            Precisa de orientação agora?
                            <br />
                            <span className="text-accent">Fale com um advogado.</span>
                        </h2>

                        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
                            Estou pronto para atender você e esclarecer suas dúvidas.
                            Entre em contato e receba uma análise inicial do seu caso.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={generateWhatsAppLink("Olá! Preciso de orientação jurídica urgente.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 cursor-pointer"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Falar Agora no WhatsApp</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <p className="text-sm text-muted/70 mt-8">
                            Resposta em até 1 hora durante horário comercial
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
