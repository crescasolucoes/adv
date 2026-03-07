"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Home, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export default function ObrigadoPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="glass p-12 rounded-3xl text-center"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8"
                    >
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4"
                    >
                        Mensagem Enviada!
                    </motion.h1>

                    {/* Message */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-muted mb-8 leading-relaxed"
                    >
                        Obrigado por entrar em contato com <strong className="text-foreground">Advocacia Especializada</strong>.
                        Recebemos sua mensagem e retornaremos em breve.
                    </motion.p>

                    {/* Info Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8"
                    >
                        <h2 className="text-lg font-serif font-semibold text-foreground mb-2">
                            O que acontece agora?
                        </h2>
                        <ul className="text-muted text-sm space-y-2 text-left">
                            <li className="flex items-start space-x-2">
                                <span className="text-accent mt-1">•</span>
                                <span>Nossa equipe analisará sua solicitação com atenção</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-accent mt-1">•</span>
                                <span>Entraremos em contato em até 24 horas úteis</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-accent mt-1">•</span>
                                <span>Você receberá uma resposta por e-mail ou WhatsApp</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
                        >
                            <Home className="w-5 h-5" />
                            <span>Voltar ao Início</span>
                        </Link>

                        <a
                            href={generateWhatsAppLink("Olá! Acabei de enviar uma mensagem pelo site.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 glass glass-hover px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5 text-accent" />
                            <span className="text-foreground">Falar no WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xs text-muted/70 mt-8"
                    >
                        Precisa de atendimento urgente? Entre em contato diretamente pelo WhatsApp.
                    </motion.p>
                </motion.div>
            </div>
        </main>
    );
}
