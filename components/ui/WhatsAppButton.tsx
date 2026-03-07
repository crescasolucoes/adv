"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/utils";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        window.open(
            generateWhatsAppLink("Olá! Vim através do site e gostaria de mais informações."),
            "_blank"
        );
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <div className="relative">
                        {/* Tooltip */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-background px-4 py-2 rounded-lg shadow-xl whitespace-nowrap"
                                >
                                    <p className="text-sm font-semibold">Precisa de ajuda?</p>
                                    <p className="text-xs text-background/70">Fale conosco no WhatsApp</p>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Button */}
                        <button
                            onClick={handleClick}
                            onMouseEnter={() => setIsExpanded(true)}
                            onMouseLeave={() => setIsExpanded(false)}
                            className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
                            aria-label="Falar no WhatsApp"
                        >
                            <MessageCircle className="w-6 h-6" />

                            {/* Pulse animation */}
                            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
