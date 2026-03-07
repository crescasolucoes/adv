"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        O Que Meus Clientes Dizem
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Depoimentos reais de quem confiou em meu trabalho
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="glass glass-hover p-8 rounded-2xl relative group cursor-pointer"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-16 h-16 text-accent" />
                            </div>

                            {/* Stars */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                    <span className="text-accent font-display font-bold text-lg">
                                        {testimonial.initials}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-foreground font-semibold">
                                        {testimonial.initials}
                                    </div>
                                    <div className="text-muted text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
