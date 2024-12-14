import heroVid from "../assets/media/home_og_video_v1_mobile.webm";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-subheading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <main className="bg-black">
      <section className="text-white md:h-screen relative">
        <div className="h-full flex justify-center">
          <video
            autoPlay
            muted
            playsInline
            type="video/webm"
            src={heroVid}
            className="lg:w-2/5 w-full h-full object-cover lg:mt-16 mt-0"
          ></video>
        </div>
        <div className="absolute lg:bottom-28 bottom-44 w-full text-center hero-heading">
          <h2 className="text-2xl font-notoSherif">Redifining Glasses</h2>
          <p className="text-sm hero-subheading">Versatile Luxury</p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
