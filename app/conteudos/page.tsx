"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Search } from "lucide-react";

const articles = [
    {
        title: "Reforma Trabalhista: O que mudou para empresas e funcionários",
        excerpt: "Entenda as principais alterações trazidas pela reforma trabalhista e como elas impactam o dia a dia das relações de trabalho.",
        category: "Direito Trabalhista",
        date: "15 Jan 2026",
        slug: "reforma-trabalhista-mudancas",
        featured: true,
    },
    {
        title: "Planejamento Sucessório: Proteja seu patrimônio familiar",
        excerpt: "Descubra como o planejamento sucessório pode evitar conflitos familiares e garantir a transmissão eficiente do seu patrimônio.",
        category: "Família e Sucessões",
        date: "08 Jan 2026",
        slug: "planejamento-sucessorio",
        featured: true,
    },
    {
        title: "LGPD para Empresas: Guia Completo de Adequação",
        excerpt: "Tudo que sua empresa precisa saber para estar em conformidade com a Lei Geral de Proteção de Dados.",
        category: "Direito Empresarial",
        date: "02 Jan 2026",
        slug: "lgpd-empresas-guia",
        featured: false,
    },
    {
        title: "Direitos do Consumidor: Como reclamar de forma eficaz",
        excerpt: "Conheça seus direitos como consumidor e saiba os passos corretos para resolver problemas com produtos e serviços.",
        category: "Direito do Consumidor",
        date: "28 Dez 2025",
        slug: "direitos-consumidor",
        featured: false,
    },
    {
        title: "Recuperação de Créditos Tributários: Oportunidades para sua empresa",
        excerpt: "Saiba como identificar e recuperar valores pagos indevidamente ao fisco nos últimos 5 anos.",
        category: "Direito Tributário",
        date: "20 Dez 2025",
        slug: "recuperacao-creditos-tributarios",
        featured: false,
    },
    {
        title: "Usucapião: Como regularizar a posse do seu imóvel",
        excerpt: "Entenda o processo de usucapião e os requisitos necessários para transformar a posse em propriedade.",
        category: "Direito Imobiliário",
        date: "15 Dez 2025",
        slug: "usucapiao-regularizacao",
        featured: false,
    },
];

export default function ConteudosPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 noise">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Conteúdos <span className="text-gradient">Jurídicos</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-8">
                            Artigos e insights para mantê-lo informado sobre seus direitos
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <input
                                    type="text"
                                    placeholder="Buscar artigos..."
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-serif font-bold text-foreground mb-12"
                    >
                        Artigos em Destaque
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {articles.filter(a => a.featured).map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/conteudos/${article.slug}`}>
                                    <div className="glass glass-hover p-8 rounded-2xl h-full group cursor-pointer">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                                                {article.category}
                                            </span>
                                            <span className="flex items-center space-x-2 text-muted text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{article.date}</span>
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-muted leading-relaxed mb-6">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center space-x-2 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                                            <span>Ler mais</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* All Articles */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-serif font-bold text-foreground mb-12"
                    >
                        Todos os Artigos
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.filter(a => !a.featured).map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/conteudos/${article.slug}`}>
                                    <div className="glass glass-hover p-6 rounded-xl h-full group cursor-pointer">
                                        <div className="flex flex-col space-y-2 mb-3">
                                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full w-fit">
                                                {article.category}
                                            </span>
                                            <span className="flex items-center space-x-2 text-muted text-xs">
                                                <Calendar className="w-3 h-3" />
                                                <span>{article.date}</span>
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-muted text-sm leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
