import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-slideIn",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footer-slideIn",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <footer className="lg:px-16 md:px-8 px-4 lg:py-24 py-16 bg-black text-white">
      <section className="flex md:flex-row flex-col lg:gap-0 gap-12">
        <div className="md:w-2/4 w-full footer-slideIn">
          <p className="lg:text-4xl text-2xl lg:w-8/12 w-full leading-snug">
            Focused on craft, not on social attention.
          </p>
        </div>
        <div className="md:w-5/12 w-full flex md:flex-row flex-col lg:gap-0 gap-12 justify-between">
          <ul className="space-y-2 footer-slideIn">
            <li>Become Partner</li>
            <li>Find a Retailer</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="footer-slideIn">
            <p className="">
              Questions? Write us at
              <span className="block underline pt-1">hi@theotherglass.com</span>
            </p>
            <div className="flex gap-3 pt-8">
              <FaInstagram className="text-xl" />
              <FaLinkedin className="text-xl" />
              <FaPinterest className="text-xl" />
              <FaFacebook className="text-xl" />
            </div>
          </div>
        </div>
      </section>
      <p className="text-xs pt-20 footer-slideIn">
        &copy; 2024 All Rights Reserved — The Other Glasses, LLC
      </p>
    </footer>
  );
};

export default Footer;
