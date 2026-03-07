"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
    {
        name: "Dr. Ricardo Silva",
        role: "Sócio Fundador",
        oab: "OAB/SP 123.456",
        specialties: ["Direito Empresarial", "Direito Tributário"],
        bio: "Mais de 20 anos de experiência em consultoria jurídica empresarial. Especialista em planejamento tributário e reestruturações societárias.",
        email: "ricardo@advocacia.com.br",
        linkedin: "#",
    },
    {
        name: "Dra. Mariana Santos",
        role: "Sócia Fundadora",
        oab: "OAB/SP 789.012",
        specialties: ["Direito Civil", "Família e Sucessões"],
        bio: "Advogada com vasta experiência em direito de família e sucessões. Reconhecida pela abordagem humanizada e soluções consensuais.",
        email: "mariana@advocacia.com.br",
        linkedin: "#",
    },
    {
        name: "Dr. Felipe Santos",
        role: "Advogado Associado",
        oab: "OAB/SP 345.678",
        specialties: ["Direito Trabalhista", "Direito Civil"],
        bio: "Especialista em direito trabalhista com foco em consultoria preventiva e defesa em ações judiciais.",
        email: "felipe@advocacia.com.br",
        linkedin: "#",
    },
    {
        name: "Dra. Juliana Costa",
        role: "Advogada Associada",
        oab: "OAB/SP 901.234",
        specialties: ["Direito Imobiliário", "Direito do Consumidor"],
        bio: "Atuação destacada em direito imobiliário, com expertise em contratos e regularização de imóveis.",
        email: "juliana@advocacia.com.br",
        linkedin: "#",
    },
];

export default function EquipePage() {
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
                            Nossa <span className="text-gradient">Equipe</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Profissionais experientes e comprometidos com a excelência jurídica
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="glass glass-hover p-8 rounded-2xl group cursor-pointer"
                            >
                                {/* Photo Placeholder */}
                                <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mb-6 flex items-center justify-center mx-auto">
                                    <span className="text-4xl font-serif font-bold text-accent">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-semibold mb-2">{member.role}</p>
                                    <p className="text-sm text-muted">{member.oab}</p>
                                </div>

                                {/* Specialties */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {member.specialties.map((specialty, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>

                                {/* Bio */}
                                <p className="text-muted text-sm leading-relaxed text-center mb-6">
                                    {member.bio}
                                </p>

                                {/* Contact */}
                                <div className="flex items-center justify-center space-x-4 pt-6 border-t border-white/10">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group/icon"
                                        aria-label="E-mail"
                                    >
                                        <Mail className="w-5 h-5 text-muted group-hover/icon:text-accent transition-colors" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group/icon"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-muted group-hover/icon:text-accent transition-colors" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
