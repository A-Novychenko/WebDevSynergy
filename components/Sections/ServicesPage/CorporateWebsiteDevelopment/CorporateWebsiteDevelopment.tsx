'use client'
import Image from "next/image";
import styles from "./corporate.module.scss";
import arrow from "@/public/svg/arrow.svg";
import arrowdowm from "@/public/svg/arrowdowm.svg"
import tabler_point from "@/public/svg/tabler_point.svg"
import { useState } from "react";

type ServicesProps = {
    arrayServices: Service[];
    lang: "uk" | "en";
    services: Dictionaries;
};

export const CorporateDev = ({ arrayServices, lang, services }: ServicesProps) => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);


    const handleItemClick = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div>
            <p className={styles.subtitle}>elevate your business in the digital realm</p>
            <h2 className={styles.title}>Services</h2>
            <p className={styles.description}>Explore the following core services we specialize in, each crafted with expertise and creativity to drive your success.</p>
            <div>
                <ul className={styles.wrapper_list}>
                    {arrayServices.map((services) => {
                        return (
                            <li key={services.id}>
                                <div className={styles.item_wrapper} onClick={() => handleItemClick(services.id)}>
                                    <div>
                                        <p className={styles.name}>{services.textFields[lang].serviceName}</p>
                                        <p className={styles.price}>{services.textFields[lang].price}</p>
                                    </div>
                                    <Image
                                        className={styles.icon}
                                        src={openItemId === services.id ? arrowdowm : arrow}
                                        alt="icon-arrow"
                                        width={48}
                                        height={48}
                                        priority
                                    />

                                </div>
                                {openItemId === services.id && (
                                    <div>
                                        <p className={styles.services_subtitle}>{services.textFields[lang].subtitle}</p>
                                        <h3 className={styles.services_title}>{services.textFields[lang].serciceTitle}</h3>
                                        <p className={styles.services_description}>{services.textFields[lang].discription}</p>
                                        <div className={styles.wrapper_btn}>
                                            <button className={styles.accentBtn}>Order service</button>
                                            <button className={styles.btn}>Our projects</button>
                                        </div>

                                        <div>
                                            <h3 className={styles.details}>Details of cooperation:</h3>
                                            <ul>
                                                {services.textFields[lang].details.map((detail, index) => (

                                                    <li className={styles.details_item} key={index}>
                                                        <Image
                                                            src={tabler_point}
                                                            alt="tabler"

                                                        />
                                                        {detail}

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>

    )
}