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
import { Dialog } from "@mui/material";
import axios from "axios";
import { apiUrl } from "../../Default";
import { useNavigate } from "react-router-dom";
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
const Career = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const [pageHoverIdx, SetPageHoverIdx] = useState(0);
  const [width, height] = useWindowSize();
  const [filter, SetFilter] = useState(false);
  const [infoCareer, setInfoCareer] = useState([]);
  const [category, setCategory] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllvacancies("", "", "");
    getCategory();
  }, []);
  const getAllvacancies = (searchValue, date, category) => {
    axios
      .get(
        `${apiUrl}/vacancies/all?&name=${searchValue}&date=${date}&category=${category}`
      )
      .then((response) => {
        setInfoCareer(response.data.data);
      });
  };

  const getCategory = () => {
    axios.get(`${apiUrl}/vacancies/category`).then((response) => {
      const categoryName = response.data.data.map((v, i) => ({
        value: false,
        category: v.category_name,
      }));
      setCategory(categoryName);
    });
  };
  const onClickCategory = useCallback(
    (idx, name) => {
      const arrCategory = [];
      for (var i = 0; i < category.length; i++) {
        if (i === idx) {
          category[i].value = true;
        } else {
          category[i].value = false;
        }
        arrCategory.push(category[i]);
      }
      setCategory(arrCategory);
    },
    [category]
  );

  const onApplyFilter = () => {
    const categoryName = category.filter((v, i) => v.value === true);
    getAllvacancies("", "", categoryName[0].category);
    SetFilter(false);
  };

  const onSearchVacancy = (e) => {
    setInputSearch(e.target.value);
    getAllvacancies(e.target.value, "", "");
  };

  const resetPencarian = () => {
    setInputSearch("");
    getAllvacancies("", "", "");
    getCategory();
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
          {infoCareer.length > 0 ? (
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
                          {cardTitleSlicer(v.job_name)}
                        </div>
                        <div className="pelatihanCardDesc">
                          {cardDescSlicer(v.job_description)}
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
                              onClick={() =>
                                navigate(
                                  "detailCareer/" + v.id + "/" + v.job_name
                                )
                              }
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
              onFocus={resetPencarian}
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

          <button
            onClick={() => SetFilter(true)}
            className="filterPencarianBtnMobile"
          >
            FILTER PENCARIAN
          </button>

          <Dialog open={filter} onClose={() => SetFilter(false)}>
            <div className="filterModal">
              <div className="filterModalTitle">
                <div style={{ marginLeft: "16px" }} className="titlePencarian">
                  Filter Pencarian
                </div>
                <AiOutlineClose
                  onClick={() => SetFilter(false)}
                  style={{ marginRight: "16px", cursor: "pointer" }}
                />
              </div>
              <div className="optionsFilterModal">
                <div className="categoryContainer">
                  <div
                    style={{
                      marginTop: "24px",
                      marginLeft: "16px",
                      marginBottom: "15px",
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "400",
                      fontFamily: "'inter',sans-serif",
                    }}
                  >
                    Kategori
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    {category.map((v, i) => {
                      return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Checkbox
                            onClick={() => onClickCategory(i, v.category)}
                            checked={v.value === true}
                          />
                          <div
                            style={{
                              color: "#000000",
                              fontSize: "14px",
                              fontWeight: "400",
                              fontFamily: "'inter',sans-serif",
                            }}
                          >
                            {v.category}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div onClick={onApplyFilter} className="hubungiBtn">
                  <div className="hubungiBtnTitle">TERAPKAN</div>
                </div>
              </div>
            </div>
          </Dialog>
          <div className="filterPencarianContainer">
            <div className="titlePencarian">
              <div style={{ marginLeft: "16px" }}>Filter Pencarian</div>
            </div>
            <div className="categoryContainer">
              <div
                style={{
                  marginTop: "24px",
                  marginLeft: "16px",
                  marginBottom: "15px",
                  color: "#000000",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "'inter',sans-serif",
                }}
              >
                Kategori
              </div>
              <div style={{ marginLeft: "5px" }}>
                {category.map((v, i) => {
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onClick={() => onClickCategory(i, v.category)}
                        checked={v.value === true}
                      />
                      <div
                        style={{
                          color: "#000000",
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "'inter',sans-serif",
                        }}
                      >
                        {v.category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              style={{ marginLeft: "16px", marginTop: "50px" }}
              onClick={onApplyFilter}
              className="hubungiBtn"
            >
              <div className="hubungiBtnTitle">TERAPKAN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
