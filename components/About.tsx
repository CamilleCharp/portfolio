import PicOfMe from "@/public/me.jpg";
import { AboutProps } from "@/types";

import Image from "next/image";

import styles from "./About.module.scss";
import { SectionEmphasis } from "./Text/SectionEmphasis";
import { SectionTitle } from "./Text/SectionTitle";

export function About({ content }: AboutProps) {
  return (
    <section className={` ${styles.about}`} id="about">
      <div className={styles.about__pic}>
        <Image src={PicOfMe} alt="A photo of me" width={192} />
      </div>
      <div className={styles.about__content}>
        <SectionTitle>{content.title}</SectionTitle>
        <SectionEmphasis>{content.emphasis}</SectionEmphasis>

        <p className={styles.about__presentation}>{content.text}</p>
      </div>
    </section>
  );
}
