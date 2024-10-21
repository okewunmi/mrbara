import styled from "styled-components";

export const Wrapper = styled.div`
  .section {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-content {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .number {
    font-size: 10rem;
    opacity: 0.1;
    font-weight: bolder;
    position: absolute;
    left: -2rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;

    width: 50%;
    gap: 1.6rem;

    &_heading {
      font-size: 0.75rem;
      font-weight: 900;
      width: 2rem;
      line-height: 1.2;
    }

    &_head,
    &_greet {
      font-size: 1.6rem;
      font-weight: 900;
    }
    &_head {
      margin-top: -2.1rem;
    }
    &_sub {
      letter-spacing: 6px;
      font-size: 1rem;
      font-weight: 300;
    }
    &_txt {
      font-size: 0.82rem;
      text-align: justify;
      line-height: 1.8;
    }
  }

  .image-content {
    height: 100%;
    width: 50%;
  }
  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
