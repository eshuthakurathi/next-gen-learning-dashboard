export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section
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
        <section
          className="
            grid
            grid-cols-1
            gap-4

            md:grid-cols-2
            lg:grid-cols-12
          "
        >
          {/* Hero Skeleton */}
          <div
            className="
              lg:col-span-7
              2xl:col-span-8

              min-h-[260px]

              animate-pulse
              rounded-[32px]
              border
              border-white/5
              bg-white/3
            "
          />

          {/* Activity Skeleton */}
          <div
            className="
              lg:col-span-5
              2xl:col-span-4

              min-h-[180px]

              animate-pulse
              rounded-[24px]
              border
              border-white/5
              bg-white/3
            "
          />

          {/* Course Skeletons */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                md:col-span-1
                lg:col-span-6
                2xl:col-span-4

                min-h-[180px]
                md:min-h-[210px]

                animate-pulse
                rounded-[24px]
                border
                border-white/5
                bg-white/3
              "
            />
          ))}
        </section>
      </section>
    </main>
  );
}