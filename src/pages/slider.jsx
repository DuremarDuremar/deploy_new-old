import React, { useState } from "react";
import { Button, TitleText } from "../components/components";
import FonImage from "../img/image.png";
import BlogImg1 from "../img/blog1.jpg";
import BlogImg2 from "../img/blog2.jpg";
import BlogImg3 from "../img/blog3.jpg";
import styled from "styled-components";

const Fon = styled.div`
  width: 100%;
  max-width: 1440px;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-image: url(${FonImage});
  background-size: ${(props) => (props.heroimage ? "cover" : "0")};
  background-color: ${(props) => (props.blog ? "#F5F8FF" : "")};
`;
const Wrapper = styled.div`
  max-width: 958px;
  margin: 0px auto;
  height: ${(props) =>
    props.heroimage ? "570px" : props.a1190 ? "865px" : "1000px"};
  position: relative;
  .fa-long-arrow-alt-left {
    position: absolute;
    top: ${(props) => (props.a1190 ? "60%" : "70%")};
    transform: translateY(-50%);
    left: ${(props) => (props.a1190 ? "-5%" : "5%")};
    color: #a8b4e5;
    cursor: pointer;
  }
  .fa-long-arrow-alt-right {
    position: absolute;
    top: ${(props) => (props.a1190 ? "60%" : "70%")};
    transform: translateY(-50%);
    right: ${(props) => (props.a1190 ? "-5%" : "5%")};
    color: #a8b4e5;
    cursor: pointer;
  }
  iframe {
    width: 400px;
    height: 250px;
    padding: 10px 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid #697ca6;
    border-right: 5px solid #697ca6;
    border-top: 15px solid #697ca6;
    border-bottom: 15px solid #697ca6;
    background-color: #697ca6;
    border-radius: 20px;
  }
`;

const TitleTextBlog = styled(TitleText)`
  padding-top: 63px;
  padding-left: 67px;
  font-weight: 400;
  margin-top: ${(props) => (props.a1190 ? "0" : "25px")};

  h1 {
    font-size: 36px;
    line-height: 45px;
    text-align: left;
    width: ${(props) => (props.a1190 ? "100%" : "408px")};
    margin: 0px auto;
  }
  p {
    padding-top: 32px;
    width: 408px;
    text-align: left;
    font-size: 14px;
    color: #8d96bd;
  }
`;

const CirclePlay = styled.div`
  width: 52px;
  height: 52px;
  background-color: #fff;
  display: block;
  margin: 20px auto 0;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  i {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    color: #5e81ff;
  }
`;
const ContentSlider = styled.div`
  max-width: 958px;
  height: 394px;
  background-color: #fff;
  margin-top: 92px;
  display: ${(props) => (props.a1190 ? "flex" : "block")};
  height: ${(props) => (props.a1190 ? "394px" : "700px")};
`;
const ContentIlustrations = styled.div`
  display: grid;
  display: ${(props) => (props.a1190 ? "grid" : "flex")};
  grid-template-columns: 237px 123px;
  padding: 64px 25px 64px 25px;
  grid-gap: 16px;
  max-height: 264px;

  .img-wrapper {
    z-index: 2;
    /* display: grid; */
    cursor: pointer;
    text-align: right;
    background-color: ${(props) => (props.a1190 ? "#35aaff" : "#fff")};
    position: relative;
    border-radius: 10%;

    ${(props) =>
      !props.a1190 &&
      `
    margin: 0 auto;
  `}

    /* margin: 0px auto; */
    :first-child {
      width: 237px;
      height: 264px;
      grid-row: span 2 / auto;
    }
    :not(first-child) {
      width: ${(props) => (props.a1190 ? "122px" : "237px")};
      height: ${(props) => (props.a1190 ? "122px" : "264px")};
    }

    :hover img {
      opacity: ${(props) => (props.a1190 ? "0.5" : "1")};
      border-radius: 10%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transform: scale();
      transition: all ease-in-out 0.25s;
      :hover {
        position: ${(props) => (props.a1190 ? "static" : "relative")};
        height: ${(props) => (props.a1190 ? "100%" : "114%")};
        width: ${(props) => (props.a1190 ? "100%" : "114%")};
        top: 10px;
        right: 7%;

        /* z-index: 3; */
      }
    }
    :hover .lupa {
      opacity: 1;
    }

    .lupa {
      display: ${(props) => (props.a1190 ? "block" : "none")};
      width: 65.02px;
      height: 64.95px;
      background-color: #fff;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 100%;
      opacity: 0;
      i {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        right: 37%;
        color: #a7aac6;
      }
    }
  }
`;

