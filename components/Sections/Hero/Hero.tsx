import Image from "next/image";

import imgMain from "../../../public/main.png";
import styles from "./Hero.module.scss";

type HeroProps = {};

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero__mainThumb}>
        <h2 className={styles.hero__subHeader}>
          where tech talent meets opp?ortunity
        </h2>
        <h1 className={styles.hero__header}>
          Top Tech Talent at{" "}
          <span className={styles.hero__headerAccent}>Web Dev Synergy:</span>{" "}
          Elevate Your Team with Us
        </h1>
        <p className={styles.hero__description}>
          We are a team of passionate developers and designers who thrive on
          turning ideas into reality. Our projects reflect our dedication to
          excellence and our commitment.
        </p>
        <div className={styles.hero__btnThumb}>
          <button className={styles.hero__accentBtn} type="button">
            Order service
          </button>
          <button className={styles.hero__btn} type="button">
            Our projects
          </button>
        </div>
      </div>
      <div className={styles.hero_imgThumb}>
        <Image
          className={styles.hero__img}
          src={imgMain}
          // width={327}
          // height={220}
          sizes="100vw"
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};
