"use client";

import DriftWall, {
  type DriftWallItem,
} from "@/components/ui/DriftWall";

const contentItems: DriftWallItem[] = [
  {
    image:
      "https://picsum.photos/id/1015/600/400",
    title: "Travel Vlog",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1025/600/400",
    title: "Entertainment",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1039/600/400",
    title: "Business Promotion",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1043/600/400",
    title: "Food Promotion",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1044/600/400",
    title: "Brand Promotion",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1050/600/400",
    title: "Lifestyle",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1062/600/400",
    title: "Local Business",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1069/600/400",
    title: "Creative Content",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1074/600/400",
    title: "Cinematic Reel",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1080/600/400",
    title: "Restaurant Promotion",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/1084/600/400",
    title: "Product Promotion",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/110/600/400",
    title: "Vlog Stories",
    href:
      "https://www.youtube.com/@alliswellmsvlogsz",
  },

  {
    image:
      "https://picsum.photos/id/133/600/400",
    title: "Digital Marketing",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/164/600/400",
    title: "Social Media Content",
    href:
      "https://www.instagram.com/alliswellmsvlogsz/",
  },

  {
    image:
      "https://picsum.photos/id/106/600/400",
    title: "All Is Well",
    href:
      "https://www.youtube.com/@alliswellmsvlogsz",
  },
];

export default function ReelsShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#080808]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#E3262E]
            "
          >
            Our Content
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Content that{" "}
            <span className="text-[#E3262E]">
              connects.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/55
              sm:text-base
            "
          >
            From business promotions to
            cinematic reels, travel stories
            and entertainment — we create
            content designed to capture
            attention and build real
            audience connection.
          </p>
        </div>

        {/* =====================================================
            DRIFT WALL CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            h-[560px]
            w-full
            overflow-hidden
            
            bg-[#060606]
            sm:h-[620px]
            md:h-[680px]
            lg:h-[720px]
          "
        >
          <DriftWall
            items={contentItems}
            columns={5}
            tileWidth={250}
            tileHeight={132}
            gap={18}
            radius={10}
            tilt={19}
            turn={-14}
            roll={0}
            perspective={1200}
            depth={120}
            speed={32}
            direction="up"
            variance={0.45}
            parallax={0.6}
            pauseOnHover={false}
            lift={64}
            fade={0.6}
            dim={0.72}
            grayscale={false}
            overlayColor="#050505"
          />

          {/* =================================================
              TOP FADE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-40
              h-32
              bg-gradient-to-b
              from-[#080808]
              via-[#080808]/70
              to-transparent
            "
          />

          {/* =================================================
              BOTTOM FADE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-40
              h-40
              bg-gradient-to-t
              from-[#080808]
              via-[#080808]/75
              to-transparent
            "
          />

          {/* =================================================
              CENTER CONTENT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-50
              flex
              items-center
              justify-center
            "
          >
            <div className="px-6 text-center">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]
                  text-white/40
                "
              >
                AllIsWellMSVlogsz
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                Stories worth{" "}
                <span className="text-[#E3262E]">
                  watching.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/35
                "
              >
                Move your cursor through
                the wall
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}