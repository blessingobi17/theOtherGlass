import aboutVid from "../assets/media/otherglasses-humantouch-cover.webm";
import { useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-heading",
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
      ".about-subheading",
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
    <main>
      <section className="w-full h-aboutHeader relative flex flex-col items-center">
        <video
          src={aboutVid}
          autoPlay
          muted
          playsInline
          loop
          type="video/webm"
          className="w-full h-full object-cover"
        ></video>
        <div className="aboutOverlay absolute top-0 w-full h-full"></div>
        <div className="text-center text-white absolute top-2/4">
          <h3 className="text-2xl font-notoSherif about-heading">
            The intersection of science and art.
          </h3>
          <p className="text-sm about-subheading">Made to Last</p>
        </div>
      </section>
      <section className="w-full flex justify-center py-20">
        <div className="lg:w-2/4 md:w-3/4 w-full md:px-0 px-6">
          <p className="leading-loose">
            The Other Glasses is an independent, luxury eyewear brand designed
            in Italy and assembled in Romania. We source the finest materials
            from around the globe, each pair being a harmonious blend of design,
            timeless aesthetics, functionality and comfort, meeting the ideal
            balance sought in an everyday accessory.
            <span className="block pt-5">
              At The Other Glasses, our culture is about more than just making
              eyewear — it’s about crafting experiences. Every pair of glasses
              we create is the result of a journey, from concept to creation —
              led by a team of dedicated designers and skilled artisans. While
              you might not see the months of research and development behind
              each frame, you’ll certainly feel it the moment you hold them.
            </span>
            <span className="block pt-5">
              The Other Glasses is produced in limited quantities, maintaining
              exclusivity and the assembly production is carried out locally in
              limited quantities, which gives us full control over product
              quality. Like an artist’s signature series, The Other Glasses are
              unique, exclusive, and carefully crafted to maintain the highest
              standards.
            </span>
            <span className="block pt-5">
              Embodying a mix between a functional instrument and a fashion
              accessory. We’re inviting you on a journey where each frame tells
              a story, enriching your perception and transforming the ordinary
              into extraordinary.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
