import React, { useEffect, useState } from "react";
import "./Info.css";
import { FaShareAlt } from "react-icons/fa";
import CheckIcon from "./assets/iconCheck.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { cardTitleSlicer } from "../utils/funcHelper";
import "moment/locale/id";
import {
  getAllTraining,
  getOneTraining,
} from "../../AsyncActions/TrainingActions";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
const DetailPelatihan = () => {
  const [pelatihanData, setPelatihanData] = useState([]);
  const [pelatihanPopular, setPelatihanPopular] = useState([]);
  const { pelatihanId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPelatihanData();
    getPelatihanPopular();
  }, [pelatihanId]);

  const getPelatihanData = async () => {
    try {
      const response = await getOneTraining(pelatihanId);
      const nilaiplus = response.data.data.plusValues.join(",").split(",");
      console.log(nilaiplus);
      setPelatihanData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPelatihanPopular = async () => {
    try {
      const response = await getAllTraining("", "", "", "", "", 1);
      if (response.data.data) {
        const popularData = response.data.data.filter(
          (v) => v.id !== Number(pelatihanId)
        );
        setPelatihanPopular(popularData);
      }
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
          <div onClick={() => navigate("/info")} className="routingInActive">
            Info Pelatihan
          </div>
          <div className="routingInActive">/</div>
          <div style={{ color: "#000000" }} className="routingInActive">
            {pelatihanData.name}
          </div>
        </div>

        <div className="detailContentContainer">
          {pelatihanData.isFull == 1 ? (
            <div style={{ marginLeft: "0" }} className="fullbooked">
              FULL BOOKED
            </div>
          ) : (
            <div style={{ marginLeft: "0" }} className="open">
              OPEN
            </div>
          )}
          <div className="detailTitleContainer">
            <div className="detailTitle">{pelatihanData.name}</div>
            <div className="titleIconContainer">
              <CopyToClipboard
                onCopy={() => alert("Success Copy to Clipboard")}
                text={window.location.href}
              >
                <FaShareAlt />
              </CopyToClipboard>
            </div>
          </div>
          <div style={{ minWidth: "20%" }} className="titleCategory">
            <div>{pelatihanData.category_name}</div>
          </div>
          <div style={{ width: "30%" }} className="titleCategory">
            <div>
              {" "}
              {`${moment(pelatihanData.start_date).format(
                "Do MMMM YYYY"
              )} - ${moment(pelatihanData.end_date).format("Do MMMM YYYY")}`}
            </div>
          </div>
          <div className="detailImage">
            <div></div>
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${BASE_URL}/${pelatihanData.file_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
            ></div>
          </div>
          <div style={{ textAlign: "justify" }} className="detailDesc">
            {pelatihanData.descriptions}
          </div>
          <div className="advantagesPelatihanContainer">
            <div className="advantagesPelatihanInnerContainer">
              <div className="nilaiPlusContainer">
                <div className="nilaiPlustitle">Nilai Plus Pelatihan HEC</div>
                {pelatihanData.plusValues &&
                  pelatihanData.plusValues.length > 0 &&
                  pelatihanData.plusValues
                    .join(",")
                    .split(",")
                    .map((v) => {
                      return (
                        <div key={v.id} className="checkListContainer">
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
              <div className="bestOffer">
                <div className="bestOfferTitle">Daftarkan Segera</div>
                <div className="hubungiBtn">
                  <a href="tel:+68112131122" className="hubungiBtnTitle">
                    HUBUNGI KAMI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lihatPelatihanPopular">
        <div className="lihatPelatihanInnerContainer">
          <div className="latarTitle">Pelatihan Lainnya</div>
          {pelatihanPopular.length > 0 &&
            pelatihanPopular.map((v, i) => {
              return (
                <div
                  onClick={() => navigate("/info/detailPelatihan/" + v.id)}
                  className="lihatPelatihanContent"
                >
                  {cardTitleSlicer(v.name)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DetailPelatihan;
