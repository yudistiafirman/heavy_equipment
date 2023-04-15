import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import konsultan from "./assets/konsultan.png";
import labour_supply from "./assets/labour_supply.png";
import service from "./assets/service.png";
import program from "./assets/program.png";
import spare from "./assets/spare.png";
const OurServices = () => {
  const [cardIdx, setCardContentIdx] = useState(0);
  const navigate = useNavigate();
  const servicesCardContent = [
    {
      icon: <img src={program} width="100%" color="#ffffff" />,
      title: "PROGRAM PENDIDIKAN DAN PELATIHAN",
      to: "/program",
    },
    {
      icon: <img src={labour_supply} width="100%" color="#ffffff" />,
      title: "LABOUR SUPPLY",
      to: "labour",
    },
    {
      icon: <img src={konsultan} width="100%" color="#ffffff" />,
      title: "KONSULTAN",
      to: "/konsultan",
    },
    {
      icon: <img src={spare} width="100%" color="#ffffff" />,
      title: "SPAREPART ALAT BERAT",
      to: "/penjualan",
    },
    {
      icon: <img src={service} width="100%" color="#ffffff" />,
      title: "SERVICE ALAT BERAT",
      to: "/jasa",
    },
  ];

  return (
    <div className="servicesContainer">
      <div className="servicesTitle">
        <div className="marginSeparator" />
        <div className="titleContainer">
          <div className="titleForYou">Layanan kami untuk anda</div>
          <p className="forYouDesc">
            Berbagai perusahaan mempercayakan sumber dayanya pada
            pelatihan-pelatihan esensial kami
          </p>
        </div>
      </div>

      <div className="ourServicesCardContainer">
        {servicesCardContent.map((v, i) => {
          return (
            <div
              onClick={() => navigate(v.to)}
              key={i}
              style={{
                borderRadius: "10px",
                boxShadow:
                  cardIdx === i ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "",
                backgroundColor: "#FFFFFF",
                marginRight: i === 2 && "0px",
              }}
              onMouseEnter={() => setCardContentIdx(i)}
              className="servicesCard "
            >
              <div className="servicesCardInner">
                <div className="iconContainer">{v.icon}</div>
                <p
                  style={{ color: cardIdx === i ? "#FDC232" : "#071244" }}
                  className="servicesCardTitle"
                >
                  {v.title}
                </p>
                <p className="servicesCardDesc">{v.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
