import React from "react";
import J3 from "../Home/assets/J3.jpg";
import { Link, useNavigate } from "react-router-dom";
import NilaiPict from "./assets/nilai.png";
const NilaiInti = () => {
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
              <div className="heroMediumText">NILAI</div>
              <div className="heroOrangeText">INTI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latarContentContainer">
        <div className="latarContentDesc">
          <div className="latarTitle">Nilai Inti Perusahaan</div>
          <img alt="#" src={NilaiPict} width="90%" />
        </div>
        <div className="lihatJuga">
          <div className="lihatJugaTitle">Lihat Juga</div>
          <a onClick={() => navigate("/latar")} className="lihatJugaContent">
            Latar Belakang
          </a>
          <a onClick={() => navigate("/visi")} className="lihatJugaContent">
            Visi Misi
          </a>
          <a onClick={() => navigate("/so")} className="lihatJugaContent">
            Struktur Organisasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default NilaiInti;
