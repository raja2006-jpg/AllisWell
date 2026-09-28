"use client";

import Image from "next/image";

const clientsRowOne = [
  {
    name: "Client 01",
    logo: "/clients/client-01.png",
  },
  {
    name: "Client 02",
    logo: "/clients/client-02.png",
  },
  {
    name: "Client 03",
    logo: "/clients/client-03.png",
  },
  {
    name: "Client 04",
    logo: "/clients/client-04.png",
  },
  {
    name: "Client 05",
    logo: "/clients/client-05.png",
  },
  {
    name: "Client 06",
    logo: "/clients/client-06.png",
  },
];

const clientsRowTwo = [
  {
    name: "Client 07",
    logo: "/clients/client-07.png",
  },
  {
    name: "Client 08",
    logo: "/clients/client-08.png",
  },
  {
    name: "Client 09",
    logo: "/clients/client-09.png",
  },
  {
    name: "Client 10",
    logo: "/clients/client-10.png",
  },
  {
    name: "Client 11",
    logo: "/clients/client-11.png",
  },
  {
    name: "Client 12",
    logo: "/clients/client-12.png",
  },
];

function ClientCard({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="group flex h-[108px] w-[190px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#E3262E]/35 bg-white px-8 transition-all duration-300 hover:border-[#E3262E] sm:h-[120px] sm:w-[215px]">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={80}
        className="h-auto max-h-[64px] w-auto max-w-[160px] object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
      />
    </div>
  );
}

function MarqueeTrack({
  clients,
  reverse = false,
}: {
  clients: typeof clientsRowOne;
  reverse?: boolean;
}) {
  const duplicated = [...clients, ...clients];

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max gap-5 ${
          reverse ? "clients-marquee-reverse" : "clients-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {duplicated.map((client, index) => (
          <ClientCard
            key={`${client.name}-${index}`}
            name={client.name}
            logo={client.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E3262E]">
            Our Clients
          </p>

          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-[-0.04em] text-[#171717] sm:text-4xl lg:text-[42px]">
            Brands we work with
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/45">
            Building meaningful digital experiences and creative solutions
            for businesses, creators and growing brands.
          </p>
        </div>
      </div>

      {/* First marquee */}
      <div className="mt-12 sm:mt-14">
        <MarqueeTrack clients={clientsRowOne} />
      </div>

      {/* Second marquee */}
      <div className="mt-5">
        <MarqueeTrack
          clients={clientsRowTwo}
          reverse
        />
      </div>

      <style jsx>{`
        @keyframes clientsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes clientsMarqueeReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .clients-marquee {
          animation: clientsMarquee 28s linear infinite;
        }

        .clients-marquee-reverse {
          animation: clientsMarqueeReverse 32s linear infinite;
        }

        @media (max-width: 640px) {
          .clients-marquee {
            animation-duration: 22s;
          }

          .clients-marquee-reverse {
            animation-duration: 25s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-marquee,
          .clients-marquee-reverse {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}