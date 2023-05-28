import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import PelatihanPict from "./assets/Pelatihan.jpg";

import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import { MenuItem, Select } from "@mui/material";
import { cardDescSlicer, cardTitleSlicer } from "../utils/funcHelper";
import { useNavigate } from "react-router-dom";
import {
  getAllTraining,
  getTrainingCategories,
} from "../../AsyncActions/TrainingActions";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
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

const InfoPelatihan = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [pageHoverIdx, SetPageHoverIdx] = useState(0);
  const [width, height] = useWindowSize();
  const [startDate, SetStartDate] = useState(null);
  const [infoPelatihanContent, setInfoPelatihanContent] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const slide = useRef();
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const navigate = useNavigate();
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    vertical: width <= 490 ? true : false,
    verticalSwiping: width <= 490 ? true : false,
    slidesToShow: width <= 490 ? 6 : width <= 725 ? 2 : width <= 967 ? 3 : 3,
    rows: infoPelatihanContent.length <= 6 ? 1 : width <= 967 ? 1 : 2,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    swipeToSlide: true,
    beforChange: (index) => SetPageHoverIdx(index),
    afterChange: (index) => SetPageHoverIdx(index),
    customPaging: (i) => (
      <div
        onClick={() => SetPageHoverIdx(i)}
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

  useEffect(() => {
    getAllPelatihan();
    getCategoriesData();
  }, [searchInput, categoryValue, startDate]);
  const getAllPelatihan = async () => {
    try {
      const response = await getAllTraining(
        searchInput,
        "",
        "",
        categoryValue,
        startDate ? dayjs(startDate).format() : startDate
      );
      setInfoPelatihanContent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoriesData = async () => {
    try {
      const response = await getTrainingCategories();
      const categories = [{ id: "", category_name: "Semua" }];
      categories.push(...response.data.data);

      setCategory(categories);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCategories = (e) => {
    setCategoryValue(e.target.value);
  };

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const onChangeStartDate = (newDate) => {
    SetStartDate(newDate);
  };

  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${PelatihanPict})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">INFO</div>
              <div className="heroOrangeText">PELATIHAN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoContentContainer">
        <div className="infoContainer">
          <div style={{ marginBottom: "40px" }} className="latarTitle">
            Semua Pelatihan
          </div>
          {infoPelatihanContent.length > 0 ? (
            <Slider {...settings}>
              {infoPelatihanContent.map((v, i) => {
                return (
                  <div ref={slide} key={i}>
                    <div
                      onMouseEnter={() => setCardContentIdx(i)}
                      className="infoPelatihanCard"
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
                      {v.isFull == 1 ? (
                        <div className="fullbooked">FULL BOOKED</div>
                      ) : (
                        <div className="open">OPEN</div>
                      )}
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
                      <div
                        className={
                          cardIdx === i
                            ? "pelatihanCardBtn active"
                            : "pelatihanCardBtn "
                        }
                      >
                        <div className="cardBtnTitle">
                          <a
                            onClick={() =>
                              navigate("/info/detailPelatihan/" + v.id)
                            }
                            style={{
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
        <div className="inputPencarianContainer">
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Cari Pelatihan
            </InputLabel>
            <FilledInput
              type="text"
              value={searchInput}
              onChange={onChangeSearch}
              // onChange={onChangePencarian}
              style={{ height: "56px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <FaSearch />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ marginTop: 2 }} fullWidth>
            <InputLabel>Filter Berdasar Kategori</InputLabel>
            <Select
              onChange={onChangeCategories}
              label="Filter Berdasar Kategori"
              value={categoryValue}
            >
              {category &&
                category.length > 0 &&
                category.map((v, i) => {
                  return (
                    <MenuItem key={i} value={v.id}>
                      {v.category_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: 2 }} fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={onChangeStartDate}
                value={startDate}
                defaultValue={dayjs()}
              />
            </LocalizationProvider>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default InfoPelatihan;
