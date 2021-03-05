import React from "react";
import { Button, TitleText } from "../components/components";
import Clouds from "../img/clouds.png";
import styled from "styled-components";

const Fon = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 770px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 573px;
  margin: 0px auto;
  text-align: center;
  margin-top: ${(props) => (props.a800 ? "100px" : "10px")};
  background-image: url(${Clouds});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`;

const TitleTextFeatur = styled(TitleText)`
  padding-top: 70px;
`;

const Items = styled.div`
  max-width: 761px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  flex-wrap: ${(props) => (props.a800 ? "nowrap" : "wrap")};

  span {
    ${(props) =>
      !props.a800 &&
      `
    display: none;
  `}
    width: 15px;
    height: 1px;
    background-color: #dae4fe;
    margin: 0 16px;
    align-self: center;
  }
`;
const Item = styled.div`
  padding-top: 92px;
  flex: ${(props) => (props.a800 ? "1 1 auto" : "1 1 50%")};

  div {
    background-color: #f1f5ff;
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: 0px auto 33px;
  }
  h4 {
    text-align: center;
    font-family: "Open Sans";
    font-weight: bold;
    color: #4074f8;
  }
  p {
    padding-top: 25px;
    width: 140px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    color: #adb3cb;
    margin: 0px auto;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 92px;
  align-items: center;

  span {
    width: 15px;
    height: 1px;
    background-color: #dae4fe;
    margin: 0 16px;
  }
  h5 {
    color: #adb3cb;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 11px;
    line-height: 19px;
  }
`;

const ButtonPink = styled(Button)`
  background: #ffd7d7;
  :hover {
    background: #d43f3f;
  }
  :hover p {
    color: #ffd7d7;
  }
  p {
    color: #d43f3f;
  }
`;

const Features = ({ a800 }) => {
  return (
    <Fon>
      <Wrapper id="3" a800={a800}>
        <TitleTextFeatur>
          <h3>ABOUT US</h3>
          <h1>Read about our app</h1>
        </TitleTextFeatur>
        <Items a800={a800}>
          <Item a800={a800}>
            <div className="item-img">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.87273V19H6.42105L9 17L11.5789 19H16V7.87273L9 2L2 7.87273Z"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h4>Overview</h4>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
            </p>
          </Item>
          <span></span>
          <Item>
            <div className="item-img">
              <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7544 16H12.0877H9.19945H2V5.94956V2H12.0877L13.7018 5.16129H19.7544V6.96774M19.7544 16L25 6.96774H19.7544M19.7544 16V6.96774"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h4>Files</h4>
            <p>
              No vim nulla vitae intellegat. Ei enim error ius, solet atomorum
              conceptam ex has.
            </p>
          </Item>
          <span></span>
          <Item>
            <div className="item-img">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2V6.94956V13.5H4.28115L5.5 17L9 13.5H13.7018H19.7544V7.96774V2H17H12.5H2Z"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h4>Meeting chats</h4>
            <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
          </Item>
          <span></span>
          <Item>
            <div className="item-img">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.9677V17.5H4.28115H9H13.7018H19.2544V11.9677M6.75439 5L10.7544 2M14.7544 5L10.7544 2M10.7544 2V12.5"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h4>Save events</h4>
            <p>Nisl idque mel ea, nominati voluptatum.</p>
          </Item>
        </Items>
        <Buttons>
          <ButtonPink>
            <p>Read more</p>
          </ButtonPink>
          <span></span>
          <h5>OR</h5>
          <span></span>
          <Button>
            <p>Get started</p>
          </Button>
        </Buttons>
      </Wrapper>
    </Fon>
  );
};

export default Features;
