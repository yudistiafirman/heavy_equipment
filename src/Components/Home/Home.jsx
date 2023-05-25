import React, { useEffect, useState } from "react";
import Client from "./Client";
import "./Home.css";
import HomeGaleri from "./HomeGaleri";
import Jumbotron from "./Jumbotron";
import OurServices from "./OurServices";
import PelatihanPopuler from "./PelatihanPopuler";
import { getAllPartnershipGallery } from "../../AsyncActions/partnershipActions";
const Home = () => {
  const [partnershipLogo, setPartnershipLogo] = useState([]);

  useEffect(() => {
    getPartnershipLogo();
  }, []);

  const getPartnershipLogo = async () => {
    try {
      const response = await getAllPartnershipGallery();

      console.log(response.data);
      setPartnershipLogo(response.data.data);
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
        <PelatihanPopuler />
      </section>
      <section style={{ marginBottom: "211px" }} id="homeGaleri">
        <HomeGaleri />
      </section>
      <section id="homeGaleri">
        <Client logo={partnershipLogo} />
      </section>
    </div>
  );
};

export default Home;
