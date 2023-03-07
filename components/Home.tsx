"use client";

import styles from "./Home.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <article className={`${styles.hero}`}>
      <div className={styles.hero__content}>
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
