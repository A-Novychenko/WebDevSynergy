import { Dictionaries, Teams } from '@/types/dictionaries';
import Image from 'next/image'

import styles from './team.module.scss'

type TeamProps = {
    arrayTeam: Person[];
    lang: 'uk' | 'en';
    teams: Dictionaries;
};

export const Team = ({ arrayTeam, lang, teams }: TeamProps) => {

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h4 className={styles.text_above_header}>{teams["server-component"].team.above_header}</h4>
                <h3 className={styles.title}>{teams["server-component"].team.title}</h3>
                <p className={styles.subtitle}>{teams["server-component"].team.subtitle}</p>
                <ul className={styles.wraper_dev}>
                    {arrayTeam.map((team) => {
                        return (
                            <li className={styles.card} key={team.id}>
                                <Image className={styles.img} src={team.img} alt={team.textFields.en.firstName} />
                                <div className={styles.wraper_dev_first}>
                                    <div>
                                        <h4 className={styles.last_name}>{team.textFields[lang].firstName}</h4>
                                        <h4 className={styles.last_name}>{team.textFields[lang].lastName}</h4>
                                    </div>
                                    <p className={`${styles.subtitle} ${styles.subtitle_width}`}>{team.profession}</p>
                                    <ul className={styles.wraper_social}>
                                        <li key={team.linkedin}>
                                            <a href="#">
                                                <Image src={team.linkedin} alt={"linkedin"} />
                                            </a>
                                        </li>
                                        <li key={team.telegram} >
                                            <a href="#"><Image src={team.telegram} alt={"telegram"} /> </a>
                                        </li>
                                        <li key={team.github}>
                                            <a href="#"><Image src={team.github} alt={"github"} /></a>
                                        </li>
                                        <li key={team.resume}>
                                            <a href="#"><Image src={team.resume} alt={"resume"} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        )

                    })}
                </ul>
            </section>


        </div >
    )
}