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
  .flexCol {
    flex-direction: column;
  }

  .number {
    font-size: 10rem;
    opacity: 0.1;
    font-weight: bolder;
    position: absolute;
    left: -3rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-left: 2rem; */

    /* width: 56%; */
    padding: 0 10rem;
    gap: 1.3rem;

    &_heading {
      font-size: 0.75rem;
      font-weight: 900;
      width: 2rem;
      line-height: 1.2;
    }

    &_head,
    &_greet {
      font-size: 2.5rem;
      font-weight: 900;
      line-height: normal;
    }
    &_headings {
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 1;
      width: 17rem;
    }
    &_head {
      margin-top: -2.1rem;
    }
    &_sub {
      letter-spacing: 6px;
      font-size: 1.1rem;
      font-weight: 500;
    }
    &_txt {
      font-size: 13px;
      text-align: justify;
      line-height: 1.7;
      font-weight: lighter;
    }
    &_btn {
      background: brown;
      display: flex;
      align-self: flex-start;
      padding: 0 1.3rem;
      height: 2.1rem;
      align-items: center;
      font-size: 0.8rem;
      font-weight: bolder;
      border-radius: 3rem;
      transition: all 0.4;

      &:hover {
        transform: scale(1.05);
      }
    }
    &_caroul-btn {
      display: flex;
      gap: 0.5rem;
      padding-top: 2rem;
      margin-left: -20rem;

      .btns {
        font-size: larger;
        font-weight: bold;

        &:active {
          color: darkgray;
        }
      }
    }
    &_box {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      flex-direction: row;

      &-img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 100%;
        border: 2px solid brown;
        object-fit: cover;
      }
      &-name {
        font-size: 0.8rem;
        font-weight: bold;
      }
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
