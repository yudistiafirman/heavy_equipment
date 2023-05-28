import React, { useEffect, useState } from "react";
import Client from "./Client";
import "./Home.css";
import HomeGaleri from "./HomeGaleri";
import Jumbotron from "./Jumbotron";
import OurServices from "./OurServices";
import PelatihanPopuler from "./PelatihanPopuler";
import { getAllPartnershipGallery } from "../../AsyncActions/partnershipActions";
import { getAllHomeGallery } from "../../AsyncActions/homeGalleryActions";
import { getAllTraining } from "../../AsyncActions/TrainingActions";
const Home = () => {
  const [partnershipLogo, setPartnershipLogo] = useState([]);
  const [homeGaleriData, setHomeGaleriData] = useState([]);
  const [popularTraining, setPopularTraining] = useState([]);

  useEffect(() => {
    getPartnershipLogo();
    getGaleriHome();
    getPopularTraining();
  }, []);
  const getPartnershipLogo = async () => {
    try {
      const response = await getAllPartnershipGallery();

      setPartnershipLogo(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getGaleriHome = async () => {
    try {
      const response = await getAllHomeGallery("", "", 5, "");
      const imageData = response.data.data.map((v, i) => {
        if (i === 0) {
          return {
            ...v,
            rows: 2,
            cols: 2,
          };
        } else {
          return { ...v };
        }
      });
      console.log("ini", imageData);
      setHomeGaleriData(imageData);
    } catch (error) {
      console.log(error);
    }
  };
  const getPopularTraining = async () => {
    try {
      const response = await getAllTraining("", "", 5, "", "", 1);
      setPopularTraining(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="homeContainer">
      <section style={{ position: "relative" }} id="jumbotron">
        <Jumbotron />
      </section>
      <section id="ourServices">
        <OurServices />
      </section>
      <section style={{ marginBottom: "257px" }} id="pelatihanPopuler">
        <PelatihanPopuler training={popularTraining} />
      </section>
      <section style={{ marginBottom: "211px" }} id="homeGaleri">
        <HomeGaleri images={homeGaleriData} />
      </section>
      <section id="homeGaleri">
        <Client logo={partnershipLogo} />
      </section>
    </div>
  );
};

export default Home;
