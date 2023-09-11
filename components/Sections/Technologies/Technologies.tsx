
import styled from './technologies.module.scss'

import { DataItem } from '@/data/skills';
import { MobileItem } from '@/components/Elements/ItemSkills/MobileItemSkills';
import { ItemSkills } from '@/components/Elements/ItemSkills/ItemSkills';

export const Technologies = ({ arraySkills }: { arraySkills: DataItem[] }) => {




    return (
        <div className={styled.container}>
            <section>
                <h4 className={styled.text_above_header}>power our exceptional solutions</h4>
                <h3 className={styled.title}>The skills, tools and technologies</h3>
                <p className={styled.subtitle}>{`${"At WebDevSynergy, projects aren't just about code – they're about crafting solutions that make a difference. Join us on this journey of excellence, innovation, and transformation."}`}</p>

                <MobileItem arraySkills={arraySkills} />
                <ItemSkills arraySkills={arraySkills} />
            </section>

        </div >

    )

}
