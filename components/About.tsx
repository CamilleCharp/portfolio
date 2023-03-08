import PicOfMe from "@/public/me.jpg";

import Image from "next/image";

import styles from "./About.module.scss";

export function About() {
  return (
    <section className={` ${styles.about}`} id="about">
      <div className={styles.about__pic}>
        <Image src={PicOfMe} alt="A photo of me" width={192} />
      </div>
      <div className={styles.about__content}>
        <h1 className="section-title">About me</h1>
        <h2 className="section-emphasis">Who am I ?</h2>

        <p className={styles.about__presentation}>
          {`Hello and welcome to my corner of the internet! I am a full-stack freelance web developer based in Brussels.

My aim is to create websites and web apps that are simple to use and maintain for both end-users and developers.

To achieve this, I ensure that I understand how to design from the first idea scribbled on a piece of paper to the deepest nooks of a relational database. This enables me to accompany you in your projects at every step and ensure that the product I deliver is as close as possible to your vision.
          `}
        </p>
      </div>
    </section>
  );
}
