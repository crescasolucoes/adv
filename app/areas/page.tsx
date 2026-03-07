"use client";

import { motion } from "framer-motion";
import { Briefcase, Scale, Users, Calculator, Home, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, any> = {
    Briefcase,
    Scale,
    Users,
    Calculator,
    Home,
    Heart,
};

const areaDetails: Record<string, { services: string[]; cases: string[] }> = {
    empresarial: {
        services: ["Contratos empresariais", "Direito societário", "Compliance", "Fusões e aquisições"],
        cases: ["Constituição de empresas", "Revisão de contratos", "Resolução de conflitos societários"],
    },
    civil: {
        services: ["Contratos em geral", "Responsabilidade civil", "Direito do consumidor", "Indenizações"],
        cases: ["Ações de indenização", "Revisão contratual", "Defesa do consumidor"],
    },
    trabalhista: {
        services: ["Ações trabalhistas", "Consultoria preventiva", "Rescisões", "Acordos"],
        cases: ["Defesa em reclamações trabalhistas", "Assessoria em demissões", "Negociações coletivas"],
    },
    tributario: {
        services: ["Planejamento tributário", "Recuperação de créditos", "Defesas fiscais", "Consultoria"],
        cases: ["Redução de carga tributária", "Contestação de autos de infração", "Parcelamentos fiscais"],
    },
    imobiliario: {
        services: ["Compra e venda", "Locação", "Regularização", "Usucapião"],
        cases: ["Contratos de compra e venda", "Ações de despejo", "Regularização de imóveis"],
    },
    familia: {
        services: ["Divórcio", "Inventário", "Testamento", "Planejamento sucessório"],
        cases: ["Divórcios consensuais e litigiosos", "Partilha de bens", "Sucessões"],
    },
};

export default function AreasPage() {
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
                            Áreas de <span className="text-gradient">Atuação</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Soluções jurídicas completas e especializadas para proteger seus direitos
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas Detailed */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">
                    {PRACTICE_AREAS.map((area, index) => {
                        const Icon = iconMap[area.icon];
                        const details = areaDetails[area.id];

                        return (
                            <motion.div
                                key={area.id}
                                id={area.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 sm:p-12 rounded-3xl scroll-mt-32"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Header */}
                                    <div className="lg:col-span-3">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl flex-shrink-0">
                                                <Icon className="w-8 h-8 text-accent" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                                                    {area.title}
                                                </h2>
                                                <p className="text-muted leading-relaxed">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Services */}
                                    <div>
                                        <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                                            Serviços Incluídos
                                        </h3>
                                        <ul className="space-y-2">
                                            {details.services.map((service, i) => (
                                                <li key={i} className="flex items-start space-x-2 text-muted text-sm">
                                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Typical Cases */}
                                    <div>
                                        <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                                            Casos Típicos
                                        </h3>
                                        <ul className="space-y-2">
                                            {details.cases.map((case_, i) => (
                                                <li key={i} className="flex items-start space-x-2 text-muted text-sm">
                                                    <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                    <span>{case_}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center">
                                        <Link
                                            href="/contato"
                                            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 cursor-pointer group"
                                        >
                                            <span>Agendar Consulta</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
