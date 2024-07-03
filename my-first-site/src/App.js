import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./sections/Carousel";
import NavbarGrid from "./components/NavbarGrid";
import Footer from "./components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Gallery = lazy(() => import("./sections/Gallery"));

const parallaxImages = [
  "Parallax/mountains.png",
  "Parallax/jungle1.png",
  "Parallax/jungle2V2.png",
  "Parallax/jungle3.png",
  "Parallax/jungle4.png",
  "Parallax/jungle5.png",
];

function LazyImage({ src, alt, className }) {
  const [inView, setInView] = useState(false);
  const imgRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`${className} ${inView ? "bg-cover bg-center" : "bg-none"}`}
      style={{ backgroundImage: inView ? `url(${src})` : "none" }}
      aria-label={alt}
    />
  );
}

function App() {
  return (
    <div className="App">
      <div className="dark:bg-gradient-to-t from-purple-800 to-slate-900 bg-slate-300 snap-y h-screen overflow-visible snap-center scroll-smooth">
        <Parallax
          pages={3}
          style={{ top: "0", left: "0", width: "100%" }}
          className="custom-parallax"
        >
          {/* Background layers for parallax effect */}
          <ParallaxLayer offset={0} speed={0.3}>
            <LazyImage src={parallaxImages[0]} alt="Mountains" className="absolute inset-0" />
          </ParallaxLayer>

          {/* Header Layer */}
          <ParallaxLayer
            offset={0}
            speed={-0.1}
            className="flex justify-center items-center z-10"
          >
            <Header />
            <div className="absolute flex top-4 right-4 ">
              <a
                href="https://github.com/Slay-MIT/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <img
                  src="GithubLogo/github-mark.svg"
                  alt="GitHub Logo Dark"
                  className="h-5 w-5 dark:hidden block"
                />
                <img
                  src="GithubLogo/github-mark-white.svg"
                  alt="GitHub Logo Light"
                  className="h-5 w-5 dark:block hidden"
                />
                <span className="dark:text-slate-200 text-slate-700">
                  Slay-MIT
                </span>
              </a>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <LazyImage src={parallaxImages[1]} alt="Jungle 1" className="absolute inset-0" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <LazyImage src={parallaxImages[2]} alt="Jungle 2" className="absolute inset-0" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <LazyImage src={parallaxImages[3]} alt="Jungle 3" className="absolute inset-0" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <LazyImage src={parallaxImages[4]} alt="Jungle 4" className="absolute inset-0" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <LazyImage src={parallaxImages[5]} alt="Jungle 5" className="absolute inset-0" />
          </ParallaxLayer>

          {/* Carousel Layer */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            className="relative flex justify-center items-center"
          >
            <Carousel />
          </ParallaxLayer>

          {/* Gallery Layer */}
          <ParallaxLayer
            offset={2}
            speed={0.35}
            className="relative flex justify-center items-start"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Gallery />
            </Suspense>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
