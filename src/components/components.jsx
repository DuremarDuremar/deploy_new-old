import styled from "styled-components";

export const Button = styled.button`
  width: 113px;
  height: 43px;
  background: #d2e1ff;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: 1s;
  :hover {
    background: #5e81fe;
  }
  :hover p {
    color: #d2e1ff;
  }
  p {
    font-family: Quicksand;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    color: #3a79ff;
  }
`;

export const TitleText = styled.div`
  padding-top: ${(props) => (props.heroimage ? "92px" : "171px")};
  h3 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3d4f9f;
    text-align: center;
  }
  h1 {
    padding-top: 16px;
    text-align: center;
    color: #3d4f9f;
    font-weight: ${(props) => (props.heroimage ? "300" : "500")};
    font-size: ${(props) => (props.heroimage ? "48px" : "24px")};
    line-height: ${(props) => (props.heroimage ? "60px" : "30px")};
  }

  p {
    padding-top: 28px;
    font-family: Roboto;
    max-width: 502px;
    margin: 0px auto;
    font-size: 15px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #8d96bd;
  }
`;
