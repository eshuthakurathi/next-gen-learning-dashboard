"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    href: "#dashboard",
  },
  {
    label: "Courses",
    icon: Layers3,
    href: "#courses",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <aside
        className={`
          sticky
          top-0
          hidden
          h-screen
          shrink-0
          border-r
          border-white/5
          bg-black/70
          backdrop-blur-2xl
          transition-all
          duration-300
          md:flex
          md:flex-col
          ${isOpen ? "w-52" : "w-[67px]"}
        `}
      >
        {/* Top */}
        <div className="flex flex-col gap-4 p-3">

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
              text-zinc-400
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
                  onClick={() => {
                    setActive(item.label);

                    const section = document.querySelector(
                      item.href
                    );

                    section?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="
                    relative
                    flex
                    h-11
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    px-3
                    text-[13px]
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

        {/* Bottom */}
        <div className="mt-auto p-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-white/5
              bg-white/3
            "
          >
            <Image
              src="/StudentIcon.jpg"
              alt="Student Icon"
              width={40}
              height={40}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          z-50
          flex
          h-16
          w-full
          items-center
          justify-around
          border-t
          border-white/10
          bg-black/80
          backdrop-blur-xl
          md:hidden
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => {
                setActive(item.label);

                const section = document.querySelector(
                  item.href
                );

                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="
                flex
                flex-col
                items-center
                gap-1
                text-xs
                transition-colors
              "
            >
              <Icon
                className={`
                  h-5
                  w-5
                  ${
                    isActive
                      ? "text-blue-300"
                      : "text-zinc-500"
                  }
                `}
              />

              <span
                className={
                  isActive
                    ? "text-blue-300"
                    : "text-zinc-500"
                }
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}