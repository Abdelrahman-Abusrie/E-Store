import { motion as Motion } from "framer-motion";

/**
 * FadeIn Component
 * 
 * Provides a fade-in animation for its children as they enter the viewport.
 * Supports different directions and delays.
 */
export default function FadeIn({ children, delay = 0, direction = "up" }) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: { opacity: 1, y: 0, x: 0 },
    };

    return (
        <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            variants={variants}
            exit="hidden"
        >
            {children}
        </Motion.div>
    );
}

