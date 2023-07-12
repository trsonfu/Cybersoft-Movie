import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieServ } from "../../services/movieServices.jsx";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeBanner = () => {
  const [banner, setBanner] = useState([]);
  const getAllBanner = async () => {
    const res = await movieServ.getAllBanner();
    console.log(res);
    setBanner(res.data.content);
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <Carousel>
      {banner.map((banner, index) => {
        return (
          <div key={index} className="h-70vh">
            <img
              className="w-full h-full object-cover"
              src={banner.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
