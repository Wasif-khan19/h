import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Thumbs } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/pages/Hero";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Help from "./components/pages/Help";

const Home = () => {
  const swiperRef = useRef(null);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChangeTransitionStart", () => {
        gsap.from(".swiper-slide-active .content", {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.5,
        });
      });

      swiperRef.current.on("reachEnd", () => {
        setReachedEnd(true);
      });

      swiperRef.current.on("fromEdge", () => {
        setReachedEnd(false);
      });
    }
  }, []);

  const slides = [
    { background: "bg-[#122315]", component: <Hero /> },
    { background: "bg-[#122315]", component: <Contact /> },
    { background: "bg-[#122315]", component: <About /> },
    { background: "bg-[#122315]", component: <Help /> },
  ];

  return (
    <div className="h-screen  text-white overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction={"vertical"}
        loop={false}
        spaceBetween={0}
        mousewheel={!reachedEnd}
        speed={1200}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Mousewheel, Thumbs]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${slide.background} flex items-center justify-center`}
          >
            <div className="content w-full h-full flex items-center justify-center">
              {slide.component}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
