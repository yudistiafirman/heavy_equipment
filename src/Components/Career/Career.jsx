import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import CareerPict from "./assets/career.jpg";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { apiUrl } from "../../Default";
import { useNavigate } from "react-router-dom";
import { cardDescSlicer, cardTitleSlicer } from "../utils/funcHelper";
import { getAllJob, getCategories } from "../../AsyncActions/JobActions";

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
const Career = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [pageHoverIdx, SetPageHoverIdx] = useState(0);
  const [width, height] = useWindowSize();
  const [infoCareer, setInfoCareer] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllvacancies();
    getJobCategory();
  }, [inputSearch, categoryValue]);
  const getAllvacancies = async () => {
    try {
      const response = await getAllJob(inputSearch, "", "", categoryValue);
      setInfoCareer(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJobCategory = async () => {
    try {
      const response = await getCategories();
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

  const onSearchVacancy = (e) => {
    setInputSearch(e.target.value);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    vertical: width <= 490 ? true : false,
    verticalSwiping: width <= 490 ? true : false,
    slidesToShow: width <= 490 ? 6 : width <= 725 ? 2 : width <= 967 ? 3 : 3,
    rows: infoCareer.length <= 6 ? 1 : width <= 967 ? 1 : 2,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    swipeToSlide: true,
    afterChange: (index) => SetPageHoverIdx(index),
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
          backgroundImage: `url(${CareerPict})`,
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
              <div className="heroOrangeText">KARIR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoContentContainer">
        <div className="infoContainer">
          <div style={{ marginBottom: "40px" }} className="latarTitle">
            Semua Karir
          </div>
          {infoCareer && infoCareer.length > 0 ? (
            <Slider {...settings}>
              {infoCareer.length > 0 &&
                infoCareer.map((v, i) => {
                  return (
                    <div key={i}>
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
                              backgroundImage: `url(${BASE_URL}/${v.file_url})`,
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
                          {cardDescSlicer(v.description)}
                        </div>
                        <div
                          style={{ padding: "41px 0" }}
                          className={
                            cardIdx === i
                              ? "pelatihanCardBtn active"
                              : "pelatihanCardBtn "
                          }
                        >
                          <div className="cardBtnTitle">
                            <a
                              style={{
                                color: cardIdx === i ? "#FDC232" : "#000000",
                                cursor: "pointer",
                              }}
                              onClick={() => navigate("detailCareer/" + v.id)}
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
              <div className="latarTitle">Pencarian Tidak Ditemukan</div>
            </div>
          )}
        </div>
        <div className="inputPencarianContainer">
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Cari Karir
            </InputLabel>
            <FilledInput
              type="text"
              value={inputSearch}
              onChange={onSearchVacancy}
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
              value={categoryValue}
              label="Filter Berdasar Kategori"
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
        </div>
      </div>
    </div>
  );
};

export default Career;
