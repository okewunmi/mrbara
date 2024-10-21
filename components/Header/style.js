"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  padding: 3rem;
  background: transparent;
  z-index: 100;
  position: absolute;

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
    transition: all 0.5s;

    .heading {
      font-weight: 900;
      font-size: 1.5rem;
    }

    &:hover {
      transform: scale(1.1) translateY(10px);
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
