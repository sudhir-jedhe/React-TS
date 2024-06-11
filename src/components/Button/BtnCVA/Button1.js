import React from "react";
import { cva } from "class-variance-authority";
import styles from "./Button.module.css";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      outline: styles.outline,
      destructive: styles.destructive,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);

export default Button;
