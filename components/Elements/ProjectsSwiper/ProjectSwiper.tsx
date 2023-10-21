"use client";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {projects} from "@/data/projects";
import {Locale} from "@/i18n-config";

export const ProjectSwiper = ({lang = "en"}: {lang: Locale}) => {
  const slides: Project[] = projects;
  const swiperRef = useRef<any>(null);
  

  console.log("lang", lang);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        // navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {slides &&
          slides.map(({id, poster, title, discription, techIcon}) => {
            return (
              <SwiperSlide key={id}>
                <p>{title}</p>
                <Image src={poster} alt={title} width={544} height={360} />
                <p style={{color: "#f6f2f2", fontSize: 32}}>{discription[lang]}</p>

                {/* <div className={styles.slide_wrap}>
                  <Image
                    src={imgLink}
                    alt={title}
                    width={1296}
                    height={600}
                    className={styles.slide_img}
                  />
                  <div className={styles.title_wrap}>
                    <p className={styles.title}>{title}</p>
                  </div>
                </div> */}
              </SwiperSlide>
            );
          })}
      </Swiper>
      <button type="button" onClick={() => swiperRef.current.slidePrev()}>Prev</button>
      <button type="button" onClick={() => swiperRef.current.slideNext()}>
      Next
      </button>
    </div>
  );
};