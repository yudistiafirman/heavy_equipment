import React, { useState, useLayoutEffect, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EllipseOrange from "./assets/EllipseOrange.png";
import EllipseBlue from "./assets/EllipseBlue.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../Default";
import { cardDescSlicer, cardTitleSlicer } from "../utils/funcHelper";

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
const PelatihanPopuler = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [width, height] = useWindowSize();
  const [popularData, setPopularData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getPelatihanPopular();
  }, []);

  const getPelatihanPopular = () => {
    axios.get(`${apiUrl}/pelatihan/popular`).then((response) => {
      setPopularData(response.data.data);
    });
  };
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
            {popularData.map((v, i) => {
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
                          backgroundImage: `url(${apiUrl}/${v.image})`,
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
                            navigate(
                              "/info/detailPelatihan/" + v.id + "/" + v.name
                            )
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
