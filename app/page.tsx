import { createSupabaseClient } from "@/lib/supabase/server";

import DashboardContent from "@/components/DashboardContent";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {
  const supabase = createSupabaseClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          px-4
          sm:px-6
        "
      >
        <div
          className="
            w-full
            max-w-sm
            rounded-2xl
            border
            border-red-500/10
            bg-red-500/[0.04]
            px-5
            py-5
            text-center
            sm:px-6
          "
        >
          <p
            className="
              text-sm
              font-medium
              text-red-300
            "
          >
            Failed to load dashboard data.
          </p>

          <p
            className="
              mt-2
              text-[13px]
              leading-6
              text-zinc-500
            "
          >
            Please try again later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <DashboardContent
      courses={(courses ?? []) as Course[]}
    />
  );
}