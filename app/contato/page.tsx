"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function ContatoPage() {
    const router = useRouter();

    const handleFormSuccess = () => {
        router.push("/obrigado");
    };

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
                            Entre em <span className="text-gradient">Contato</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Estamos prontos para atender você e esclarecer suas dúvidas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                    Informações de Contato
                                </h2>
                                <p className="text-muted leading-relaxed mb-8">
                                    Entre em contato conosco através de qualquer um dos canais abaixo.
                                    Nossa equipe responderá o mais breve possível.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="glass p-6 rounded-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                                            <p className="text-muted text-sm">
                                                {SITE_CONFIG.contact.address.street}<br />
                                                {SITE_CONFIG.contact.address.city} - {SITE_CONFIG.contact.address.state}<br />
                                                CEP: {SITE_CONFIG.contact.address.zip}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                                            <a
                                                href={`tel:${SITE_CONFIG.contact.phone}`}
                                                className="text-muted text-sm hover:text-accent transition-colors cursor-pointer"
                                            >
                                                {SITE_CONFIG.contact.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                                            <a
                                                href={`mailto:${SITE_CONFIG.contact.email}`}
                                                className="text-muted text-sm hover:text-accent transition-colors cursor-pointer"
                                            >
                                                {SITE_CONFIG.contact.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                                            <p className="text-muted text-sm">
                                                {SITE_CONFIG.businessHours.weekdays}<br />
                                                {SITE_CONFIG.businessHours.saturday}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="glass p-4 rounded-xl">
                                <div className="w-full h-64 bg-accent/5 rounded-lg flex items-center justify-center">
                                    <p className="text-muted text-sm">Mapa do escritório</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl"
                        >
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                Envie sua Mensagem
                            </h2>
                            <ContactForm onSuccess={handleFormSuccess} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
