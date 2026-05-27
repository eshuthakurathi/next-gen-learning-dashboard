"use client";

import { motion } from "framer-motion";

import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      <article className="flex h-screen">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          
          <section className="p-4 md:p-6 lg:p-8">

            {/* Bento Grid */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-4
                auto-rows-[minmax(260px,auto)]
              "
            >
              {/* Hero */}
              <motion.article variants={itemVariants} className="xl:col-span-2">
                <HeroCard />
              </motion.article>

              {/* Activity */}
              <motion.article variants={itemVariants}>
                <ActivityCard />
              </motion.article>

              {/* Courses */}
              <motion.article variants={itemVariants}>
                <CourseCard title="Advanced React Patterns" />
              </motion.article>

              <motion.article variants={itemVariants}>
                <CourseCard title="Machine Learning Basics" />
              </motion.article>

              <motion.article variants={itemVariants}>
                <CourseCard title="Next.js App Router" />
              </motion.article>
            </motion.section>

          </section>
        </main>
      </article>
    </main>
  );
}