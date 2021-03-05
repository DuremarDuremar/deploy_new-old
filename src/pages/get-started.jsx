import React from "react";
import FonImage from "../img/clouds2.png";
import { Button, TitleText } from "../components/components";
import styled from "styled-components";

const Fon = styled.div`
  max-width: 1440px;
  height: 447px;
  background-color: #5e80ff;
  background-image: url(${FonImage});
  background-size: 100%;
`;

const TitleTextGet = styled(TitleText)`
  padding-top: 91px;
  h3,
  h1,
  p {
    color: #fff;
  }
  h1 {
    font-weight: 300;
    font-size: 48px;
    line-height: 60px;
    span {
      font-weight: 600;
    }
  }
  p {
    padding: 0 5px;
    max-width: 712px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const ButtonWhite = styled(Button)`
  width: 130px;
  background: #fff;
  box-shadow: 0px 5px 15px #6480e8;
  p {
    color: #565f82;
  }
  :hover {
    background: #565f82;
  }
  :hover p {
    color: #fff;
  }
`;
const ButtonBlue = styled(Button)`
  width: 155px;
  border: 1px solid #a0b4ff;
  background: none;
  p {
    color: #c7d3ff;
  }
  :hover {
    background: #c7d3ff;
  }
  :hover p {
    color: #5e80ff;
  }
`;

const GetStarted = () => {
  return (
    <Fon>
      <TitleTextGet>
        <h3>PLAN YOUR LIFE</h3>
        <h1>
          Get <span>started</span> now
        </h1>
        <p>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens gubergren similique est cu. Et vel modus
          congue vituperata.
        </p>
      </TitleTextGet>
      <ButtonWrapper>
        <ButtonWhite>
          <p>View pricing</p>
        </ButtonWhite>
        <ButtonBlue>
          <p>Read documentation</p>
        </ButtonBlue>
      </ButtonWrapper>
    </Fon>
  );
};

export default GetStarted;
