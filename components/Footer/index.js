import React from "react";
import { Wrapper } from "./styles";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoTiktok,
  IoMail,
  IoMapSharp,
} from "react-icons/io5";
import Link from "next/link";
const index = () => {
  return (
    <Wrapper>
      <div className="profile">
        <Link href="#" className="icon">
          <IoLogoFacebook />
        </Link>
        <Link href="#" className="icon">
          <IoLogoInstagram />
        </Link>
        <Link href="#" className="icon">
          <IoLogoTwitter />
        </Link>
        <Link href="#" className="icon">
          <IoLogoTiktok />
        </Link>
      </div>

      <div className="profile">
        <Link href="#" className="icon">
          <IoMail />
        </Link>
        <Link href="#" className="icon">
          <IoMapSharp />
        </Link>
      </div>
    </Wrapper>
  );
};

export default index;
