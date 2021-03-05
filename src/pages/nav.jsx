import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../components/components";
import { Link, animateScroll } from "react-scroll";

const Wrapper = styled.div`
  height: ${(props) =>
    props.footer ? "107px" : props.a1190 ? "80px" : "120px"};
  display: block;
  margin: ${(props) => (props.header ? "0 auto" : "23px 0px 43px 0px")};
  max-width: 1200px;
  padding: 20px 10px;
  position: relative;
  .footer-text {
    margin-left: 94px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #aeb8d0;
  }
  .fa-angle-double-up {
    bottom: 5%;
    color: #697ca6;
    cursor: pointer;
    position: fixed;
    right: 5%;
    border: 3px solid #697ca6;
    padding: 5px;
    background-color: #fff;
    z-index: 3;
  }
`;

const rotateAnimation = keyframes`
0%{
transform: rotateZ(0deg)
}
100%{
  transform: rotateZ(360deg)
}

`;

const HeaderLogo = styled.li`
  width: 21px;
  height: 21px;
  position: relative;
  top: -2px;
  background: #5e81fe;
  border-radius: 100%;
  margin-right: 73px;
  border-radius: 100%;
  border-style: solid;
  border-width: 10px;
  border-bottom-color: black;
  border-left-color: #5e81fe;
  border-right-color: #5e81fe;
  border-top-color: black;
  cursor: pointer;
  :hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
`;

const MenuLi = styled.li`
  color: ${(props) => (props.active ? "#5e81fe" : "#697CA6")};
  font-weight: ${(props) => (props.active ? "800" : "500")};
  text-shadow: 0px 0px 5px #e6e6e6;
  transition: all ease-in-out 0.25s;
  font-size: ${(props) => (props.a1190 ? "12px" : "17px")};
  /* font-size: 12px; */
  line-height: 15px;
  margin-right: 42px;

  :last-child {
    margin-right: 0;
  }
  :hover {
    color: #5e81fe;
  }
`;

const LinkLi = styled.li`
  align-self: center;
  transition: all ease-in-out 0.25s;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
  :hover i {
    color: #5e81fe;
  }
  i {
    padding: 5px;
  }

  ${(props) =>
    props.a800 &&
    `
    :not(:first-child) {
    margin-right: 34px;
  }
  :first-child {
    margin-right: 37px;
  }
  :last-child {
    margin-right: 0;
  }
  `}
  ${(props) =>
    !props.a800 &&
    props.header &&
    `
    :not(:first-child) {
    margin-top: 16px;
  }
  
  `}
`;

const NavLink = styled(Link)`
  display: flex;
`;

const NetWork = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: ${(props) => (props.header ? "flex-end" : "flex-start")};
  padding-right: 5px;
  z-index: 5;
`;

const BurgerNetwork = styled.div`
  position: absolute;
  background-color: #fff;
  right: ${(props) => (props.header ? "0" : "5%")};
  display: inline-flex;
  flex-direction: ${(props) => (props.header ? "column" : "row")};
  ${(props) =>
    !props.a800 &&
    props.header &&
    `
    border: 1px solid black;
    top: 120%;
  `}
  ${(props) =>
    !props.a800 &&
    props.footer &&
    `
    top: 80%;
    width: 200px;
    margin-top: 26px;
  `}
  justify-content:space-between;
`;

const BurgerLink = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  position: relative;

  p {
    border: 4px solid #8d96bd;
    padding: 12px;
    border-radius: 40px;
    transform: scale();
  }
  .faq {
    position: absolute;
    right: 40%;
    transform: translateX(50%);
  }
  .Plan {
    position: absolute;
    left: 25%;
    transform: translateX(-50%);
  }
`;
const Burger = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const BurgerMenu = styled.div`
  width: 50px;
  height: 50px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    transition: all ease-out 0.45s;
    color: ${(props) => (props.burger ? "#fff" : "#5e81fe")};
    background-color: ${(props) => (props.burger ? "#5e81fe" : "#fff")};
    padding: 8px;
    border: 3px solid #5e81fe;
  }
`;

const Nav = ({ ...props }) => {
  const [burger, setBurger] = useState(false);

  const menuLi = ["Home", "Blog", "Features", "Plan", "faq"].map(
    (item, index) => {
      return index + 1 === props.activeLi ? (
        <MenuLi active key={index + 1} {...props}>
          <NavLink
            to={String(index + 1)}
            smooth={true}
            duration={1000}
            onClick={() => {
              props.setActiveLi(index + 1);
              setBurger(!burger);
            }}
          >
            <p className={item}>{item}</p>
          </NavLink>
        </MenuLi>
      ) : (
        <MenuLi key={index + 1} {...props}>
          <NavLink
            to={String(index + 1)}
            smooth={true}
            duration={1000}
            onClick={() => {
              props.setActiveLi(index + 1);
              setBurger(!burger);
            }}
          >
            <p className={item}>{item}</p>
          </NavLink>
        </MenuLi>
      );
    }
  );

  const network = [
    "fab fa-facebook-f",
    "fab fa-telegram-plane",
    "fab fa-twitter",
    "fab fa-instagram",
  ].map((item, index) => {
    return (
      <LinkLi key={index} {...props}>
        <i className={item}></i>
      </LinkLi>
    );
  });

  // console.log("burger", burger);

  return (
    <Wrapper {...props} id={props.header ? "1" : "0"}>
      {props.a800 && (
        <>
          <div className="flex">
            <ul className="left flex">
              <HeaderLogo />
              {menuLi}
            </ul>
            <ul className="right flex">
              {props.a1190 && network}
              <Button>
                <p>Get Started</p>
              </Button>
            </ul>
          </div>
          {props.footer && (
            <div className="footer-text">Copyright © 2018 by Random site</div>
          )}
          {props.footer && (
            <i
              className="fas fa-angle-double-up fa-lg"
              onClick={() => {
                animateScroll.scrollTo(100);
                props.setActiveLi(1);
              }}
            ></i>
          )}
          {!props.a1190 && <NetWork {...props}>{network}</NetWork>}
        </>
      )}
      {!props.a800 && props.header && (
        <Burger>
          {!burger && (
            <Button>
              <p>Get Started</p>
            </Button>
          )}

          {burger && (
            <>
              <BurgerNetwork {...props}>{network}</BurgerNetwork>
              <BurgerLink>{menuLi}</BurgerLink>
            </>
          )}

          <BurgerMenu onClick={() => setBurger(!burger)} burger={burger}>
            <i className="far fa-hand-point-up fa-2x"></i>
          </BurgerMenu>
        </Burger>
      )}
      {!props.a800 && props.footer && (
        <BurgerNetwork {...props}>{network}</BurgerNetwork>
      )}
    </Wrapper>
  );
};

export default Nav;
