import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-4">
                            Advocacia
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                            Assessoria jurídica estratégica com foco em segurança e resultado.
                            Atendimento humanizado e técnica jurídica de excelência.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={SITE_CONFIG.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE_CONFIG.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE_CONFIG.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sobre" className="text-muted hover:text-accent transition-colors text-sm cursor-pointer">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/areas" className="text-muted hover:text-accent transition-colors text-sm cursor-pointer">
                                    Áreas de Atuação
                                </Link>
                            </li>
                            <li>
                                <Link href="/equipe" className="text-muted hover:text-accent transition-colors text-sm cursor-pointer">
                                    Nossa Equipe
                                </Link>
                            </li>
                            <li>
                                <Link href="/conteudos" className="text-muted hover:text-accent transition-colors text-sm cursor-pointer">
                                    Conteúdos
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-muted hover:text-accent transition-colors text-sm cursor-pointer">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                            Contato
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-muted">
                                    {SITE_CONFIG.contact.address.street}<br />
                                    {SITE_CONFIG.contact.address.city} - {SITE_CONFIG.contact.address.state}<br />
                                    CEP: {SITE_CONFIG.contact.address.zip}
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-muted hover:text-accent transition-colors cursor-pointer">
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-muted hover:text-accent transition-colors cursor-pointer">
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                            Horário de Atendimento
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start space-x-3 text-sm">
                                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <div className="text-muted">
                                    <p>{SITE_CONFIG.businessHours.weekdays}</p>
                                    <p className="mt-1">{SITE_CONFIG.businessHours.saturday}</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 glass rounded-lg">
                            <p className="text-xs text-muted">
                                <strong className="text-foreground">OAB:</strong><br />
                                {SITE_CONFIG.oab.primary}<br />
                                {SITE_CONFIG.oab.secondary}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted text-center md:text-left">
                            © {currentYear} Advocacia Especializada. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-muted/70 text-center md:text-right max-w-md">
                            As informações contidas neste site não substituem uma consulta jurídica.
                            Cada caso deve ser analisado individualmente por um advogado.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
