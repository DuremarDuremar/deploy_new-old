import React, { useState } from "react";
import { TitleText, Button } from "../components/components";
import styled from "styled-components";

const Content = styled.div`
  margin: 0px auto;
  max-width: 743px;
  height: 764px;
`;
const Accordion = styled.div`
  margin-top: 68px;
`;
const Item = styled.div`
  padding: 0 17px 15px 24px;
  border-bottom: 1px solid #d8e3fe;
  cursor: pointer;
  :not(:first-child) {
    margin-top: 17px;
  }
`;

const Title = styled.div`
  display: flex;
  color: ${(props) => (props.act === "true" ? "#495274" : "#8e96b7")};
  transition: 0.6s;

  i {
    padding-top: 3px;
    padding-right: 24px;
  }
  h3 {
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.03em;
    font-weight: ${(props) => (props.act === "true" ? "700" : "400")};
  }
`;

const Text = styled.div`
  display: flex;
  padding-top: 16px;
  padding-left: 60px;
  opacity: ${(props) => (props.act === "true" ? "1" : "0")};
  height: ${(props) => (props.act === "true" ? "100%" : "0")};
  transition: all 0.3s ease;
  .item-text {
    width: 391px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #8d96bd;
  }
`;
const FaqButton = styled(Button)`
  background: #e8ecf4;
  width: 195px;
  margin-right: 0;
  margin-left: auto;
  align-self: center;
  p {
    font-size: 13px;
    line-height: 16px;
    color: #7382a3;
  }
  :hover {
    background: #7382a3;
  }
  :hover p {
    color: #e8ecf4;
  }
`;
const Faq = () => {
  const [active, setActive] = useState(1);

  const options = [
    {
      title: "Reque insolens in vel?",
      text:
        "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Euusu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti.",
    },
    {
      title: "Vis rebum error graecis ea, id sit postea accusamus?",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores.",
    },
    {
      title: "Lorem repudiandae ne nec?",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at aliquam excepturi, commodi qui voluptate quis aut earum animi exercitationem laborum asperiores beatae omnis vero voluptatum dicta. Molestiae ratione doloribus fugit deserunt dolor similique repellendus delectus tempora ipsum accusamus?",
    },
    {
      title: "Ad dicit numquam vel. Et eos iudico feugait percipitur?",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat ullam culpa at sequi pariatur! Reprehenderit quidem consequatur blanditiis tempora ipsam! Error praesentium possimus, ullam facere libero mollitia natus quo impedit pariatur, ut cumque labore. Repudiandae temporibus hic debitis similique!",
    },
    {
      title: "Sea no dico percipitur. Fierent constituam definitiones id eum?",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto enim porro ducimus eveniet id atque neque deleniti debitis quae accusamus?",
    },
  ];

  const stopPro = (e) => {
    e.stopPropagation();
  };

  const Items = options.map((item, index) => {
    return (
      <Item
        key={index + 1}
        onClick={() => {
          index + 1 === active ? setActive(0) : setActive(index + 1);
        }}
      >
        <Title act={index + 1 === active ? "true" : "false"}>
          <i
            className={
              index + 1 === active
                ? "fas fa-angle-up fa-lg"
                : "fas fa-angle-down fa-lg"
            }
          ></i>
          <h3 act={index + 1 === active ? "true" : "false"}>{item.title}</h3>
        </Title>
        <Text act={index + 1 === active ? "true" : "false"}>
          <div className="item-text">{item.text}</div>
          <FaqButton onClick={(e) => stopPro(e)}>
            <p>Go to documentation</p>
          </FaqButton>
        </Text>
      </Item>
    );
  });

  return (
    <Content id="5">
      <TitleText>
        <h3>Customer help</h3>
        <h1>Frequently asked questions</h1>
      </TitleText>
      <Accordion>{Items}</Accordion>
    </Content>
  );
};

export default Faq;
