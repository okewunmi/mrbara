import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Wrapper } from "./styles";
import Header from "../Header/index";
import Footer from "../Footer/index";
import person from "../../image/persons.jpg";
import persons from "../../image/person.jpg";
import { SectionLeft, SectionRight } from "../card/index"; // Named import for SectionLeft
// import required modules
import { Navigation } from "swiper/modules";

const Index = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Wrapper>
      {/* Custom Navigation Arrows */}
      <div className="nav_box">
        <div className="custom-prev" ref={prevRef}>
          <HiArrowNarrowUp />
        </div>
        <div></div>
        <div className="custom-next" ref={nextRef}>
          <HiArrowNarrowDown />
        </div>
      </div>

      <Swiper
        className="swiper"
        direction={"vertical"}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
      >
        <Header />
        <SwiperSlide className="swiper-slide">
          <SectionLeft
            sectionNumber="01"
            heading="Creating Tomorrow's Fashion"
            greet="Hello!"
            title=" I'm Mr. Bara"
            subtitle="Fashion Designer"
            description="Crafts bold, elegant designs that inspire confidence and elevate everyday fashion. Specializes in minimalist aesthetics with a modern touch, blending classic style with contemporary trends."
            image={person} // Add an image in public/images
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SectionRight
            sectionNumber=""
            heading="Creating Tomorrow's Fashion"
            greet="Love Simplicity Fashion"
            title=" "
            // subtitle="Fashion Designer"
            description="Discover a world where elegance meets minimalism in every design. Crafting timeless pieces with a focus on subtlety and refinement."
            image={persons} // Add an image in public/images
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SectionLeft
            sectionNumber="03"
            greet="Hello!"
            title=" I'm Mr. Bara"
            subtitle="Fashion Designer"
            description="I craft bold designs that inspire people around the globe.I craft bold designs that inspire people around the globe.I craft bold designs that inspire people around the globe."
            image={person} // Add an image in public/images
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        <Footer />
      </Swiper>
    </Wrapper>
  );
};

export default Index;

// import React from "react";
// import { motion } from "framer-motion";

// const HomePage = () => {
//   return (
//     <div className="container">
//       <div className="left-section">
//         <header>
//           <div className="nav">
//             <button className="menu-icon">Menu</button>
//             <div className="social-icons">{/* Social icons here */}</div>
//           </div>
//         </header>
//         <motion.div
//           className="intro-text"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1>Hello! I'm Mr. Bara</h1>
//           <p>Fashion Designer</p>
//           <p>I create modern and stylish designs...</p>
//         </motion.div>
//         <div className="section-number">01</div>
//       </div>
//       <div className="right-section">
//         <motion.img
//           src="/path-to-image.jpg"
//           alt="Mr. Bara"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
