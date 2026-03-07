"use client";

import { motion } from "framer-motion";
import { Target, Heart, Award, Users } from "lucide-react";
import type { Metadata } from "next";

const values = [
    {
        icon: Target,
        title: "Excelência Técnica",
        description: "Atuação baseada em profundo conhecimento jurídico e constante atualização profissional.",
    },
    {
        icon: Heart,
        title: "Atendimento Humanizado",
        description: "Cada cliente é único e merece atenção personalizada e respeitosa em todas as etapas.",
    },
    {
        icon: Award,
        title: "Ética e Transparência",
        description: "Compromisso absoluto com os princípios éticos da advocacia e clareza em todas as comunicações.",
    },
    {
        icon: Users,
        title: "Trabalho em Equipe",
        description: "Colaboração entre profissionais especializados para oferecer as melhores soluções.",
    },
];

export default function SobrePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 noise">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Sobre <span className="text-gradient">Nossa História</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Mais de 15 anos dedicados à advocacia de excelência, com foco em resultados e relacionamentos duradouros.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Nossa História */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 rounded-3xl"
                    >
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                            Nossa História
                        </h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                O escritório <strong className="text-foreground">Advocacia Especializada</strong> foi fundado com o propósito de oferecer assessoria jurídica de alto padrão, combinando conhecimento técnico aprofundado com atendimento verdadeiramente humanizado.
                            </p>
                            <p>
                                Ao longo de mais de 15 anos de atuação, construímos uma trajetória sólida baseada em três pilares fundamentais: <strong className="text-foreground">excelência técnica</strong>, <strong className="text-foreground">ética profissional</strong> e <strong className="text-foreground">compromisso com resultados</strong>.
                            </p>
                            <p>
                                Nossa equipe é formada por advogados especializados em diversas áreas do direito, permitindo que ofereçamos soluções completas e integradas para nossos clientes, sejam pessoas físicas ou jurídicas.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Nossos Valores */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                            Nossos Valores
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            Princípios que guiam nossa atuação e definem nossa identidade
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="glass glass-hover p-8 rounded-2xl group cursor-pointer"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                            Nossos Diferenciais
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Atendimento Personalizado",
                                description: "Cada caso é tratado de forma única, com estratégias customizadas para suas necessidades específicas.",
                            },
                            {
                                title: "Equipe Multidisciplinar",
                                description: "Profissionais especializados em diferentes áreas do direito trabalhando de forma integrada.",
                            },
                            {
                                title: "Transparência Total",
                                description: "Comunicação clara sobre prazos, custos e expectativas realistas desde o primeiro contato.",
                            },
                            {
                                title: "Acompanhamento Contínuo",
                                description: "Você sempre saberá o status do seu caso através de relatórios periódicos e canais de comunicação diretos.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass glass-hover p-6 rounded-xl cursor-pointer"
                            >
                                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
