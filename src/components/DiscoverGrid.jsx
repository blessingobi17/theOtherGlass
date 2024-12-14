import collections from "/data/collection.json";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DiscoverGrid = () => {
  useEffect(() => {
    gsap.fromTo(
      ".discover-grid",
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
          trigger: ".discover-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-5">
      {collections.map((grid) => (
        <div className={`${grid.id === 11 ? "md:col-span-2 col-span-1" : ""}`}>
          <figure className="relative discover-grid">
            {grid.id === 11 ? (
              <div
                className="w-full h-grid bg-black rounded-xl text-white 
              text-center px-16 flex flex-col justify-center"
              >
                <p className="font-notoSherif md:text-3xl text-xl leading-loose">
                  This story has just begun – new shapes are being crafted, soon
                  to be unveiled.
                </p>
                <p className="underline pt-14">Join our community</p>
              </div>
            ) : (
              <img
                src={grid.image}
                alt=""
                className="h-grid rounded-xl w-full"
              />
            )}
            <div
              className={`${
                grid.id !== 11 && "imgOverlay absolute top-0 w-full h-grid"
              }`}
            ></div>
            <figcaption className="absolute bottom-0 px-6 py-6 text-white">
              <h1 className="text-2xl font-notoSherif">{grid.header}</h1>
              <p className="text-sm pt-2">{grid.body}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </section>
  );
};

export default DiscoverGrid;
