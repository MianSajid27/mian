import React from "react";

const spring = () => {
  return (
    <div className=" ">
      <div style={{ justifyContent: "center" }}>
        <div style={{ float: "left" }}>
          <img
            style={{ width: "400px", borderRadius: "5px" }}
            src="/assets/images/spring/spring1.webp"
          />
          <h2 
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "black",
              paddingTop: "20px",
              paddingBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {" "}
            New Spring Knits
          </h2>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "70px",
              fontSize: "15px",
            }}
          >
            {" "}
            Endless verstile new design that say yes to
            <br />
            spring.The season is looking bright
          </p>


        </div>
        <div style={{ float: "right" }}>
          <div> </div>
          <img
          className="spring"
          
            src="/assets/images/spring/spring3.webp"
          />
          {/* <span> <input type="button" value="Veiw Collection"/></span> */}
          <h2
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "black",
              paddingTop: "20px",
              paddingBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {" "}
            New Winter Kintes
          </h2>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "70px",
              fontSize: "15px",
            }}
          >
            Endless verstile new design that say yes to
            <br />
            spring.The season is looking bright
          </p>
        </div>
        <div style={{ float: "right" }}>
          <img
          className="sajid"
           
            src="/assets/images/spring/spring2.webp"
          />
          <h2
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "black",
              paddingTop: "20px",
              paddingBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Ready To Party
          </h2>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "70px",
              fontSize: "15px",
            }}
          >
            {" "}
            For studio to Street, Our collection of technical
            <br />
            high-performance activeness is made
          </p>
        </div>
      </div>
    </div>
  );
};

export default spring;
