"use client";

import { motion, Variants } from "framer-motion";

import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";

export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function DashboardContent({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen w-full">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 overflow-x-hidden">

          <section
            id="dashboard"
            className="
              px-4
              pt-4
              pb-20
              md:px-5
              md:py-5
              lg:px-6
              lg:py-6
            "
          >
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="
                grid
                grid-cols-1
                gap-4

                md:grid-cols-2
                lg:grid-cols-12
              "
            >
              {/* Hero */}
              <motion.article
                variants={itemVariants}
                className="
                  md:col-span-2
                  lg:col-span-7
                  2xl:col-span-8
                "
              >
                <HeroCard />
              </motion.article>

              {/* Activity */}
              <motion.article
                id="activity"
                variants={itemVariants}
                className="
                  md:col-span-2
                  lg:col-span-5
                  2xl:col-span-4
                "
              >
                <ActivityCard />
              </motion.article>

              {/* Courses */}
              {courses?.map((course) => (
                <motion.article
                  id="courses"
                  key={course.id}
                  variants={itemVariants}
                  className="
                    md:col-span-1
                    lg:col-span-6
                    2xl:col-span-4
                  "
                >
                  <CourseCard
                    title={course.title}
                    progress={course.progress}
                    iconName={course.icon_name}
                  />
                </motion.article>
              ))}
            </motion.section>
          </section>
        </main>
      </div>
    </main>
  );
}