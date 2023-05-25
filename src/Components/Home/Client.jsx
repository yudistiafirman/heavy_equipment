import React from "react";

const Client = ({ logo }) => {
  return (
    <div className="clientContainer">
      {logo && logo.length > 0
        ? logo.map((v, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${v})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                className="logo"
              ></div>
            );
          })
        : null}
    </div>
  );
};

export default Client;
