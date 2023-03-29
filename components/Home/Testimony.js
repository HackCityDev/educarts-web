import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import TestimonyImage from "../../assets/testimony.png";
import styles from "./Home.module.css";
import Ghana from "../../assets/Ghana";
import Naija from "../../assets/Naija";
import Quotes from "../../assets/Quotes";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMQ from "../../hooks/useMQ";
export default function Testimony() {
  const isMobile = useMQ("(max-width: 400px)");
  const isTablet = useMQ("(max-width: 900px)");
  const isPC = useMQ("(max-width: 1200px)");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : isPC ? 3 : 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    pauseOnHover: true,
  };
  return (
    <div className={styles.Testimony}>
      <section className={styles.Blobs}>
        <img src="/blobs/blob1.png" width="500px" height="500px" />
        <img src="/blobs/blob2.png" width="500px" height="500px" />
        <img src="/blobs/blob3.png" width="500px" height="500px" />
      </section>
      <section className={styles.Main}>
        <HighlightHeader
          content="What people say about us"
          style={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "61px",
            color: "#DBEBEE",
            textAlign: "center",
          }}
        />
        <Slider {...settings} className={styles.Testimonies}>
          {Testimonies.map((testimony, i) => (
            <aside key={i} className={styles.TestimonyBox}>
              <div className={styles.Top}>
                <Quotes />
                {testimony.country}
              </div>
              <Paragraphs content={testimony.text} />
              <div className={styles.Bottom}>
                <div className={styles.BottomImage}>
                  <Image
                    src={testimony.photo}
                    objectFit="contain"
                    layout="fill"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className={styles.BottomInfo}>
                  <b>{testimony.name}</b>
                  <span>{testimony.more}</span>
                </div>
              </div>
            </aside>
          ))}
        </Slider>
      </section>
    </div>
  );
}
let Testimonies = [
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
];
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
