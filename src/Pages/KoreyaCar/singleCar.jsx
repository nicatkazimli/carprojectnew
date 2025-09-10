import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carData } from "../../components/servis";
import './SingleCar.css';


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SingleCar = () => {
  const data = useParams();
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    const foundCar = carData.find((item) => item.id === Number(data.id));
    setCarDetails(foundCar || {});
  }, [data]);

  const { images, make, model, year, vin, about } = carDetails;

  return (
    <div className="car-container" style={{ display: "flex", gap: 30, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div
        className="car-image-wrapper"
        style={{
          width: 400,
          marginBottom: 20,
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        }}
      >
        {images && images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{ height: 250 }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${make} ${model} image ${index + 1}`}
                  style={{ width: "100%", height: 250, objectFit: "cover", userSelect: "none" }}
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={carDetails.image}
            alt={`${make} ${model}`}
            style={{ width: "100%", height: 250, objectFit: "cover" }}
          />
        )}
      </div>

      <div className="car-info" style={{ maxWidth: 500 }}>
        <h2
          className="car-title"
          style={{ marginBottom: 8, fontSize: 26, fontWeight: "600", color: "#222" }}
        >
          {make} {model}
        </h2>
        <p className="car-about" style={{ marginBottom: 12, color: "#555", lineHeight: 1.5 }}>
          {about}
        </p>
        <p className="car-year" style={{ marginBottom: 6, color: "#444" }}>
          İl: {year}
        </p>
        <p className="car-vin" style={{ marginBottom: 18, color: "#444" }}>
          VIN: {vin}
        </p>

        <div className="contact-links" style={{ fontSize: 16, color: "#222" }}>
          {[{ num: "051-356-28-38", tel: "+99451-356-28-38" }, { num: "010-717-01-77", tel: "+994107170177" }].map(({ num, tel }) => (
            <p
              key={tel}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .56 2.57 2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.6-.6a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.56 2 2 0 0 1 1.72 2z" />
              </svg>
              <a
                href={`tel:${tel}`}
                style={{
                  textDecoration: "none",
                  color: "#0077cc",
                  position: "relative",
                  paddingBottom: 2,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid #0077cc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "none";
                }}
              >
                {num}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
