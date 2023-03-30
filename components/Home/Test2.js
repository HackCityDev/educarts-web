import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./test2.module.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/testimony.png" style={{ width: "50px", height: "50px" }} />
          <div className={styles.myCarousel}>
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It&#39;s freeing to be able to catch up on customized news and not
              be distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="/testimony.png" style={{ width: "50px", height: "50px" }} />
          <div className={styles.myCarousel}>
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/testimony.png" style={{ width: "50px", height: "50px" }} />
          <div className={styles.myCarousel}>
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I&#39;m on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
