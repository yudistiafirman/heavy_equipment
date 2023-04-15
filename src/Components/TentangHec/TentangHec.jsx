import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./TentangHec.css";

const TentangHec = ({ onPressDropDownTentang }) => {
  const location = useLocation();
  const tentangHecNav = [
    {
      title: "Latar Belakang",
      to: "/latar",
    },
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
      to: "/so",
    },
  ];
  return (
    <div
      onMouseEnter={() => onPressDropDownTentang(true)}
      onMouseLeave={() => onPressDropDownTentang(false)}
      className="tentangContainer"
    >
      {tentangHecNav.map((v, i) => {
        return (
          <div
            onClick={() => onPressDropDownTentang(false)}
            className="linkContainer"
            style={{ marginLeft: "16px" }}
          >
            <Link
              style={{ color: location.pathname === v.to ? "#FDC232" : "" }}
              to={v.to}
            >
              {v.title.toUpperCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TentangHec;
