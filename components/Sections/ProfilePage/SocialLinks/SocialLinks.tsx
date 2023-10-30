import Image from "next/image";
import Link from "next/link";

import arrow_icon from "@/public/icons/arrow.svg";

import styles from "./SocialLinks.module.scss";

type SocialLinksProps = {
  person: Person;
  lang: string;
};

export const SocialLinks = ({person, lang}: SocialLinksProps) => {
  return (
    <section>
      <ul className={styles.social_wrap}>
        <li key={person?.linkedin.url}>
          <Link
            className={styles.social_link}
            href={person?.linkedin.url}
            target="_blank"
          >
            <Image
              src={person?.linkedin.linkedin}
              alt={"linkedin"}
              width={24}
              height={24}
            />
            <span className={styles.social_link_text}>linkedin</span>
            <Image src={arrow_icon} alt={"arrow"} width={24} height={24} />
          </Link>
        </li>
        <li key={person?.telegram.url}>
          <Link
            className={styles.social_link}
            href={person?.telegram.url}
            target="_blank"
          >
            <Image
              src={person?.telegram.telegram}
              alt={"telegram"}
              width={24}
              height={24}
            />
            <span className={styles.social_link_text}>telegram</span>
            <Image src={arrow_icon} alt={"arrow"} width={24} height={24} />
          </Link>
        </li>
        <li key={person?.github.url}>
          <Link
            className={styles.social_link}
            href={person?.github.url}
            target="_blank"
          >
            <Image
              src={person?.github.github}
              alt={"github"}
              width={24}
              height={24}
            />
            <span className={styles.social_link_text}>{person?.textFields.en.lastName==="Kopytko"?"behance":"github"}</span>
            <Image src={arrow_icon} alt={"arrow"} width={24} height={24} />
          </Link>
        </li>
        <li key={person?.resume.url}>
          <Link
            className={styles.social_link}
            href={person?.resume.url}
            target="_blank"
          >
            <Image
              src={person?.resume.resume}
              alt={"resume"}
              width={24}
              height={24}
            />
            <span className={styles.social_link_text}>resume</span>
            <Image src={arrow_icon} alt={"arrow"} width={24} height={24} />
          </Link>
        </li>
      </ul>
    </section>
  );
};
