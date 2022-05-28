import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }

  .rounded-full {
    border-radius: 50%;
  }

  .bg-light-gray {
    background-color: #f5faf8;
  }

  .bg-gray {
    background-color: #eaefed;
  }

  .ml-8 {
    margin-left: 8px;
  }

  .mt-8 {
    margin-top: 8px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .space-between {
    justify-content: space-between;
  }

  .center {
    justify-content: center;
  }

  .fw-light {
    font-weight: 400;
  }

  .fw-medium {
    font-weight: 500;
  }

  .fw-bold {
    font-weight: 600;
  }
`;
