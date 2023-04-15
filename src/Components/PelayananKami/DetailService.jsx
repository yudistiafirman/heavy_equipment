import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { apiUrl } from "../../Default";
import { cardTitleSlicer } from "../utils/funcHelper";
const DetailService = () => {
  const { id, name } = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const [jasaContent, setJasaContent] = useState([]);
  useEffect(() => {
    getDetailData();
    getAllJasa();
  }, [id, name]);

  const getDetailData = () => {
    axios.get(`${apiUrl}/jasa/detail?id=${id}`).then((response) => {
      setDataDetail(response.data.data);
    });
  };
  const getAllJasa = () => {
    axios.get(`${apiUrl}/jasa/all?`).then((response) => {
      setJasaContent(response.data.data);
    });
  };
  const navigate = useNavigate();
  return (
    dataDetail.length > 0 && (
      <div className="detailPelatihanContainer">
        <div className="detailInnerContainer">
          <div style={{ width: "60%" }} className="routingDetail">
            <div onClick={() => navigate("/")} className="routingInActive">
              Home
            </div>
            <div className="routingInActive">/</div>
            <div onClick={() => navigate("/jasa")} className="routingInActive">
              Jasa Service Alat Berat
            </div>
            <div className="routingInActive">/</div>
            <div style={{ color: "#000000" }} className="routingInActive">
              {name}
            </div>
          </div>

          <div className="detailContentContainer">
            <div className="detailTitleContainer">
              <div className="detailTitle">{dataDetail[0].title}</div>
              <div className="titleIconContainer">
                <CopyToClipboard
                  onCopy={() => alert("Success Copy to Clipboard")}
                  text={window.location.href}
                >
                  <FaShareAlt />
                </CopyToClipboard>
              </div>
            </div>

            <div className="detailDesc">{dataDetail[0].descriptions}</div>
            {dataDetail[0].scope.map((v, i) => {
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
                        {v.scope_title}
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
                        {v.scope_descriptions}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}

            <div style={{ width: "100%" }} className="hubungiBtn">
              <a href="tel:+68112131122" className="hubungiBtnTitle">
                HUBUNGI KAMI
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "40px" }} className="lihatJuga">
          <div onClick={() => navigate("/jasa")} className="lihatJugaTitle">
            Lihat Juga
          </div>
          {jasaContent.length > 0 &&
            jasaContent.slice(0, 5).map((v, i) => {
              return (
                v.id != id && (
                  <div
                    onClick={() =>
                      navigate("/jasa/detailJasa/" + v.id + "/" + v.title)
                    }
                    className="lihatJugaContent"
                  >
                    {cardTitleSlicer(v.title)}
                  </div>
                )
              );
            })}
        </div>
      </div>
    )
  );
};

export default DetailService;
