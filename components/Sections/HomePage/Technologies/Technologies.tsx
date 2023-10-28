import styled from "./technologies.module.scss";

import {DataItem} from "@/data/skills";
import {MobileItem} from "@/components/Elements/ItemSkills/MobileItemSkills";
import {ItemSkills} from "@/components/Elements/ItemSkills/ItemSkills";

type TechProps = {
  arraySkills: DataItem[];
  tech: Dictionaries;
};

export const Technologies = ({arraySkills, tech}: TechProps) => {
  return (
    <div className={styled.container}>
      <section className={styled.section}>
        <h4 className={styled.text_above_header}>
          {tech["server-component"].technologies.above_header}
        </h4>
        <h3 className={styled.title}>
          {tech["server-component"].technologies.title}
        </h3>
        <p className={styled.subtitle}>
          {tech["server-component"].technologies.subtitle}
        </p>

        <MobileItem arraySkills={arraySkills} />
        <ItemSkills arraySkills={arraySkills} />
      </section>
    </div>
  );
};
