import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
import CheckIcon from "../InfoPelatihan/assets/iconCheck.png";
import { getOneJob } from "../../AsyncActions/JobActions";
import { Box, Chip, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
const CareerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pekerjaanDetail, setPekerjaanDetail] = useState({});

  useEffect(() => {
    getVacanciesDetail();
  }, [id]);
  const getVacanciesDetail = async () => {
    try {
      const response = await getOneJob(id);
      setPekerjaanDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="detailPelatihanContainer">
      <div className="detailInnerContainer">
        <div className="routingDetail">
          <div onClick={() => navigate("/")} className="routingInActive">
            Home
          </div>
          <div className="routingInActive">/</div>
          <div onClick={() => navigate("/career")} className="routingInActive">
            Karir
          </div>
          <div className="routingInActive">/</div>
          <div style={{ color: "#000000" }} className="routingInActive">
            {pekerjaanDetail.name}
          </div>
        </div>

        <div className="detailContentContainer">
          <div className="detailTitleContainer">
            <div className="detailTitle">{pekerjaanDetail.name}</div>
            <div className="titleIconContainer">
              <CopyToClipboard
                onCopy={() => alert("Success Copy to Clipboard")}
                text={window.location.href}
              >
                <FaShareAlt />
              </CopyToClipboard>
            </div>
          </div>
          <div style={{ width: "30%" }} className="titleCategory">
            <div>
              {" "}
              {`akhir pengiriman cv tanggal ${moment(
                pekerjaanDetail.last_submission
              ).format("Do MMMM YYYY")}`}
            </div>
          </div>
          <div className="detailImage">
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${BASE_URL}/${pekerjaanDetail.file_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
            ></div>
          </div>
          <div style={{ textAlign: "justify" }} className="detailDesc">
            {pekerjaanDetail.description}
          </div>
          <div className="advantagesPelatihanContainer">
            <div className="advantagesPelatihanInnerContainer">
              <div className="nilaiPlusContainer">
                <div className="nilaiPlustitle">Persyaratan</div>
                {pekerjaanDetail.requirements &&
                  pekerjaanDetail.requirements.length > 0 &&
                  pekerjaanDetail.requirements.map((v) => {
                    return (
                      <div
                        style={{ alignItems: "center" }}
                        className="checkListContainer"
                      >
                        <img
                          src={CheckIcon}
                          style={{
                            width: "16px",
                            height: "16px",
                            marginLeft: "7px",
                            marginRight: "5px",
                          }}
                        />
                        <div
                          style={{ textAlign: "justify" }}
                          className="checkDesc"
                        >
                          {v}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10 }} />
          <div className="advantagesPelatihanContainer">
            <div className="advantagesPelatihanInnerContainer">
              <div className="nilaiPlusContainer">
                <div className="nilaiPlustitle">Tanggung Jawab</div>
                {pekerjaanDetail.responsibilities &&
                  pekerjaanDetail.responsibilities.length > 0 &&
                  pekerjaanDetail.responsibilities.map((v) => {
                    return (
                      <div
                        style={{ alignItems: "center" }}
                        className="checkListContainer"
                      >
                        <img
                          src={CheckIcon}
                          style={{
                            width: "16px",
                            height: "16px",
                            marginLeft: "7px",
                            marginRight: "5px",
                          }}
                        />
                        <div
                          style={{ textAlign: "justify" }}
                          className="checkDesc"
                        >
                          {v}
                        </div>
                      </div>
                    );
                  })}

                <div className="checkDesc">
                  Jangan lupa untuk melampirkan CV terbaru anda dan rekrutmen
                  ini tanpa dipungut biaya sepeserpun
                </div>
              </div>
              <div className="bestOffer">
                <div className="hubungiBtn">
                  <a
                    href="mailto:hequipmentcentre@gmail.com"
                    className="hubungiBtnTitle"
                  >
                    Lamar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lihatPelatihanPopular">
        <div className="lihatPelatihanInnerContainer">
          <>
            <Typography
              sx={{ fontWeight: "800", color: "var(--secondary-text)" }}
              component="h2"
              variant="subtitle1"
            >
              Lokasi Pekerjaan :
            </Typography>
            <Box sx={{ display: "flex" }}>
              <LocationOnIcon color="error" />
              <div style={{ margin: "4px" }} />
              <Typography
                sx={{ fontWeight: "500", color: "var(--text)" }}
                component="h2"
                variant="subtitle1"
              >
                {pekerjaanDetail.location}
              </Typography>
            </Box>
          </>
          <div style={{ margin: "4px" }} />
          <>
            <Typography
              sx={{ fontWeight: "800", color: "var(--secondary-text)" }}
              component="h2"
              variant="subtitle1"
            >
              Kisaran Gaji :
            </Typography>
            <Typography
              sx={{ fontWeight: "500", color: "var(--text)" }}
              component="h2"
              variant="subtitle1"
            >
              {pekerjaanDetail.salary_range}
            </Typography>
          </>
          <div style={{ margin: "4px" }} />
          <>
            <Typography
              sx={{ fontWeight: "800", color: "var(--secondary-text)" }}
              component="h2"
              variant="subtitle1"
            >
              Tipe Pekerjaan :
            </Typography>
            <div style={{ margin: "4px" }} />
            <Chip color="primary" label={pekerjaanDetail.type_name} />
          </>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
