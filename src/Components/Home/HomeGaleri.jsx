import React, { useState, useEffect } from "react";
import Photogrid from "./PhotoGrid";
import axios from "axios";
import { apiUrl } from "../../Default";
const HomeGaleri = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGaleriHome();
  }, []);
  const getGaleriHome = () => {
    axios.get(`${apiUrl}/galeri/home?`).then((response) => {
      const imageData = response.data.data.map((v, i) => v.image);
      setImages(imageData.slice(0, 6));
    });
  };
  return (
    <div className="homeGaleriContainer">
      <div className="servicesTitle">
        <div className="marginSeparator" />
        <div className="titleContainer">
          <div className="titleForYou">Galeri</div>
          <p className="forYouDesc">
            Potongan kegiatan-kegiatan terbaik yang kami jadikan memori terbaik
          </p>
        </div>
      </div>
      <div className="galeriGrid">
        <Photogrid images={images} />
      </div>
    </div>
  );
};

export default HomeGaleri;
