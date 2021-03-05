import React from "react";
import { Button } from "../components/components";
import styled from "styled-components";

const Fon = styled.div`
  background: #fcfdff;
  max-width: 1440px;
`;

const Content = styled.div`
  max-width: 887px;
  height: 332px;
  display: flex;
  flex-direction: ${(props) => (props.a1190 ? "row" : "column")};
  align-items: center;
  justify-content: center;
  margin: 0px auto;
`;

const Title = styled.div`
  h5 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #3d4f9f;
  }
  p {
    margin-top: 18px;
    font-family: Roboto;
    width: 330px;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #8d96bd;
  }
`;

const Form = styled.form`
  input {
    margin-top: ${(props) => (props.a1190 ? "0" : "30px")};
    width: calc(180px + 9vw);
    background: #efeff7;
    border-radius: 5px;
    border: none;
    /* height: 59px; */
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    padding: 21px 0 21px 23px;
  }
`;

const NewButton = styled(Button)`
  width: calc(70px + 9vw);
  height: 59px;
  background: #4d6ce1;
  box-shadow: 0px 5px 15px rgba(116, 104, 255, 0.2);
  border-radius: 5px;
  margin-left: 14px;
  p {
    color: #fff;
  }
  :hover {
    background: #fff;
  }
  :hover p {
    color: #4d6ce1;
  }
`;

const Newsletter = ({ a1190 }) => {
  return (
    <Fon>
      <Content a1190={a1190}>
        <Title>
          <h5>Sign up for newsletter</h5>
          <p>
            Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
            alterum.
          </p>
        </Title>
        <Form>
          <input type="text" placeholder="Email address" />
          <NewButton>
            <p>Save me</p>
          </NewButton>
        </Form>
      </Content>
    </Fon>
  );
};

export default Newsletter;
