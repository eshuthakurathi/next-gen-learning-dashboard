"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Layers3,
  Settings,
  PanelLeft,
  PanelLeftClose,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    icon: Layers3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <aside
      className={`
        relative
        flex
        h-screen
        shrink-0
        flex-col
        bg-black/70
        backdrop-blur-2xl
        transition-all
        duration-300
        ${isOpen ? "w-44" : "w-16"}
      `}
    >
      {/* Top */}
      <div className="flex flex-col gap-5 p-2.5">

        {/* Toggle */}
        <button
          aria-label="Toggle Sidebar"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/5
            bg-white/[0.03]
            text-zinc-500
            transition-all
            duration-200
            hover:bg-white/[0.06]
            hover:text-white
          "
        >
          {isOpen ? (
            <PanelLeftClose className="h-4.5 w-4.5" />
          ) : (
            <PanelLeft className="h-4.5 w-4.5" />
          )}
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                aria-label={item.label}
                onClick={() => setActive(item.label)}
                className="
                  relative
                  flex
                  h-11
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  px-3
                  text-sm
                  font-medium
                  text-zinc-500
                  transition-colors
                  hover:text-white
                "
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      border
                      border-blue-500/10
                      bg-blue-500/10
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* Icon */}
                <span className="relative z-10 shrink-0">
                  <Icon
                    className={`
                      h-4.5
                      w-4.5
                      transition-colors
                      ${
                        isActive
                          ? "text-blue-300"
                          : "text-zinc-500"
                      }
                    `}
                  />
                </span>

                {/* Label */}
                {isOpen && (
                  <span className="relative z-10 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Logo */}
      <div className="mt-auto p-2.5">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/5
            bg-white/[0.03]
            text-xs
            font-semibold
            text-zinc-400
          "
        >
          N
        </div>
      </div>
    </aside>
  );
}