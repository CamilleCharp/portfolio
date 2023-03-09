import { StylingComponent } from "@/types";
import { ReactNode } from "react";

import styles from "./TextComponents.module.scss";

export function SectionEmphasis({ children }: StylingComponent) {
  return <h1 className={styles["section-emphasis"]}>{children}</h1>;
}
