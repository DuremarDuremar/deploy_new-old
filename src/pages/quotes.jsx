import React, { useState } from "react";
import { TitleText } from "../components/components";
import Quoters1 from "../img/shop.jpg";
import Quoters2 from "../img/sartr.jpg";
import Quoters3 from "../img/haid.jpeg";
import Quoters4 from "../img/nic.jpg";
import Quoters5 from "../img/kam.jpg";
import Quoters6 from "../img/gig.jpg";
import styled from "styled-components";

const Fon = styled.div`
  max-width: 1440px;
  height: ${(props) => (props.a800 ? "479px" : "700px")};
  background: linear-gradient(180deg, #eaf0ff 0%, #f6f9ff 100%);
  overflow: hidden;
`;

const Wrapper = styled.div`
  margin: ${(props) => (props.a1190 ? "0px 0px 0px 10%" : "0px 0px 0px 5vw")};
  max-width: 1375px;
  display: ${(props) => (props.a800 ? "flex" : "block")};
  padding: 0 10px;
  position: relative;
`;

const TitleTextQuoters = styled(TitleText)`
  padding-top: 140px;
  flex: 0 1 25%;

  p {
    text-align: left;
    padding-top: 14px;
    max-width: 323px;
    font-size: 12px;
    line-height: 23px;
    color: #a4abc8;
  }
  h1 {
    text-align: ${(props) => (props.a800 ? "left" : "center")};
    padding-top: 31px;
  }
  h3 {
    text-align: ${(props) => (props.a800 ? "left" : "center")};
  }
`;

const SliderQuoters = styled.div`
  flex: 0 1 75%;
  padding-top: 109px;
`;
const Items = styled.div`
  padding: 0 35px;
  display: flex;
  flex-direction: ${(props) => (props.a1190 ? "row" : "column")};
  justify-content: space-between;
  position: ${(props) => (props.a800 ? "static" : "absolute")};
  top: 65%;
  right: 0;
`;
const Item = styled.div`
  width: ${(props) => (props.a1190 ? "423px" : "40vw")};
  min-height: 175.37px;
  background-color: #fff;
  border: 1px solid #d8e3fe;
  box-shadow: 0px 5px 50px #f3f5fa;
  position: relative;

  display: ${(props) => (props.none ? "none" : "block")};
  opacity: ${(props) => (props.opacity ? "0.5" : "1")};
  order: ${(props) => (props.newOrder ? "1" : "2")};
  ${(props) =>
    props.opacity &&
    `
    transform: matrix3d(1,0,0.03,-0.001,0.00,1,0.00,0.001,-0.03,0,1,0,0,0,0,1);
    -webkit-transform: matrix3d(1,0,0.03,-0.001,0.00,1,0.00,0.001,-0.03,0,1,0,0,0,0,1);
  `}
  z-index: ${(props) => (props.opacity ? "1" : "2")};
  top: ${(props) => (props.opacity && !props.a1190 ? "-20px" : "0")};
  left: ${(props) => (props.opacity && !props.a1190 ? "-60px" : "0")};
  p {
    font-family: Roboto;
    padding: ${(props) =>
      props.a1190 ? "41px 65px 53px 69px" : "3vw 5vw 5vw 6vw"};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #676f95;
    /* padding: 41px 65px 53px 69px; */
  }
  img {
    width: 62px;
    height: 62.13px;
    border-radius: 100%;
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const PaginQuoters = styled.div`
  width: 150px;
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  margin-left: ${(props) => (props.a1190 ? "145px" : "call(8vw + 100px)")};
`;

const QuoterButton = styled.div`
  width: 26px;
  height: 26px;
  cursor: pointer;
  :hover button {
    background: #5283ff;
  }
  border-bottom: ${(props) => (props.active ? "5px solid #5283ff" : null)};
  button {
    width: 8px;
    height: 8px;
    margin: 8px;
    outline: none;
    border: 0;
    padding: 0;
    background: #fff;
    border-radius: 100%;
  }
`;

const Quoters = ({ a1190, a800 }) => {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(2);
  const [order, setOrder] = useState(true);

  const quoter = [
    { link: Quoters1, num: 1 },
    { link: Quoters2, num: 2 },
    { link: Quoters3, num: 3 },
    { link: Quoters4, num: 4 },
    { link: Quoters5, num: 5 },
    { link: Quoters6, num: 6 },
  ];

  const List = quoter.map((item, index) => {
    if (item.num === first) {
      return (
        <Item key={index} newOrder="true">
          <p>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
          </p>
          <img src={item.link} alt={index} />
        </Item>
      );
    } else if (item.num === second) {
      return (
        <Item key={index} opacity="true" newOrder={order}>
          <p>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
          </p>
          <img src={item.link} alt={index} />
        </Item>
      );
    }
  });

  // console.log("quoter", List);
  // console.log("order", order);

  const Buttons = [1, 2, 3, 4, 5, 6].map((item, index) => {
    if (item === first) {
      return (
        <QuoterButton
          key={item}
          onClick={() => ClickButton(item)}
          active="true"
        >
          <button></button>
        </QuoterButton>
      );
    } else {
      return (
        <QuoterButton key={item} onClick={() => ClickButton(item)}>
          <button></button>
        </QuoterButton>
      );
    }
  });

  //слайдер
  const ClickButton = (num) => {
    setFirst(num);
    setSecond(num === quoter.length ? 1 : num + 1);
    if (num === quoter.length) {
      setOrder(false);
    } else {
      setOrder(true);
    }
  };

  return (
    <Fon a800={a800}>
      <Wrapper a800={a800}>
        <TitleTextQuoters a800={a800}>
          <h3>TESTIMONIALS</h3>
          <h1>Customers's quotes</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
          {!a1190 && <PaginQuoters a800={a800}>{Buttons}</PaginQuoters>}
        </TitleTextQuoters>
        <SliderQuoters>
          <Items a1190={a1190} a800={a800}>
            {List}
          </Items>
          {a1190 && <PaginQuoters>{Buttons}</PaginQuoters>}
        </SliderQuoters>
      </Wrapper>
    </Fon>
  );
};

export default Quoters;
