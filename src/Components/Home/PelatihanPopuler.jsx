import React, { useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EllipseOrange from "./assets/EllipseOrange.png";
import EllipseBlue from "./assets/EllipseBlue.png";
import { useNavigate } from "react-router-dom";
import { cardDescSlicer, cardTitleSlicer } from "../utils/funcHelper";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const PelatihanPopuler = ({ training }) => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [width, height] = useWindowSize();
  let navigate = useNavigate();

  const settings = {
    slidesToShow: width <= 969 ? 1 : width <= 1200 ? 2 : 3,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <div className="pelatihanContainer">
      <div className="pelatihanInnerContainer">
        <div className="servicesTitle">
          <div className="marginSeparator" />
          <div className="titleContainer">
            <div className="titleForYou">Pelatihan populer kami</div>
            <p className="forYouDesc">
              Berbagai perusahaan mempercayakan sumber dayanya pada
              pelatihan-pelatihan esensial kami
            </p>
          </div>
        </div>
        <div className="pelatihanCardContainer">
          <Slider {...settings}>
            {training &&
              training.length > 0 &&
              training.map((v, i) => {
                return (
                  <div key={i}>
                    <div
                      className="pelatihanCardInner"
                      onMouseEnter={() => setCardContentIdx(i)}
                      style={{
                        boxShadow:
                          cardIdx === i
                            ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                            : "",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <div className="imageContainer">
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${BASE_URL}/${v.training_image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div
                        className="pelatihanCardTitle"
                        style={{
                          color: cardIdx === i ? "#FDC232" : "#000000",
                        }}
                      >
                        {cardTitleSlicer(v.name)}
                      </div>
                      <div className="pelatihanCardDesc">
                        {cardDescSlicer(v.descriptions)}
                      </div>
                      <div className="pelatihanCardBtn">
                        <div className="cardBtnTitle">
                          <a
                            onClick={() =>
                              navigate("/info/detailPelatihan/" + v.id)
                            }
                            style={{
                              textDecoration: "none",
                              color: cardIdx === i ? "#FDC232" : "#000000",
                              cursor: "pointer",
                            }}
                          >
                            Lihat Detail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div></div>
      <img className="ellipseOrange" width="270px" src={EllipseOrange} />
      <img className="ellipseBlue" width="212px" src={EllipseBlue} />
    </div>
  );
};

export default PelatihanPopuler;
