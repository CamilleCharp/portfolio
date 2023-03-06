"use client";

import styles from "./Home.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <article className={`${styles.hero}`}>
      <div className={styles.hero__content}>
        {/* <motion.h1
          className={styles.name}
          data-text="Camille Zerrouk"
          initial={{ scale: 0, translateX: -400, opacity: 0 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Camille Zerrouk
        </motion.h1>

        <p className={styles.presentation}>
          {`
        Hello and welcome to my corner of the internet. I am Camille and I've passionate about software development and design for more than ten years, working on project for myself mostly. 
        
        Nowadays I'm a full stack web dev with 2 years of experience in the field, both in a company and as a freelance. I'm working mostly with React, Symfony and Wordpress but I'm always interested in discovering other technologies. 
        
        I am currently learning how to use Python and plan on learning C# in 2023.
        `}
        </p>

        <Link
          href="#skills"
          className={styles.nextLink}
          onClick={(e) => scrollBy(0, window.innerHeight)}
        >
          Explore my skills
        </Link> */}

        <h1 className={styles.hero__title}>
          <span>{"Hi! I'm Camille. I'm a"}</span>
          <div className={styles.list}>
            <span className={styles.item}>Designer</span>
            <span className={styles.item}>Webdev</span>
            <span className={styles.item}>Perfectionnist</span>
          </div>
        </h1>
      </div>
    </article>
  );
}
