"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
    message: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
    onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Generate WhatsApp message
        const message = `
*Nova Solicitação de Contato*

*Nome:* ${data.name}
*E-mail:* ${data.email}
*Telefone:* ${data.phone}
*Assunto:* ${data.subject}

*Mensagem:*
${data.message}
    `.trim();

        // Open WhatsApp
        window.open(generateWhatsAppLink(message), "_blank");

        setIsSubmitting(false);
        reset();

        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome Completo *
                </label>
                <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        E-mail *
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Telefone *
                    </label>
                    <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="(11) 99999-9999"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            {/* Subject */}
            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Assunto *
                </label>
                <input
                    {...register("subject")}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Qual o motivo do contato?"
                />
                {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem *
                </label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua situação com o máximo de detalhes possível..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                    </>
                )}
            </button>

            <p className="text-xs text-muted/70 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
            </p>
        </form>
    );
}
