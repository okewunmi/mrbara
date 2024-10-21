"use client";
import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import image4 from "../../image/image4.jpg";
import image1 from "../../image/person.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const reviews = [
  {
    id: 1,
    heading: "Mr.Bara Best Choice",
    subtext:
      "Discover a world where elegance meets minimalism in every design. Crafting timeless pieces with a focus on subtlety and refinement.",
    image: image1,
    name: "Angela Gomez",
    star: 9,
  },
  {
    id: 2,
    heading: "Clothings Quality",
    subtext:
      "Discover a world where elegance meets minimalism in every design. Crafting timeless pieces with a focus on subtlety and refinement.",
    image: image4,
    name: "Ivori Lorez",
    star: 7,
  },
  {
    id: 3,
    heading: "Discounts on Products",
    subtext:
      "Discover a world where elegance meets minimalism in every design. Crafting timeless pieces with a focus on subtlety and refinement.",
    image: image4,
    name: "Bert Wert",
    star: 7,
  },
];

export const SectionLeft = ({
  sectionNumber,
  title,
  greet,
  subtitle,
  description,
  image,
  heading,
  name,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [animate, setAnimate] = useState(false);
  const [revert, setRevert] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout1 = setTimeout(() => {
        setAnimate(true);
      }, 1000);
      const timeout2 = setTimeout(() => {
        setRevert(true);
      }, 3000);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [inView]);

  return (
    <Wrapper>
      <div className="section" ref={ref}>
        <div className="text-content">
          <motion.div
            className="number"
            initial={{ x: "-100% " }}
            animate={
              revert ? { x: "-100%" } : animate ? { x: "0%" } : { x: "-100%" }
            }
            transition={{ duration: 0.5 }}
          >
            {sectionNumber}
          </motion.div>
          <div className="details">
            <motion.div
              className=""
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="details_heading">{heading}</h1>
            </motion.div>

            <h1 className="details_greet">{greet}</h1>
            <h1 className="details_head">{title}</h1>
            <h3 className="details_sub">{subtitle}</h3>
            <p className="details_txt">{description}</p>
            <Link href="#">{name}</Link>
          </div>
        </div>
        <motion.div
          className="image-content"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {/* <div className="image-content"> */}
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
          {/* </div> */}
        </motion.div>
        {/* <div className="image-content">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
        </div> */}
      </div>
    </Wrapper>
  );
};

export const SectionRight = ({
  sectionNumber,
  title,
  subtitle,
  description,
  image,
  greet,
  heading,
  name,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Wrapper>
      <div className="section" ref={ref}>
        {/* <div className="image-content">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
        </div> */}
        <motion.div
          className="image-content"
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {/* <div className="image-content"> */}
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
          {/* </div> */}
        </motion.div>
        <div className="text-content">
          <div className="number">{sectionNumber}</div>
          <div className="details">
            <motion.div
              className=""
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="details_heading">{heading}</h1>
            </motion.div>
            <h1 className="details_greet">{greet}</h1>
            <h1 className="details_head">{title}</h1>
            <h3 className="details_sub">{subtitle}</h3>
            <p className="details_txt">{description}</p>
            <Link href="#" className="details_btn">
              {name}
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const prevReview = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Wrapper>
      <div className="section" ref={ref}>
        <motion.div
          className="image-content"
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Image
            src={image4}
            alt={reviews.name}
            width={500}
            height={500}
            className="image"
          />
        </motion.div>

        <div className="text-content flexCol">
          {/* <div className="details"> */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            key={activeIndex}
            className="details"
          >
            <h1 className="details_headings">{reviews[activeIndex].heading}</h1>
            <p className="details_txt">{reviews[activeIndex].subtext}</p>

            <div className="details_box">
              <Image
                src={reviews[activeIndex].image}
                className="details_box-img"
              />
              <h3 className="details_box-name">{reviews[activeIndex].name}</h3>
            </div>
          </motion.div>
          <div className="details_caroul-btn">
            <button onClick={prevReview} className="btns">
              <IoIosArrowBack />
            </button>
            <button onClick={nextReview} className="btns">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};
