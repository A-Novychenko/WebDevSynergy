'use client'
import styled from './skills.module.scss'

import Image from 'next/image'
import { useState } from 'react';
import { DataItem } from '@/data/skills';

export const Skills = ({ arraySkills }: { arraySkills: DataItem[] }) => {

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const visibleItemCount = showAll ? arraySkills.length : 6;



    return (
        <div className={styled.container}>
            <section>
                <h4 className={styled.text_above_header}>power our exceptional solutions</h4>
                <h3 className={styled.title}>The skills, tools and technologies</h3>
                <p className={styled.subtitle}>At WebDevSynergy, projects aren't just about code – they're about crafting solutions that make a difference. Join us on this journey of excellence, innovation, and transformation.</p>
                <ul className={styled.wrapper_card}>
                    {arraySkills.slice(0, visibleItemCount).map((item) => {
                        return (

                            <li key={item.id} >
                                <Image src={item.logo} width={40} height={40} alt={item.name} />
                                <p>{item.name}</p>
                            </li>

                        )
                    })}
                </ul>
                {arraySkills.length > 6 && (
                    <div className={styled.show_more_button}>
                        <button onClick={toggleShowAll}>
                            {showAll ? 'Показать меньше' : 'Показать все элементы'}
                        </button>
                    </div>
                )}
            </section>

        </div >

    )

}