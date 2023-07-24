import React from "react";

const ideas = () => {
  return (
    <div className="mainn">
      <div className="main1" style={{ background: "#f7f7f7" }}>
        <h2 className="chawk"> ChawkBazar App</h2>
        <h2 className="share">
          Share Your<span style={{ fontWeight: "bold" }}> Ideas</span> & Shop
        </h2>
        <h2 className="share">
          Endless <span style={{ fontWeight: "bold" }}> Inspiration</span>{" "}
        </h2>

        <div className="main">
          <div className="main1">
            <img
              style={{
                marginLeft: "80px",
                borderRadius: "5px",
                paddingTop: "40px",
              }}
              src="/assets/images/contom/new/21.svg"
            />{" "}
          </div>
          <div className="main1">
            <img
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                paddingBottom: "95px",
                paddingTop: "40px",
              }}
              src="/assets/images/contom/new/22.svg"
            />
          </div>
        </div>
      </div>
      <div className="main1" style={{ background: "#f7f7f7" }}>
        <img
          style={{
            paddingTop: "50px",
            marginLeft: "350px",
            paddingRight: "60px",
          }}
          src="/assets/images/contom/new/20.webp"
        />
      </div>
    </div>
  );
};

export default ideas;
