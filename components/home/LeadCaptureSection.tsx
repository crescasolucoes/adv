"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generateWhatsAppLink } from "@/lib/utils";

const leadFormSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    phone: z.string().min(10, "Telefone inválido"),
    area: z.string().min(1, "Selecione uma área"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadCaptureSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadFormSchema),
    });

    const onSubmit = (data: LeadFormData) => {
        const message = `Olá! Me chamo *${data.name}*.\nGostaria de atendimento sobre *${data.area}*.\nMeu telefone é: ${data.phone}`;
        window.open(generateWhatsAppLink(message), "_blank");
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="agendar-consulta">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                            Precisando de <span className="text-accent">orientação jurídica</span> especializada?
                        </h2>
                        <p className="text-muted text-lg mb-8">
                            Me explique o seu caso. Realizo uma primeira análise sem compromisso
                            para entendermos a viabilidade e as melhores estratégias judiciais ou extrajudiciais
                            para o seu problema.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Sigilo absoluto das informações",
                                "Retorno rápido via WhatsApp",
                                "Estratégia personalizada",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-foreground/80">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                        <CheckCircleIcon className="w-4 h-4 text-accent" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full mx-auto max-w-md bg-[#161920] border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden group"
                    >
                        {/* Form Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors duration-500"></div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                                Comece sua Análise Agora
                            </h3>
                            <p className="text-muted text-sm">
                                Preencha os campos para iniciarmos o seu atendimento.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
                                    Nome Completo
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Ex: João Silva"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1.5">
                                    WhatsApp / Telefone
                                </label>
                                <input
                                    {...register("phone")}
                                    type="tel"
                                    placeholder="(11) 99999-9999"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                                />
                                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="area" className="block text-sm font-medium text-foreground/80 mb-1.5">
                                    Área de Interesse
                                </label>
                                <div className="relative">
                                    <select
                                        {...register("area")}
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground appearance-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all cursor-pointer"
                                    >
                                        <option value="">Selecione a área...</option>
                                        <option value="Direito Civil">Direito Civil</option>
                                        <option value="Direito Trabalhista">Direito Trabalhista</option>
                                        <option value="Direito Empresarial">Direito Empresarial</option>
                                        <option value="Direito de Família">Direito de Família</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                        ⌄
                                    </div>
                                </div>
                                {errors.area && <span className="text-red-500 text-xs mt-1">{errors.area.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group/btn mt-2 cursor-pointer"
                            >
                                <span>Solicitar Análise</span>
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-muted mt-4 flex items-center justify-center gap-1">
                                <Shield className="w-3 h-3" />
                                Seus dados estão protegidos e seguros.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}
