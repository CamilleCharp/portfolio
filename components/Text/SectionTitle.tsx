import { StylingComponent } from "@/types";
import { ReactNode } from "react";

import styles from "./TextComponents.module.scss";

export function SectionTitle({ children }: StylingComponent) {
  return <h1 className={styles["section-title"]}>{children}</h1>;
}
