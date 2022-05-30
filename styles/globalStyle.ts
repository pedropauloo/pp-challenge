import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }

  .p-0 {
    padding: 0 !important;
  }

  .p-10 {
    padding: 10px;
  }

  .p-24 {
    padding: 24px !important;
  }

  .py-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .px-40 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .pr-10 {
    padding-right: 10px;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mr-8 {
    margin-right: 8px;
  }

  .ml-8 {
    margin-left: 8px;
  }

  .mt-8 {
    margin-top: 8px;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  .ml-16 {
    margin-left: 16px;
  }

  .my-40 {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .rounded-full {
    border-radius: 50%;
  }

  .text-light-green {
    color: #587169;
  }

  .text-light-green:hover {
    color: #4a5e58;
  }

  .bg-light-gray {
    background-color: #f5faf8;
  }

  .bg-gray {
    background-color: #eaefed;
  }

  .bg-green {
    background-color: #22e0a1;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .end {
    justify-content: flex-end;
  }

  .space-between {
    justify-content: space-between;
  }

  .center {
    justify-content: center;
  }

  .container-center {
    margin: 0 auto;
    max-width: 960px;
  }

  .fw-light {
    font-weight: 400;
  }

  .fw-medium {
    font-weight: 500;
  }

  .fw-bold {
    font-weight: 600 !important;
  }

  .d-flex {
    display: flex;
  }

  .d-block {
    display: block;
  }

  .d-none {
    display: none;
  }

  .mw-420 {
    max-width: 420px;
  }

  @media screen and (min-width: 480px) {
    .d-sm-block {
      display: block !important;
    }

    .d-sm-none {
      display: none !important;
    }

    .m-sm-0 {
      margin: 0 !important;
    }

    .mx-sm-24 {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }

    .ml-sm-24 {
      margin-left: 24px !important;
    }

    .mr-sm-24 {
      margin-right: 24px !important;
    }
  }
`;
