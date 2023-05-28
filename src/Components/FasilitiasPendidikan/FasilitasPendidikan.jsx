import React, { useEffect, useState } from "react";
import Fasilitas from "./fasilitas.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillCaretDown } from "react-icons/ai";
import "./Fasilitas.css";
import { Dialog, Grid } from "@mui/material";
import { getAllFacility } from "../../AsyncActions/facilityActions";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
const FasilitasPendidikan = () => {
  const [fasilitasData, setFasilitasData] = useState([]);
  const [showImage, SetShowImages] = useState(null);

  useEffect(() => {
    getAllFacilityData();
  }, []);

  const getAllFacilityData = async () => {
    try {
      const response = await getAllFacility("", "", "");
      setFasilitasData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
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
          {fasilitasData && fasilitasData.length > 0 ? (
            fasilitasData.map((v, i) => {
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
                          onClick={() =>
                            SetShowImages(`${BASE_URL}/${v.file_url}`)
                          }
                          style={{
                            backgroundImage: `url(${BASE_URL}/${v.file_url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
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
            })
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
      </div>
    </div>
  );
};

export default FasilitasPendidikan;
