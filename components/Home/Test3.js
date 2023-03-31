import React from "react";
import ghana from "../../assets/images/ghana-logo.png";
import testifier from "../../assets/images/testifier.png";
import quote from "../../assets/images/quote.png";
import nigeria from "../../assets/images/nigeria-logo.png";
import styles from "./test.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

function About() {
  const data = [
    {
      icon: ghana,
      quote:
        "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
      testifier: "Esene Godwin",
      title: "MBA. Industrial Design, Imperial College London, Accra Ghana",
    },
    {
      icon: nigeria,
      quote:
        "In only three days, my payments arrived the University Of Oxford, I highly recommend Educarts for everyone out there",
      testifier: "Charles Mabuso",
      title: "MBA. Economics, Harvard University, Capetown South Africa",
    },
    {
      icon: nigeria,
      quote:
        "In only three days, my payments arrived the University Of Oxford, I highly recommend Educarts for everyone out there",
      testifier: "Charles Mabuso",
      title: "MBA. Economics, Harvard University, Capetown South Africa",
    },
  ];
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
        {data.map((item, index) => {
          return (
            <SplideSlide
              key={index + 1}
              id="slider_container"
              className="slider_container"
              data-splide-interval="1000"
            >
              <div className={styles.div1}>
                <div className={styles.div2}>
                  <img
                    className=" w-8 h-11 sm:w-10 sm:h-10"
                    src={quote}
                    alt="quote-icon"
                  />
                  <img
                    className="w-8 h-8 sm:w-16 sm:h-16"
                    src={item.icon}
                    alt="country-icon"
                  />
                </div>
                <p className="mt-5 sm:mt-10 sm:mr-0 w-[295px] sm:w-[368px] sm:pl-5 sm:text-2xl leading-6 sm:leading-[38px]">
                  I appreciate the customer supports they were very responsive
                  and resolved them in time, Thank you Educart
                </p>
                <div className="flex mt-8 sm:mt-9">
                  <img
                    src={testifier}
                    className="w-12 h-12 sm:w-[100px] sm:h-[100px] "
                    alt="testifier"
                  />
                  <div className="ml-2 sm:ml-6">
                    <p className="leading-8 sm:text-2xl sm:leading-[38px] font-semibold">
                      {item.testifier}
                    </p>
                    <p className="text-base sm:text-body-sm md:text-body-md leading-6 font-normal sm:font-medium">
                      {item.title}
                    </p>
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
