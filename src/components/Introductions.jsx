import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Introductions = () => {
  useEffect(() => {
    gsap.fromTo(
      ".acetate",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".acetate",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".titanium",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".titanium",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-16 md:px-8 px-4 lg:py-36 pt-0 pb-28 bg-black">
      <section className="acetate w-full edge rounded-2xl lg:p-10 p-4 flex flex-col justify-between text-white">
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 px-2 py-1 rounded-md text-sm font-medium">
            2025
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded-md text-sm font-medium">
            Acetate
          </button>
        </div>
        <h3 className="text-7xl font-medium font-notoSherif text-center">
          Edge
        </h3>
        <p className="text-center">
          The Edge frame exudes confidence with its premium acetate build.
        </p>
      </section>
      <section className="titanium w-full aviator rounded-2xl lg:p-10 p-4 flex flex-col justify-between text-white mt-10">
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 px-2 py-1 rounded-md text-sm font-medium">
            2025
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded-md text-sm font-medium">
            Titanium
          </button>
        </div>
        <h3 className="text-7xl font-medium font-notoSherif text-center">
          Aviator
        </h3>
        <p className="text-center">
          The Aviator combines timeless style with advanced engineering.
        </p>
      </section>
    </main>
  );
};

export default Introductions;
