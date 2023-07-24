import React from 'react'

const collection = () => {
  return (
    <div>

        <h1 style={{color:"black",fontWeight:"bold",fontSize:"25px",paddingTop:"50px",paddingBottom:"20px"}}>Trending Collection</h1>
       <div className=" ">
      <div style={{ justifyContent: "center" }}>
        <div style={{ float: "left" }}>
          <img
            style={{ width: "400px", borderRadius: "5px",paddingBottom:"100px"}}
            src="/assets/images/Contom/new/16.webp"
          />
         


        </div>
        <div style={{ float: "right" }}>
          <div> </div>
          <img
          className="springg"
          
            src="/assets/images/Contom/new/19.webp"
          />
          {/* <span> <input type="button" value="Veiw Collection"/></span> */}
        
        </div>
        <div style={{ float: "right" }}>
          <img
          className="sajidd"
           
            src="/assets/images/Contom/new/17.webp"
          />
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default collection
