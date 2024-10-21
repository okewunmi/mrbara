"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  z-index: 100;
  position: absolute;
  background: transparent;
  bottom: 0%;
  /* background-color: black; */
  padding: 2rem 3rem;

  .menu {
    gap: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    padding: 0.15rem 0.4rem;

    &:hover {
      border: 1px solid grey;
      border-radius: 0.4rem;
      transform: scale(1.1);
    }

    &_txt {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .icon {
      color: black;
      font-size: 1.2rem;
      font-weight: 600;

      &:hover {
        transform: scale(1.2);
        font-weight: bolder;
      }
    }
  }

  .logo {
    display: flex;
    flex-direction: column;
    line-height: 1;

    .heading {
      font-weight: bolder;
      font-size: 1.4rem;
    }
  }
  .profile {
    gap: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    .icon {
      color: black;
      font-size: 1.2rem;

      &:hover {
        transform: scale(1.3);
        font-weight: bolder;
      }
    }
  }
`;
