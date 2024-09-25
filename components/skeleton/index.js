import React from "react";
import styles from "./styles.module.css";

function Skeleton({ width, height }) {
  return (
    <div className={styles.skeleton} style={{ width, height }}>
      Skeleton
    </div>
  );
}

export default Skeleton;
