import { useRef, useEffect, useState } from "react";

const MyComponent = () => {
  const heroMain = useRef(null);
  const [bgValue, setBgValue] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgValue((bgValue) => (bgValue === 1 ? 2 : 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (heroMain.current) {
      heroMain.current.classList.add("fade-in");
      setTimeout(() => {
        heroMain.current.classList.remove("fade-in");
      }, 100);
    }
  }, [bgValue]);

  const bg = `bg${bgValue}.png`;
  const imageUrl = `url(${bg})`;

  return (
    <div ref={heroMain}>
      <h1>Welcome to my website!</h1>
      <p>This background image is changing every 1 second.</p>
      <style jsx>{`
        div {
          width: 100%;
          height: 100vh;
          background-image: ${imageUrl};
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          transition: opacity 100ms ease-in-out;
        }
        .fade-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default MyComponent;