const ImageBlog = styled.div`
  display: block;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  right: 5%;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ModalBlog = styled.div`
  position: absolute;
  border-radius: 10%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #7382a3;
  opacity: 0.3;
  cursor: pointer;
`;

const ContentText = styled.div``;

const ContentButton = styled.div`
  display: ${(props) => (props.a1190 ? "block" : "flex")};
  justify-content: center;
  padding-left: ${(props) => (props.a1190 ? "67px" : "0")};
  padding-top: 31px;
`;

const ButtonLong = styled(Button)`
  background: #ffffff;
  width: 211px;
  margin-left: 8px;
  p {
    color: #a6b6da;
  }
`;

const Slider = ({ ...props }) => {
  const [enlarge, setenlarge] = useState(null);
  const [play, setPlay] = useState(false);
  const [image, setimage] = useState([BlogImg1, BlogImg2, BlogImg3]);

  const largeImg = (enlarge) => {
    return <img src={enlarge} alt="enlarge" />;
  };

  // слайдер
  const ImageAction = (num) => {
    const minus = image.map((item, index) => {
      if (index - 1 < 0) {
        return image[image.length - 1];
      } else {
        return image[index - 1];
      }
    });
    const plus = image.map((item, index) => {
      if (index + 1 > image.length - 1) {
        return image[0];
      } else {
        return image[index + 1];
      }
    });
    num ? setimage(plus) : setimage(minus);
  };

  return (
    <Fon {...props}>
      <Wrapper {...props} id={props.blog ? "2" : null}>
        {props.blog ? (
          <i
            className="fas fa-long-arrow-alt-left fa-lg"
            onClick={() => ImageAction(false)}
          ></i>
        ) : null}
        <TitleText {...props}>
          <h3>{props.heroimage ? "PLAN YOUR LIFE" : "OUR RESOURCES"}</h3>
          <h1>
            {props.heroimage
              ? "Increase your productivity"
              : "Start reading our blog"}
          </h1>
          {props.heroimage && (
            <>
              {!play ? (
                <p>
                  Brute laoreet efficiendi id his, ea illum nonumes luptatum
                  pro. Usu atqui laudem an, insolens gubergren similique est cu.
                  Et vel modus congue vituperata.
                </p>
              ) : (
                <iframe
                  width="400"
                  height="250"
                  src="https://www.youtube.com/embed/ZVjo86OEeFc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </>
          )}
        </TitleText>
        {props.heroimage ? (
          <CirclePlay onClick={() => setPlay(!play)}>
            {!play ? (
              <i className="fas fa-play fa-2x"></i>
            ) : (
              <i className="far fa-stop-circle fa-2x"></i>
            )}
          </CirclePlay>
        ) : null}
        {props.blog ? (
          <ContentSlider {...props}>
            <ContentIlustrations {...props}>
              <div
                className="img-wrapper"
                onClick={() => props.a1190 && setenlarge(image[0])}
              >
                <img src={image[0]} alt="1" />
                <div className="lupa">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div
                className="img-wrapper"
                onClick={() => props.a1190 && setenlarge(image[1])}
              >
                <img src={image[1]} alt="2" />
                <div className="lupa">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div
                className="img-wrapper"
                onClick={() => props.a1190 && setenlarge(image[2])}
              >
                <img src={image[2]} alt="3" />
                <div className="lupa">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </ContentIlustrations>

            {!enlarge ? (
              <ContentText>
                <TitleTextBlog {...props}>
                  <h1>How to start planning</h1>
                  <p>
                    Quidam vocibus eum ne, erat consectetuer voluptatibus ut
                    nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                    diceret persecuti. Natum petentium principes mei ea. Tota
                    everti periculis vis ei, quas tibique pro at, eos ut decore
                    ...
                  </p>
                </TitleTextBlog>
                <ContentButton {...props}>
                  <Button>
                    <p>Read now</p>
                  </Button>
                  <ButtonLong>
                    <p>Add to your bookmarks</p>
                  </ButtonLong>
                </ContentButton>
              </ContentText>
            ) : null}
          </ContentSlider>
        ) : null}
        {props.blog && enlarge && props.a1190 ? (
          <>
            <ModalBlog onClick={() => setenlarge(null)}></ModalBlog>
            <ImageBlog>{largeImg(enlarge)}</ImageBlog>
          </>
        ) : null}
        {props.blog ? (
          <i
            className="fas fa-long-arrow-alt-right fa-lg"
            onClick={() => ImageAction(true)}
          ></i>
        ) : null}
      </Wrapper>
    </Fon>
  );
};

export default Slider;

// style={{
//   background: `url(${!props.a1190 && image[1]}) no-repeat`,
// }}
