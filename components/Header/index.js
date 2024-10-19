"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { Wrapper } from "./style";

const Index = () => {
  return (
    <Wrapper>
      <button className="menu">
        <RxHamburgerMenu className="icon" />
        <p>Menu</p>
      </button>
    </Wrapper>
  );
};

export default Index;
