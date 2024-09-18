import Typography from "../Typography";
import style from "./index.module.css";

export interface BadgeProps {
  /*
   * Badge label
   */
  label: string;
  /**
   * Badge variant
   */
  variant?: "neutral" | "positive" | "negative";
}

const Badge = ({ label, variant = "neutral" }: BadgeProps) => {
  return (
    <div className={`${style.badge} ${style[variant]}`}>
      <Typography variant="m">{label}</Typography>
    </div>
  );
};

export default Badge;
