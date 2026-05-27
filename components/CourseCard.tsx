"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

type CourseCardProps = {
  title: string;
};

export default function CourseCard({ title }: CourseCardProps) {
  return (
    <article>
      <motion.div 
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        className="
          group
          relative
          flex
          min-h-[240px]
          flex-col
          justify-between
          overflow-hidden
          rounded-[28px]
          border
          border-white/5
          bg-[linear-gradient(145deg,#09090b,rgba(9,9,11,0.96))]
          p-5
          shadow-[0_0_50px_rgba(59,130,246,0.04)]
          will-change-transform
          transform-gpu
        "
      >
        {/* Ambient Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_38%)]
          "
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          
          {/* Top */}
          <div>

            <div className="flex items-start justify-between">
              
              {/* Icon */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                <BookOpen className="h-5 w-5 text-blue-300" />
              </div>

              {/* Action */}
              <button
                aria-label="Open course"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  text-zinc-500
                  transition-all
                  duration-200
                  hover:text-white
                  hover:bg-white/[0.06]
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Text */}
            <div className="mt-8">
              
              <h3
                className="
                  text-[26px]
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm
                  leading-6
                  text-zinc-400
                "
              >
                Continue your current module and monitor learning progress.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8">
            
            <div className="mb-3 flex items-center justify-between">
              
              <span className="text-sm text-zinc-500">
                Progress
              </span>

              <span className="text-sm font-semibold text-blue-300">
                72%
              </span>
            </div>

            {/* Progress Track */}
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
              
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "72%",
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="
                  relative
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-300
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-white/20
                  "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}