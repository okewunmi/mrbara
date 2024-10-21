"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications, IoPerson } from "react-icons/io5";

import { Wrapper } from "./style";
import Link from "next/link";

const Index = () => {
  return (
    <Wrapper>
      <button className="menu">
        <RxHamburgerMenu className="icon" />
        <p className="menu_txt">Menu</p>
      </button>

      <Link href="/" className="logo">
        <h1 className="heading">Mr.</h1>
        <h1 className="heading">Bara</h1>
      </Link>

      <div className="profile">
        <Link href="#" className="icon">
          <IoNotifications />
        </Link>
        <Link href="#" className="icon">
          <IoPerson />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Index;
