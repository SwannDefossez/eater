"use client";
import Image from "next/image";
import css from "./Trends.module.scss";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const SwiperComponent = ({ companies }) => {
  const [swiper, setSwiper] = useState(null);
  const handleSwiper = (e) => {
    setSwiper(e);
    console.log(e.slides);
  };

  return (
    <div className={css.container}>
      <h1>Nos Partenaires</h1>
      <Swiper
        className={css.swiper}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        centeredSlides={true}
        slidesPerView={3}
        modules={[Autoplay, Navigation]}
        loop={true}
        onSlideChange={(e) => handleSwiper(e)}
      >
        {companies.map((company) => {
          return (
            <SwiperSlide className={css.swiper__slide} key={company._id}>
              <Link href={`/company/${company.slug}`}>
                <Image
                  src={company.img}
                  alt={company.title}
                  width={150}
                  height={150}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
