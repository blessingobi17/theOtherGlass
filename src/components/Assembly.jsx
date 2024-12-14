import assemblyVid from "../assets/media/otherglasses-humantouch-cover.webm";
import manufacturerIcon from "../assets/media/icon-manufacture-otherglasses-300x300.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Assembly = () => {
  useEffect(() => {
    gsap.fromTo(
      ".assembly-header",
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
          trigger: ".assembly-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".assembly-video",
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
          trigger: ".assembly-video",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".assembly-text",
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
          trigger: ".assembly-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-16 md:px-8 px-4 py-20 bg-cream">
      <article className="flex flex-col items-center text-center assembly-header">
        <h3 className="font-medium pb-6 lg:text-base text-xs">
          Manual Assembly
        </h3>
        <p className="lg:text-6xl text-3xl font-notoSherif lg:w-2/4 w-full leading-tight">
          Designed at the intersection of art and science.
        </p>
      </article>
      <div className="w-full h-assemblyVid assembly-video">
        <video
          src={assemblyVid}
          autoPlay
          muted
          playsInline
          loop
          type="video/webm"
          className="w-full h-full rounded-2xl object-cover lg:mt-20 mt-10"
        ></video>
      </div>
      <div className="flex flex-col items-center pt-16 assembly-text">
        <p className="lg:w-3/5 w-full leading-loose text-gray-600 font-medium text-center">
          The Other Glasses introduces an innovative approach to eyewear. Each
          pair is a harmonious blend of design, timeless aesthetics, function
          and comfort. In the symphony of modernity, The Other Glasses is a
          resonant note of tradition harmonized with innovation. Our designs
          undergo a meticulous process, where every curve, every line, is a
          deliberate stroke of genius, playing with light and shadow, volume and
          space.
        </p>
        <div className="pt-12 flex items-center gap-5">
          <img src={manufacturerIcon} alt="" className="h-16" />
          <p className="text-gray-600 text-sm">
            Designed in Italy
            <span className="block">Handcrafted in Europe</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Assembly;
