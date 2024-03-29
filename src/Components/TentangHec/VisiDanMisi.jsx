import React from "react";
import J2 from "../Home/assets/J2.jpg";
import { Link, useNavigate } from "react-router-dom";
const VisiDanMisi = () => {
  let navigate = useNavigate();
  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${J2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">VISI</div>
              <div className="heroOrangeText">MISI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latarContentContainer">
        <div className="latarContentDesc">
          <div className="latarTitle">Visi</div>
          <div style={{ marginBottom: "20px" }} className="latarContent">
            Menjadi perusahaan jasa layanan support alat berat yang professional
            dan synergi dengan customer di seluruh Indonesia.
          </div>
          <div className="latarTitle">Misi</div>
          <div className="latarContent">
            1. Menyediakan Sumber Daya Manusia yang Kompeten dalam pemeliharaan
            dan pengoperasian alat berat dengan memiliki karakter (Religius,
            Mental yang Kuat, Pengetahuan yang Hebat dan Kepedulian terhadap
            K3LH).
          </div>
          <div className="latarContent">
            2. Memberikan Layanan terhadap program maintenance kepada seluruh
            customer dengan tercapainya KPI (Key Performance Indicator) yang
            telah ditetapkan.
          </div>
          <div className="latarContent">
            3. Menyediakan jasa labour supply yang kompeten dan terpercaya.
          </div>
          <div className="latarContent">
            4. Memberikan solusi penyediaan spare part bagi customer dengan
            kualitas dan harga yang kompetitif
          </div>
          <div className="latarContent">
            5. Memberikan kontribusi kepada negara untuk meningkatkan kompetensi
            kepada masyarakat sekitar agar memiliki daya saing tinggi dalam
            pekerjaan dunia industri alat berat
          </div>
        </div>
        <div className="lihatJuga">
          <div className="lihatJugaTitle">Lihat Juga</div>
          <a onClick={() => navigate("/latar")} className="lihatJugaContent">
            Latar Belakang
          </a>
          <a onClick={() => navigate("/nilai")} className="lihatJugaContent">
            Nilai Inti
          </a>
          <a onClick={() => navigate("/so")} className="lihatJugaContent">
            Struktur Organisasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisiDanMisi;
