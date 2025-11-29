"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awardImages = [
  "/awards/vicat24.jpg",
  "/awards/vicat2223.jpg",
  "/awards/chettinad2122.jpg",
  "/awards/zuari20.jpg",
  "/awards/zuarichhatrapati.jpg",
  "/awards/chettinad1819.jpg"
];

export default function AwardsCarousel() {
  const total = awardImages.length;

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        background: "white",
        paddingTop: 36,
        paddingBottom: 36,
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", paddingLeft: 16, paddingRight: 16 }}>
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          // ensure Swiper duplicates enough slides for smooth looping
          loopedSlides={total}
          loopAdditionalSlides={total}
          // avoid filling blank slides groups
          loopFillGroupWithBlank={false}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 25,
            stretch: -40,
            depth: 200,
            modifier: 1,
            slideShadows: true
          }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 16 },
            640: { slidesPerView: 1.6, spaceBetween: 20 },
            900: { slidesPerView: 2.3, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 30 },
            1400: { slidesPerView: 3.6, spaceBetween: 32 }
          }}
          style={{ padding: "10px 0" }}
        >
          {awardImages.map((src, i) => (
            <SwiperSlide
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "380px",
                  height: "520px",
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  boxShadow: "0 12px 40px rgba(2,10,30,0.08)",
                  padding: 12,
                  boxSizing: "border-box"
                }}
              >
                <img
                  src={src}
                  alt={`award-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none"
                  }}
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
