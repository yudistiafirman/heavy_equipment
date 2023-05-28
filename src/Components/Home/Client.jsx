import React from "react";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

const Client = ({ logo }) => {
  return (
    <div className="clientContainer">
      {logo && logo.length > 0
        ? logo.map((v, i) => {
            return (
              <img
                src={`${BASE_URL}/${v.file_url}`}
                loading="lazy"
                alt="#"
                className="logo"
              />
            );
          })
        : null}
    </div>
  );
};

export default Client;
