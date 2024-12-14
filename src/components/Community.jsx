import commImg from "../assets/media/commImg.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  useEffect(() => {
    gsap.fromTo(
      ".community",
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
          trigger: ".community",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-16 px-4 lg:py-32 py-24">
      <section className="flex flex-col items-center w-full community">
        <div className="lg:w-5/12 md:w-4/5 w-full text-center">
          <h3 className="lg:text-5xl text-3xl font-notoSherif leading-snug">
            Stay up to date and never miss out.
          </h3>
          <form action="" className="pt-8 w-full relative">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full border bg-ash border-gray-300 px-3 p-3 outline-none rounded-lg"
            />
            <button className="bg-black text-white px-7 py-2 rounded-lg absolute right-1 signUp">
              Sign Up
            </button>
          </form>
          <div className="pt-8 flex items-center justify-center lg:gap-6 gap-3">
            <img src={commImg} alt="" className="lg:h-12 h-8" />
            <p>Join the community</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
