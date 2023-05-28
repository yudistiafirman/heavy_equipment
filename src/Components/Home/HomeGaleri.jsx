import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

const HomeGaleri = ({ images }) => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
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
        <ImageList variant="quilted" cols={4} rowHeight={300}>
          {images &&
            images.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(
                    `${BASE_URL}/${item.file_url}`,
                    121,
                    item.rows,
                    item.cols
                  )}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
    </div>
  );
};

export default HomeGaleri;
