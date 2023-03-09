import { StylingComponent } from "@/types";
import { ReactNode } from "react";

import styles from "./TextComponents.module.scss";

export function SectionDetail({ children }: StylingComponent) {
  return <p className={styles["section__detail"]}>{children}</p>;
}
