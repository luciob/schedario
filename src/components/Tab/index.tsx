import { MouseEvent, useCallback, useEffect, useRef } from "react";
import Badge, { BadgeProps } from "../Badge";
import Typography from "../Typography";
import style from "./index.module.css";

export type TabVariant = "pill" | "underline";

export interface TabProps {
  /**
   * Tab unique identifier
   */
  id: string;
  /**
   * Optional badge object
   * @see BadgeProps
   */
  badge?: BadgeProps;
  /**
   * Content id panel prefix
   */
  contentIdPrefix?: string;
  /**
   * Tab focused state
   */
  focused?: boolean;
  /**
   * Tab label
   */
  label: string;
  /**
   * Tab click handler
   */
  onClick?: (tabId: string) => void;
  /**
   * Tab selected state
   */
  selected?: boolean;
  /**
   * Tab variant
   */
  variant?: TabVariant;
}

const Tab = ({
  badge,
  contentIdPrefix = "content",
  focused = false,
  id,
  label,
  onClick,
  selected = false,
  variant = "pill",
}: TabProps) => {
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!tabRef.current) {
      return;
    }

    if (focused) {
      tabRef.current.focus();
    }
  }, [focused]);

  const onClickHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClick && onClick(id);
    },
    [id, onClick]
  );

  return (
    <button
      className={`${style.tab} ${style[variant]}`}
      aria-controls={`${contentIdPrefix}-${id}`}
      aria-selected={selected}
      id={id}
      onClick={onClickHandler}
      ref={tabRef}
      role="tab"
      tabIndex={selected ? 0 : -1}
    >
      <Typography>{label}</Typography>
      {badge && <Badge {...badge} />}
    </button>
  );
};

export default Tab;
