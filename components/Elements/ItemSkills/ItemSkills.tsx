import Image from 'next/image'

import { DataItem } from '@/data/skills';

import styled from './Item.module.scss'


export const ItemSkills = ({ arraySkills }: { arraySkills: DataItem[] }) => {

    return (

        <div className={styled.container_visible}>
            <ul className={styled.wrapper_card}>
                {arraySkills.map((item) => {
                    return (

                        <li className={styled.item_card} key={item.id} >
                            <Image className={styled.img} src={item.logo} width={65} height={65} alt={item.name} />
                            <p className={styled.text}>{item.name}</p>
                        </li>

                    )
                })}
            </ul>
        </div>
    )

}