import React from "react";
import { Link, useNavigate } from "react-router-dom";
import J3 from "./assets/organization.jpg";
import So from "./assets/SO.png";
const SO = () => {
  let navigate = useNavigate();
  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${J3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">STRUKTUR</div>
              <div className="heroOrangeText">ORGANISASI</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ flexDirection: "column" }}
        className="latarContentContainer"
      >
        <div style={{ width: "97vw", marginBottom: "30px" }}>
          <div className="latarTitle">Struktur Organisasi Perusahaan</div>
          <img
            alt="#"
            width="90%"
            className="strukturPict"
            src={So}
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="lihatJuga">
          <div className="lihatJugaTitle">Lihat Juga</div>
          <a onClick={() => navigate("/latar")} className="lihatJugaContent">
            Latar Belakang
          </a>
          <a onClick={() => navigate("/visi")} className="lihatJugaContent">
            Visi Misi
          </a>
          <a onClick={() => navigate("/nilai")} className="lihatJugaContent">
            Nilai Inti
          </a>
        </div>
      </div>
    </div>
  );
};

export default SO;
