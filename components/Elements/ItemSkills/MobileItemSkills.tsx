'use client'
import styled from './Item.module.scss'

import Image from 'next/image'
import { useState } from 'react';
import { DataItem } from '@/data/skills';
import arrow from '../../../public/svg/arrow.svg'


export const MobileItem = ({ arraySkills }: { arraySkills: DataItem[] }) => {

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const visibleItemCount = showAll ? arraySkills.length : 12;


    return (
        <div className={styled.mobile_visible}>
            <ul className={styled.wrapper_card}>
                {arraySkills.slice(0, visibleItemCount).map((item) => {
                    return (

                        <li key={item.id} >
                            <Image className={styled.img} src={item.logo} width={65} height={65} alt={item.name} />
                            <p className={styled.text}>{item.name}</p>
                        </li>

                    )
                })}
            </ul>
            {arraySkills.length > 12 && (

                <button className={styled.btn} onClick={toggleShowAll}>
                    {showAll ? 'Less technology' : 'More  technologies'}
                    <Image src={arrow} width={16} height={16} alt='arrow' />
                </button>


            )}
        </div>
    )
}