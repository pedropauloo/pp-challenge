import styled from "@emotion/styled";

export const Text = styled("span")`
  color: #587169;
  font-weight: 600;
  font-size: 14px;
`;
export const ThinText = styled("span")`
  color: #587169;
  font-weight: 400;
  font-size: 14px;
`;

export const Title = styled("h1")`
  font-weight: 600;
  font-size: 32px;
  color: #34423d;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled("h2")`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #34423d;
`;
