import React from "react";
import styles from "./test.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { Testimonies } from "./Testimony";

function About() {
  const options = {
    type: "loop",
    gap: "10px",
    autoplay: "pause",
    autoWidth: true,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 2,
      },
      400: {
        perPage: 1,
      },
    },
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      autostart: false,
      speed: 2,
    },
  };
  return (
    <div className={styles.flex}>
      <h2 className={styles.h2}>What people say about us</h2>
      <Splide options={options} extensions={{ AutoScroll }}>
        {Testimonies.map((item, index) => {
          return (
            <SplideSlide
              key={index + 1}
              id="slider_container"
              className="slider_container"
              data-splide-interval="1000"
            >
              <div className={styles.div1}>
                <div className={styles.div1__2}>
                  <img
                    className={styles.div1__2__img1}
                    src="/assets/quote.png"
                    alt="quote-icon"
                  />
                  <img
                    className={styles.div1__2__img2}
                    src="/assets/nigeria-logo.png"
                    alt="country-icon"
                  />
                </div>
                <p className={styles.p}>
                  I appreciate the customer supports they were very responsive
                  and resolved them in time, Thank you Educart
                </p>
                <div className={styles.div2}>
                  <img
                    src="/testimony.png"
                    className={styles.div2__img}
                    alt="testifier"
                  />
                  <div className={styles.div2__div}>
                    <p className={styles.div2__div__p1}>{item.name}</p>
                    <p className={styles.div2__div__p2}>{item.more}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default About;
