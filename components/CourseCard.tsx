"use client";

import { motion } from "framer-motion";

import {
  BookOpen,
  ArrowUpRight,
  Brain,
  Sparkles,
  Database,
  Code2,
} from "lucide-react";

type CourseCardProps = {
  title: string;
  progress: number;
  iconName: string;
};

const icons = {
  BookOpen,
  Brain,
  Sparkles,
  Database,
  Code2,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon =
    icons[iconName as keyof typeof icons] || BookOpen;

  return (
    <motion.article
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/5
        bg-[linear-gradient(145deg,#09090b,rgba(9,9,11,0.97))]
        p-4
        md:p-5
        min-h-[160px]
        
        md:min-h-[180px]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_36%)]
        "
      />

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
                bg-white/3
                backdrop-blur-xl
              "
            >
              <Icon className="h-5 w-5 text-blue-300" />
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
                bg-white/3
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

          {/* Content */}
          <div className="mt-6">

            <h3
              className="
                text-[20px]
                sm:text-[24px]
                lg:text-[28px]
                font-semibold
                leading-tight
                tracking-tight
                text-white
                line-clamp-2
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-3
                max-w-[280px]
                text-[13px]
                leading-6
                text-zinc-400
              "
            >
              Continue your current module and monitor learning progress.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-[13px] text-zinc-500">
              Progress
            </span>

            <span
              className="
                text-[13px]
                font-semibold
                text-blue-300
              "
            >
              {progress}%
            </span>
          </div>

          {/* Progress */}
          <div
            className="
              h-1.5
              overflow-hidden
              rounded-full
              bg-white/5
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-blue-300
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}