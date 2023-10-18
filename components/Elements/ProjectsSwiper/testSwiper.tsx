"use client";

import {useState} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {projects} from "@/data/projects";
import {Locale} from "@/i18n-config";

const styles = {};

export const BannerSwiper = ({lang = "en"}: {lang: Locale}) => {
  const slides: Project[] = projects;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log("lang", lang);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides &&
          slides.map(({id, poster, title, discription, techIcon}) => {
            return (
              <SwiperSlide key={id}>
                <p>{title}</p>
                <Image src={poster} alt={title} width={100} height={100} />
                <p style={{color: "#f00", fontSize: 32}}>{discription[lang]}</p>

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

      <button type="button" onClick={openModal}>
        Записатись на сеанс
      </button>
    </div>
  );
};
