"use client";

import { motion } from "framer-motion";
import { GraduationCap, Flame } from "lucide-react";

export default function HeroCard() {
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
          relative
          flex
          min-h-[250px]
          flex-col
          justify-between
          overflow-hidden
          rounded-[28px]
          border
          border-white/5
          bg-[linear-gradient(145deg,#09090b,rgba(9,9,11,0.96))]
          p-5
          md:p-7
          shadow-[0_0_60px_rgba(59,130,246,0.05)]
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
            bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_32%)]
          "
        />

        {/* Noise Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-soft-light
            bg-[url('/noise.png')]
          "
        />

        <div className="relative z-10 flex items-start justify-between gap-6">
          
          {/* Left */}
          <div className="max-w-[580px]">

            <p
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-zinc-500
              "
            >
              Student Dashboard
            </p>

            <h2
              className="
                mt-4
                text-2xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                md:text-5xl
              "
            >
              Welcome back, Ixxuu
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-zinc-400
                md:text-[15px]
              "
            >
              Continue your learning journey, monitor course activity,
              and maintain your consistency streak.
            </p>
          </div>

          {/* Right Icon */}
          <div
            className="
              hidden
              shrink-0
              md:flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/5
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <GraduationCap className="h-5 w-5 text-blue-300" />
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-10 flex items-center justify-between">
          
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/10
              bg-blue-500/[0.08]
              px-4
              py-2
              text-sm
              font-medium
              text-blue-200
            "
          >
            <Flame className="h-4 w-4 text-orange-400" />

            <span>12 Day Learning Streak</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Active Today
          </div>
        </div>
      </motion.div>
    </article>
  );
}