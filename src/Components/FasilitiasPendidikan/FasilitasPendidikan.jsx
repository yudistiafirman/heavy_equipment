import React, { useEffect, useState } from "react";
import Fasilitas from "./fasilitas.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillCaretDown } from "react-icons/ai";
import "./Fasilitas.css";
import axios from "axios";
import { apiUrl } from "../../Default";
import { Dialog, Grid } from "@mui/material";
const FasilitasPendidikan = () => {
  const [fasilitasData, setFasilitasData] = useState([]);
  const [showImage, SetShowImages] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/fasilitas/all?name=`).then((response) => {
      setFasilitasData(response.data.data);
    });
  });
  return (
    <div className="latarContainer">
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
      <div
        style={{
          backgroundImage: `url(${Fasilitas})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">FASILITAS DAN</div>
              <div className="heroOrangeText">PELATIHAN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latarContentContainer">
        <div className="latarContentDesc">
          <div className="latarTitle">Fasilitas dan Pelatihan</div>
          <div style={{ marginBottom: "20px" }} className="latarContent">
            Menjadi perusahaan jasa layanan support alat berat yang professional
            dan synergi dengan customer di seluruh Indonesia.
          </div>
          {fasilitasData.map((v, i) => {
            return (
              <div className="accordion">
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
                      {v.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="fasilitasListImageContainer">
                      <div
                        className="fasilitasImage"
                        onClick={() => SetShowImages(`${apiUrl}/${v.image_1}`)}
                        style={{
                          backgroundImage: `url(${apiUrl}/${v.image_1})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>

                      <div
                        className="fasilitasImage"
                        onClick={
                          v.image_2 !== null
                            ? () => SetShowImages(`${apiUrl}/${v.image_2}`)
                            : null
                        }
                        style={{
                          backgroundImage:
                            v.image_2 !== null && `url(${apiUrl}/${v.image_2})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div
                        className="fasilitasImage"
                        onClick={
                          v.image_3 !== null
                            ? () => SetShowImages(`${apiUrl}/${v.image_3}`)
                            : null
                        }
                        style={{
                          backgroundImage:
                            v.image_3 !== null && `url(${apiUrl}/${v.image_3})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#6B7280",
                        fontFamily: '"inter",sans-serif',
                        lineHeight: "22px",
                        textAlign: "justify",
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
      </div>
    </div>
  );
};

export default FasilitasPendidikan;
