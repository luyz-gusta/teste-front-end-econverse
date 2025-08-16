import type { ReactNode } from "react";
import styles from "./style.module.scss";

type ContainerProps = {
    children: ReactNode;
    direction?: "row" | "column";
    className?: string; 
};

export default function Container({
    children,
    direction = "row",
    className,
}: ContainerProps) {
    return (
        <section
            className={`
        ${styles.container}
        ${direction === "column" ? styles.column : styles.row}
        ${className}
      `}
        >
            {children}
        </section>
    );
}
