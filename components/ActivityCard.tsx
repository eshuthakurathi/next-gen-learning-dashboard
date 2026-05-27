"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  const activityData = [28, 52, 74, 44, 88, 64, 48];

  return (
    <article className="xl:col-span-1">
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
          flex
          min-h-[220px]
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
            bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_32%)]
          "
        />

        <div className="relative z-10 flex h-full flex-col justify-between">

          {/* Header */}
          <div>
            <div className="flex items-start justify-between">
              
              <div>
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-zinc-500
                  "
                >
                  Analytics
                </p>

                <h3
                  className="
                    mt-3
                    text-[40px]
                    font-semibold
                    leading-none
                    tracking-tight
                    text-white
                  "
                >
                  Activity
                </h3>
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-blue-500/10
                  bg-blue-500/[0.06]
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  text-blue-200
                "
              >
                Weekly
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-zinc-400
              "
            >
              Your learning consistency and engagement performance over the past week.
            </p>
          </div>

          {/* Chart */}
          <div className="mt-6">

            <div className="flex h-24 items-end gap-2">
              {activityData.map((height, index) => (
                <motion.div
                  key={index}
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: `${height}%`,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 110,
                  }}
                  className="
                    relative
                    flex-1
                    overflow-hidden
                    rounded-t-[16px]
                    bg-gradient-to-t
                    from-blue-700
                    via-blue-600
                    to-blue-400/70
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(to_top,transparent,rgba(255,255,255,0.12))]
                    "
                  />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
              
              <span className="text-sm text-zinc-500">
                7 day overview
              </span>

              <span
                className="
                  text-sm
                  font-semibold
                  text-blue-300
                "
              >
                +18% growth
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}