import React from "react";
import J1 from "../Home/assets/J1.jpg";
import { Link, useNavigate } from "react-router-dom";
const LatarBelakang = () => {
  let navigate = useNavigate();
  const latarNavigate = [
    {
      title: "Visi Misi",
      to: "/visi",
    },
    {
      title: "Nilai Inti",
      to: "/nilai",
    },
    {
      title: "Struktur Organisasi",
      to: "/visi",
    },
  ];
  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${J1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">LATAR</div>
              <div className="heroOrangeText">BELAKANG</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latarContentContainer">
        <div className="latarContentDesc">
          <div className="latarTitle">Latar Belakang Perusahaan</div>
          <div
            style={{
              marginBottom: "20px",
              textAlign: "justify",
              width: "95.5%",
            }}
            className="latarContent"
          >
            Saat ini dunia industri pertambangan, agro, konstruksi maupun
            forestry khususnya di indonesia semakin berkembang, dengan
            perkembangan tersebut alat berat di indonesia semakin banyak. Oleh
            karena itu perusahaan – perusahaan yang memiliki unit alat berat
            memerlukan sumber daya manusia yang memiliki kompetensi terhadap
            pemeliharaan dan pengoperasian alat berat serta memerlukan
            management pemeliharaan alat berat yang baik. Dalam perkembangan
            kompetensi dan management pemeliharaan alat berat ini masih banyak
            perusahaan yang belum memiliki Wadah pelatihan untuk meningkatkan
            kompetensi SDM tersebut dan belum memiliki konsep management
            pemeliharaan alat berat yang baik. HEAVY EQUIPMENT CENTRE (HEC)
            adalah Perusahaan bergerak di bidang jasa layanan support Alat
            Berat. Adapun layanan yang kami berikan adalah :
          </div>
          <ol style={{ paddingLeft: "14px" }} className="latarContent">
            <li>
              {" "}
              Pelatihan Kompetensi Alat Berat (Mekanik, Operator dan Staff
              Maintenance)
            </li>
            <li>
              {" "}
              Penyedia Jasa Labour Supply Alat Berat (Mekanik dan Operator){" "}
            </li>
            <li> Konsultan Maintenance Alat Berat</li>
            <li>Penyediaan Spare Part Alat Berat</li>
            <li>Pelayanan Service Alat Berat</li>
          </ol>
        </div>
        <div className="lihatJuga">
          <div className="lihatJugaTitle">Lihat Juga</div>
          {latarNavigate.map((value, index) => {
            return (
              <a
                onClick={() => navigate(value.to)}
                className="lihatJugaContent"
              >
                {value.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatarBelakang;
