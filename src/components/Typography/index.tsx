import { PropsWithChildren } from "react";

import style from "./index.module.css";

export interface TypographyProps {
  /**
   * Typography text, if not provided, children will be used
   */
  text?: string;
  /**
   * Typography variant
   */
  variant?: "s" | "m";
}

const Typography = ({ children, text, variant = "m" }: PropsWithChildren<TypographyProps>) => {
  return <span className={`${style.text} ${style[variant]}`}>{text || children}</span>;
};

export default Typography;
