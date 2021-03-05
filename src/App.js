import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "react-responsive";

import Nav from "./pages/nav.jsx";
import Slider from "./pages/slider.jsx";
import Customers from "./pages/customers.jsx";
import PlanManage from "./pages/plan-manage.jsx";
import Features from "./pages/features.jsx";
import Quoters from "./pages/quotes.jsx";
import Stats from "./pages/stats.jsx";
import GetStarted from "./pages/get-started.jsx";
import Faq from "./pages/faq.jsx";
import Newsletter from "./pages/newsletter.jsx";

const Global = createGlobalStyle`
* {
  font-family: Quicksand;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
ul {
    padding-inline-start: 0;
  }
  li {
    list-style-type: none;
    cursor: pointer;
  }

`;

const StyleApp = styled.div`
  max-width: 1440px;
  user-select: none;
  margin: 0px auto;

  .flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .space-between {
    justify-content: space-between;
  }

  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }
`;

const App = () => {
  const [activeLi, setActiveLi] = useState(1);
  const a1190 = useMediaQuery({ query: "(min-width: 1190px)" });
  const a800 = useMediaQuery({ query: "(min-width: 800px)" });
  // console.log(a1190);
  return (
    <>
      <Global />
      <StyleApp>
        <Nav
          header
          activeLi={activeLi}
          setActiveLi={setActiveLi}
          a1190={a1190}
          a800={a800}
        />
        <Slider heroimage />
        <Customers a1190={a1190} />
        <PlanManage a1190={a1190} a800={a800} />
        <Features a800={a800} />
        <Stats />
        <Slider blog a1190={a1190} />
        <Quoters a1190={a1190} a800={a800} />
        <Faq />
        <GetStarted />
        <Newsletter a1190={a1190} />
        <Nav
          footer
          activeLi={activeLi}
          setActiveLi={setActiveLi}
          a1190={a1190}
          a800={a800}
        />
      </StyleApp>
    </>
  );
};

export default App;
