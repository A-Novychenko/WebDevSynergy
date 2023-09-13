import Image from 'next/image'

import styles from './team.module.scss'

export const Team = ({ arrayTeam, lang }) => {

    return (
        <div className={styles.container}>
            <section>
                <h4 className={styles.text_above_header}>unique strengths to every project</h4>
                <h3 className={styles.title}>Our team</h3>
                <p className={styles.subtitle}>At WebDevSynergy, we believe that every successful project is a result of the collective brilliance of our diverse and talented team. Our professionals are driven by a shared passion for innovation, creativity, and delivering outstanding solutions.</p>
                <ul className={styles.wraper_dev}>
                    {arrayTeam.map((team) => {
                        return (
                            <li className={styles.card} key={team.id}>
                                <Image src={team.img} alt={team.name} />
                                <div className={styles.wraper_dev_first}>
                                    <div>
                                        <h4 className={styles.last_name}>{team.textFields[lang].firstName}</h4>
                                        <h4 className={styles.last_name}>{team.textFields[lang].lastName}</h4>
                                    </div>
                                    <p className={`${styles.subtitle} ${styles.subtitle_width}`}>{team.profession}</p>
                                    <ul className={styles.wraper_social}>
                                        <li key={team.linkedin}>
                                            <a href="#"><Image src={team.linkedin} alt={"linkedin"} /></a>
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