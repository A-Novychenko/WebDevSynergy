"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { projects } from "@/data/projects";
import { Locale } from "@/i18n-config";

import styles from "./projectSwiper.module.scss";
import NavLink from "next/link";

import arrow from "../../../public/svg/arrow-btn.svg";

export const ProjectSwiper = ({ lang = "en" }: { lang: Locale }) => {
  const slides: Project[] = projects;
  const swiperRef = useRef<any>(null);

  // console.log("lang", lang);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        // navigation
        // pagination={false}
        // scrollbar={{draggable: true}}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          375: {
            slidesPerView: 1,
            pagination: true,
          },
          480: {
            slidesPerView: 1,
            pagination: true,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className={styles.swiper_wrapper}
        // style={{ width: "100%", height: "241px" }}
      >
        {slides &&
          slides.map(({ id, poster, title, discription, techIcon }) => {
            return (
              <SwiperSlide key={id} className={styles.wrapper}>
                <Image
                  src={poster}
                  alt={title}
                  width={544}
                  height={360}
                  className={styles.image}
                />
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{discription[lang]}</p>
                <ul className={styles.skill_list}>
                  {techIcon.map((icon, index) => {
                    return (
                      <li key={index}>
                        <Image src={icon} alt={icon} width={24} height={24} />
                      </li>
                    );
                  })}
                </ul>
                <NavLink
                  href="/"
                  style={{ color: "white" }}
                  className={styles.nav_link}>
                  Read more
                  <Image
                    src={arrow}
                    alt="arrow-icon"
                    width={16}
                    height={16}
                    className={styles.arrow_icon}
                  />
                </NavLink>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <button type="button" onClick={() => swiperRef.current.slidePrev()}>
        Prev
      </button>
      <button type="button" onClick={() => swiperRef.current.slideNext()}>
        Next
      </button>
    </div>
  );
};
