import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import HeartComponent from "../layouts/heart";

export default function Home() {
    const [hearts, setHearts] = useState(false);
    function moveButton() {
        const button = document.getElementById("btn");
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    }

    function handleHeartClick() {
        const hearts = document.querySelectorAll(".heart");
        hearts.forEach((heart) => {
            heart.addEventListener("click", function () {
                this.classList.toggle("is-active");
            });
        });
    }

    useEffect(() => {
        handleHeartClick();
    }, []);

    return (
        <>
            <Head>
                {/* Add jQuery CDN link */}
                <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
            </Head>
            {/* <body> */}
            <div className={styles.container}>
                {!hearts && (
                    <div>
                        <div className={styles.text}>
                            Can I take you out for MOMOS this Sunday?
                        </div>
                        <button
                            id="btn1"
                            className={styles.btn1}
                            onClick={() => setHearts(true)}
                        >
                            Yes
                        </button>
                        <button
                            id="btn"
                            className={styles.btn}
                            onMouseOver={moveButton}
                            onClick={() => alert("You clicked me!")}
                        >
                            No
                        </button>
                    </div>
                )}
                {hearts && <HeartComponent />}
            </div>
            {/* </body> */}
        </>
    );
}
