import React from "react";
import { Button, TitleText } from "../components/components";
import ManageImg1 from "../img/manage1.png";
import ManageImg2 from "../img/manage2.png";
import ManageImg3 from "../img/manage3.png";
import styled from "styled-components";

const Fon = styled.div`
  background: #f5f8ff;
  width: 100%;
  max-width: 1440px;
`;
const Wrapper = styled.div`
  max-width: 1135px;
  height: ${(props) => (props.a800 ? "689px" : "850px")};
  margin: 0px auto;
  padding: 10px 0;
  position: relative;
`;

const ContentManage = styled.div`
  display: flex;
  position: ${(props) => (props.a1190 ? "static" : "relative")};
`;

const ContentText = styled.div`
  position: ${(props) =>
    props.a1190 ? "static" : props.a800 ? "absolute" : "static"};
  transform: ${(props) =>
    props.a1190 ? "none" : props.a800 ? "translateX(-50%)" : "none"};
  left: 50%;
  z-index: 3;
  margin: 0px auto;
`;
const ContentIlustrations = styled.div`
  position: ${(props) => (props.a1190 ? "static" : "absolute")};
  opacity: 1;
  left: 50%;
  transform: ${(props) => (props.a1190 ? "none" : "translateX(-50%)")};

  div {
    margin-top: 81px;
    position: relative;
    width: ${(props) => (props.a800 ? "653px" : "400px")};
    height: 436px;
    img {
      display: block;
      position: absolute;

      :nth-child(3) {
        top: -20px;
        right: -47px;
        z-index: 1;
      }
      :nth-child(2) {
        top: 59px;
        right: -13px;
        z-index: 2;
      }
      :nth-child(1) {
        top: 79px;
        left: -39px;
        z-index: 2;
      }
    }
  }
`;

const TitleTextManage = styled(TitleText)`
  padding-top: 119px;
  padding-right: ${(props) => (props.a800 ? "55px" : "0")};
  opacity: ${(props) =>
    props.a1190 ? "1" : props.a800 && !props.a1190 ? "0" : "1"};
  transition: all ease-in-out 1s;

  :hover {
    opacity: 1;
  }
  ${(props) =>
    !props.a1190 &&
    `
    cursor: pointer;
  `}
  h3 {
    text-align: ${(props) => (props.a1190 ? "left" : "center")};
  }
  h1 {
    text-align: ${(props) => (props.a1190 ? "left" : "center")};
    padding-top: 27px;
    background-color: ${(props) => (props.a1190 ? "none" : "#f5f8ff")};
  }
  p {
    text-align: left;
    padding-top: 27px;
    width: 413px;
    padding: ${(props) => (props.a1190 ? "27px 0 0 0" : "27px 14px 14px 14px")};
    background-color: ${(props) => (props.a1190 ? "none" : "#f5f8ff")};
    border-radius: ${(props) => (props.a1190 ? "0" : "20%")};
  }
`;
const ContentButton = styled.div`
  margin-top: ${(props) => (props.a1190 ? "47px" : "60px")};
  text-align: center;
`;
const ManageButtonBlue = styled(Button)`
  width: 130, 08px;
  background: #4c85ff;
  box-shadow: 0px 5px 15px rgba(188, 199, 255, 0.75);
  p {
    color: #ffffff;
  }
  :hover {
    background: none;
    border: 1px solid #d1d1e4;
  }
  :hover p {
    color: #4c85ff;
  }
`;
const ManageButtonTranspar = styled(Button)`
  width: 130, 08px;
  background: none;
  border: 1px solid #d1d1e4;
  p {
    color: #adb4d2;
  }
`;

const AdapImages = styled.div`
  max-width: 600px;
  padding-top: 45px;
  padding-right: 5vw;
  img {
    display: block;
    max-width: 100%;
  }
`;

const PlanManage = ({ a1190, a800 }) => {
  return (
    <Fon>
      <Wrapper id="4" a800={a800}>
        <ContentManage a1190={a1190}>
          <ContentText a1190={a1190} a800={a800}>
            <TitleTextManage a1190={a1190} a800={a800}>
              <h3>DESKTOP AND MOBILE APP</h3>
              <h1>Plan and manage</h1>
              <p>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu. Et vel
                modus congue vituperata. Solum patrioque no sea. Mea ex malis
                mollis oporteat. Eum an expetenda consequat.
              </p>
            </TitleTextManage>
            <ContentButton a1190={a1190}>
              <ManageButtonBlue>
                <p>View video</p>
              </ManageButtonBlue>
              <ManageButtonTranspar>
                <p>See features</p>
              </ManageButtonTranspar>
            </ContentButton>
          </ContentText>
          {a800 && (
            <ContentIlustrations a1190={a1190} a800={a800}>
              <div>
                <img src={ManageImg1} alt="1" />
                <img src={ManageImg2} alt="2" />
                <img src={ManageImg3} alt="3" />
              </div>
            </ContentIlustrations>
          )}
        </ContentManage>
        {!a800 && (
          <AdapImages>
            <img src={ManageImg3} alt="3" />
          </AdapImages>
        )}
      </Wrapper>
    </Fon>
  );
};

export default PlanManage;
