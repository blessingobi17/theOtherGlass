import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import contour from "../assets/media/contour.jpg";
import border from "../assets/media/border.jpg";
import polygon from "../assets/media/polygon.jpg";
import essential from "../assets/media/essential.jpg";
import classic from "../assets/media/classic.jpg";
import dual from "../assets/media/dual.jpg";
import angular from "../assets/media/angular.jpg";
import curve from "../assets/media/curve.jpg";

const Collection = () => {
  const words = [
    "luxury",
    "top design",
    "exclusivity",
    "craftsmanship",
    "culture",
    "an experience",
    "comfort",
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index, words]);

  return (
    <main className="lg:px-16 md:px-8 px-4 py-20">
      <div className="pb-10">
        <h3 className="pb-6">Our 2025 collection.</h3>
        <p className="font-notoSherif lg:text-5xl text-3xl">
          Quality is{" "}
          <span
            className={`transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentWord}
          </span>
        </p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.5,
          },

          1024: {
            slidesPerView: 2.5,
          },
        }}
        spaceBetween={20}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src={contour}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Contour</h4>
            <p className="text-sm pt-2">
              Contour, this exquisite acetate frame with its sleek and powerful
              lines, exudes an air of confidence and determination.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={border}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Border</h4>
            <p className="text-sm pt-2">
              This titanium structure embodying minimalistic perfection,
              provides a clean, classic foundation that speaks to the
              wearer's appreciation.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={polygon}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Polygon</h4>
            <p className="text-sm pt-2">
              The Polygon frame redefines contemporary eyewear with its bold
              geometric design and premium acetate construction.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={essential}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Essential</h4>
            <p className="text-sm pt-2">
              The Essential embodies the epitome of timeless elegance and
              minimalist sophistication, crafted entirely from titanium.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={classic}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Classic</h4>
            <p className="text-sm pt-2">
              The Classic particularly strikes you with its ability to transcend
              fleeting trends, remaining a piece that feels
              perpetually in vogue.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={dual}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Dual</h4>
            <p className="text-sm pt-2">
              The Dual frame captures the spirit of harmony and subtlety,
              blending the rich warmth of acetate with the sleek
              strength of titanium.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={angular}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Angular</h4>
            <p className="text-sm pt-2">
              The Angular is a contemporary masterpiece that seamlessly blends
              the Angularity philosophy with avant-garde design.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={curve}
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />
          <div className="imgOverlay absolute top-0 w-full h-80"></div>
          <div className="absolute bottom-0 px-8 py-8 text-white">
            <h4 className="text-2xl font-notoSherif">Curve</h4>
            <p className="text-sm pt-2">
              This oversized piece of wearable art challenges both wearer and
              observer to embrace a more daring aesthetic.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Collection;
