import { Wrapper } from "./styles";
import Image from "next/image";
import { motion } from "framer-motion";

export const SectionLeft = ({
  sectionNumber,
  title,
  greet,
  subtitle,
  description,
  image,
  heading,
}) => {
  return (
    <Wrapper>
      <div className="section">
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
          </div>
        </div>
        <div className="image-content">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
        </div>
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
}) => {
  return (
    <Wrapper>
      <div className="section">
        <div className="image-content">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="image"
          />
        </div>
        <div className="text-content">
          <div className="number">{sectionNumber}</div>
          <div className="details">
            <h1 className="details_heading">{heading}</h1>
            <h1 className="details_greet">{greet}</h1>
            <h1 className="details_head">{title}</h1>
            <h3 className="details_sub">{subtitle}</h3>
            <p className="details_txt">{description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
