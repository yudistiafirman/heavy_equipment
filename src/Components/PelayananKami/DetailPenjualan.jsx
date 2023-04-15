import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";
import { apiUrl } from "../../Default";
import { cardTitleSlicer } from "../utils/funcHelper";
const DetailPenjualan = () => {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const [dataAlat, setDataAlat] = useState([]);
  useEffect(() => {
    getDetailData();
    getAllJasa();
  }, [id, name]);

  const getDetailData = () => {
    axios.get(`${apiUrl}/alat/detail?id=${id}`).then((response) => {
      setDataDetail(response.data.data);
    });
  };
  const getAllJasa = () => {
    axios.get(`${apiUrl}/alat/all?`).then((response) => {
      setDataAlat(response.data.data);
    });
  };

  return (
    dataDetail.length > 0 && (
      <div className="detailPelatihanContainer">
        <div className="detailInnerContainer">
          <div style={{ width: "60%" }} className="routingDetail">
            <div onClick={() => navigate("/")} className="routingInActive">
              Home
            </div>
            <div className="routingInActive">/</div>
            <div
              onClick={() => navigate("/penjualan")}
              className="routingInActive"
            >
              Penjualan Sparepart Alat Berat
            </div>
            <div className="routingInActive">/</div>
            <div style={{ color: "#000000" }} className="routingInActive">
              {name}
            </div>
          </div>

          <div className="detailContentContainer">
            <div className="detailTitleContainer">
              <div className="detailTitle">{dataDetail[0].title_alatberat}</div>
              <div className="titleIconContainer">
                <CopyToClipboard
                  onCopy={() => alert("Success Copy to Clipboard")}
                  text={window.location.href}
                >
                  <FaShareAlt />
                </CopyToClipboard>
              </div>
            </div>
            <div style={{ marginBottom: "40px" }}>
              {dataDetail[0].sparepart.map((v, i) => {
                return (
                  <div style={{ width: "100%" }} className="accordion">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<AiFillCaretDown />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          style={{
                            fontSize: "18px",
                            fontWeight: "800",
                            color: "#6B7280",
                            fontFamily: '"inter",sans-serif',
                            lineHeight: "24.3px",
                          }}
                        >
                          {v.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            color: "#6B7280",
                            fontFamily: '"inter",sans-serif',
                            lineHeight: "22px",
                          }}
                          className="latarContent"
                        >
                          {v.descriptions}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
            </div>

            <div className="detailDesc">
              {dataDetail[0].descriptions_alatberat}
            </div>
            <div style={{ width: "100%" }} className="hubungiBtn">
              <a href="tel:+68112131122" className="hubungiBtnTitle">
                HUBUNGI KAMI
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "40px" }} className="lihatJuga">
          <div className="lihatJugaTitle">Lihat Juga</div>
          {dataAlat.length > 0 &&
            dataAlat.slice(0, 5).map((v, i) => {
              return (
                v.id != id && (
                  <div
                    onClick={() =>
                      navigate(
                        "/penjualan/detailPenjualan/" +
                          v.id +
                          "/" +
                          v.title_alatberat
                      )
                    }
                    className="lihatJugaContent"
                  >
                    {cardTitleSlicer(v.title_alatberat)}
                  </div>
                )
              );
            })}
        </div>
      </div>
    )
  );
};

export default DetailPenjualan;
