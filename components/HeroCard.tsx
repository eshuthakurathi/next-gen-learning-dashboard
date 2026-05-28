"use client";

import { motion } from "framer-motion";
import { GraduationCap, Flame } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/5
        bg-[linear-gradient(145deg,#09090b,rgba(9,9,11,0.96))]
        p-5
        md:p-6
        lg:p-7
        min-h-[220px]
        md:min-h-[260px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%)]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          gap-6
        "
      >
        {/* Top */}
        <div className="flex items-start justify-between gap-4">
          
          <div className="max-w-[560px]">
            
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Student Dashboard
            </p>

            <h1
              className="
                mt-4
                max-w-[760px]
                text-[42px]
                font-semibold
                leading-[1]
                sm:leading-[0.95]
                tracking-[-0.05em]
                text-white
                sm:text-[56px]
                lg:text-[56px]
                xl:text-[50px]
              "
            >
              Welcome back, Learner
            </h1>

            <p
              className="
                mt-5
                max-w-[540px]
                text-[15px]
                leading-7
                text-zinc-400
              "
            >
              Continue your learning journey, monitor course activity,
              and maintain your consistency streak.
            </p>
          </div>

          {/* Icon */}
          <div
            className="
              hidden
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-white/5
              bg-white/3
              backdrop-blur-xl
              md:flex
            "
          >
            <GraduationCap className="h-6 w-6 text-blue-300" />
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/10
              bg-blue-500/8
              px-5
              py-3
              text-sm
              font-medium
              text-blue-200
            "
          >
            <Flame className="h-4 w-4 text-orange-400" />
            <span>12 Day Learning Streak</span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              text-sm
              text-zinc-500
              md:flex
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Active Today
          </div>
        </div>
      </div>
    </motion.div>
  );
}