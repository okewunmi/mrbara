import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  /* background: #eee; */
  /* /* background: #fff; */

  .swiper {
    display: flex;
    height: 100vh;
    width: 100vw;
    /* position: relative; */
  }

  .swiper-slide {
    /* background: #fff; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* padding: 3rem; */
  }

  /* Custom Navigation Box */
  .nav_box {
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  }

  /* Hide the default Swiper navigation buttons */
  .swiper-button-prev,
  .swiper-button-next {
    display: none; /* Hides the default Swiper navigation buttons */
  }

  /* Show custom arrows */
  .custom-prev,
  .custom-next {
    color: #000;
    font-size: 25px;
    cursor: pointer;
  }

  /* Hover effects */
  .custom-prev:hover,
  .custom-next:hover {
    color: #007bff;
  }
`;
