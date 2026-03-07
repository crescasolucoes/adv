"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/areas" },
    { name: "Equipe", href: "/equipe" },
    // { name: "Conteúdos", href: "/conteudos" },
    // { name: "Contato", href: "/contato" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-accent/20"></div>

            <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group relative">
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-accent transform origin-left group-hover:scale-y-125 transition-transform duration-300"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">
                                Advocacia
                            </span>
                            <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-semibold">
                                Advocacia
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-full h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href={generateWhatsAppLink("Olá! Gostaria de agendar uma consulta.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center space-x-2 bg-accent hover:bg-foreground text-background px-6 py-3 font-semibold text-sm transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            <MessageCircle className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Falar no WhatsApp</span>
                            <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-foreground hover:text-accent transition-colors cursor-pointer relative group"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 transition-colors"></div>
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 relative z-10" />
                        ) : (
                            <Menu className="w-6 h-6 relative z-10" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden border-t border-accent/20"
                        >
                            <div className="py-4 space-y-1">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-accent/5 transition-all duration-200 cursor-pointer border-l-2 border-transparent hover:border-accent"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navigation.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <a
                                        href={generateWhatsAppLink("Olá! Gostaria de agendar uma consulta.")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-background px-6 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer mx-4"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Falar no WhatsApp</span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
