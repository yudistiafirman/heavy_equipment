import React, { useState, useLayoutEffect, useEffect } from "react";
import GaleriPict from "./assets/Galeri.jpg";
import "./Galeri.css";
import Slider from "react-slick";
import { Dialog, Grid } from "@mui/material";
import { getAllTrainingGallery } from "../../AsyncActions/trainingGalleryActions";
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

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
const Galeri = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [showImage, SetShowImages] = useState(null);
  const [width, height] = useWindowSize();
  const [pageHoverIdx, SetPageHoverIdx] = useState(0);
  const [galeriContent, setGaleriContent] = useState([]);

  useEffect(() => {
    getAllTrainingGalleryData();
  }, []);

  const getAllTrainingGalleryData = async () => {
    try {
      const response = await getAllTrainingGallery("", "", "", "");
      setGaleriContent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,

    speed: 500,
    slidesToShow: width <= 600 ? 3 : width <= 739 ? 3 : width <= 967 ? 3 : 3,
    vertical: width <= 967 ? true : false,
    verticalSwiping: width <= 967 ? true : false,
    rows: width <= 600 ? 1 : width <= 739 ? 1 : width <= 967 ? 1 : 2,
    slidesToScroll: 1,
    afterChange: (index) => SetPageHoverIdx(index),
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => (
      <div
        onClickCapture={() => SetPageHoverIdx(i)}
        style={{
          width: "25px",
          height: "25px",
          color: i === pageHoverIdx ? "#FFFFFF" : "#BCBCBC",
          border: "1px #BCBCBC solid",
          margin: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          backgroundColor: i === pageHoverIdx ? "#FDC232" : "",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${GaleriPict})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">GALERI</div>
              <div className="heroOrangeText">HEC</div>
            </div>
          </div>
        </div>
      </div>
      <div className="galeriContent">
        {galeriContent.length > 0 ? (
          <Slider className="galeriCardSlider" {...settings}>
            {galeriContent.map((v, i) => {
              return (
                <div
                  style={{ border: "1px solid black" }}
                  onClick={() => SetShowImages(`${BASE_URL}/${v.file_url}`)}
                  onMouseEnter={() => setCardContentIdx(i)}
                >
                  <div className="galeriCard">
                    <div
                      className="galeriCardImgContainer"
                      style={{
                        backgroundImage: `url(${BASE_URL}/${v.file_url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="galeriCardTitleContainer">
                      <div
                        style={{
                          color: cardIdx === i ? "#FDC232" : "#000000",
                        }}
                        className="galeriCardTitle"
                      >
                        {v.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="latarTitle">Data Belum Ditemukan</div>
          </div>
        )}
      </div>
      {showImage && (
        <Dialog
          // title={"POST"}
          scroll={"body"}
          open={showImage ? true : false}
          onClose={() => {
            SetShowImages(null);
          }}
          hideActions={true}
        >
          <Grid container direction="row" justify="center">
            <img alt="#" style={{ maxWidth: "100%" }} src={showImage}></img>
          </Grid>
        </Dialog>
      )}
    </div>
  );
};

export default Galeri;
