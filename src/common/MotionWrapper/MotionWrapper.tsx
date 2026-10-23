"use client";

import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

export function SlideInSection({
  children,
  direction = "left",
  className = "",
  transition = { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  sctionId,
}: {
  children: ReactNode;
  direction: "left" | "right";
  className: string;
  transition?: Transition<Record<string, number | number[]>>;
  sctionId?: string;
}) {
  const xOffset = direction === "left" ? -80 : 80;

  return (
    <motion.section
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
      className={className}
      id={sctionId}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.2,
  staggerBy = 0.15,
  triggerMargin = "-50px",
  sctionId,
}: {
  children: ReactNode;
  delayChildren?: number;
  className?: string;
  staggerBy?: number;
  triggerMargin?: string;
  sctionId?: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerBy,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: triggerMargin }}
      className={className}
      id={sctionId}
    >
      {children}
    </motion.div>
  );
}

export function DropInItem({
  children,
  className = "",
  transition = {
    duration: 0.5,
    ease: "easeOut",
  },
  direction = "up",
  distance = 30,
}: {
  children: ReactNode;
  className: string;
  transition?: Transition<Record<string, number | number[]>>;
  direction?: "down" | "up";
  distance?: number;
}) {
  const yOffset = direction === "down" ? -distance : distance;

  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: transition,
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
