import DiscoverGrid from "../components/DiscoverGrid";
import { useEffect } from "react";
import { gsap } from "gsap";

const DiscoverCollection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".discover-heading",
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
      ".discover-subheading",
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
    <main className="lg:px-16 md:px-8 px-4 pt-36">
      <section className="flex flex-col items-center w-full">
        <div className="lg:w-2/4 w-full text-center">
          <h3 className="lg:text-7xl text-3xl font-notoSherif leading-snug discover-heading">
            The Origins 2025 Collection
          </h3>
          <p className="text-gray-600 leading-loose pt-4 discover-subheading">
            The Origins, our first collection, captures the essence of our
            brand—a timeless union between a lightweight exoskeleton and a
            functional sculpture.
          </p>
        </div>
      </section>
      <section className="py-28">
        <DiscoverGrid />
      </section>
    </main>
  );
};

export default DiscoverCollection;
