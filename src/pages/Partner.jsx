import Form from "../components/Form";
import FAQ from "../components/FAQ";
import { useEffect } from "react";
import { gsap } from "gsap";

const Partner = () => {
  useEffect(() => {
    gsap.fromTo(
      ".partner-heading",
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
      ".partner-subheading",
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
    <main className="pt-36">
      <section>
        <div className="text-center flex flex-col items-center">
          <h3 className="lg:text-5xl text-3xl font-notoSherif leading-snug partner-heading">
            Are you an optician?
          </h3>
          <p className="text-gray-600 leading-loose pt-4 lg:w-2/5 w-4/5 partner-subheading">
            Join our network of opticians. Find out more about our exclusive
            offers and benefits here.
          </p>
        </div>
      </section>
      <section>
        <Form />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
};

export default Partner;
