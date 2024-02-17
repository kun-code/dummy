// HeartComponent.js

import React, { useEffect } from "react";
import styles from "../../styles/heart.module.css"; // Adjust the path as necessary

const HeartComponent = () => {
    return (
        <div className={styles.stage}>
            <div className={styles.heart}></div>
            <div className={styles.text}>
                I'll see you on Sunday
            </div>
        </div>
    );
};

export default HeartComponent;
