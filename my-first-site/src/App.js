import "./App.css";
import Header from "./components/Header";
import Carousel from "./sections/Carousel";
import Gallery from "./sections/Gallery";
import NavbarGrid from "./components/NavbarGrid";
import Footer from "./components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const parallaxImages = [
  "Parallax/mountains.png",
  "Parallax/jungle1.png",
  "Parallax/jungle2V2.png",
  "Parallax/jungle3.png",
  "Parallax/jungle4.png",
  "Parallax/jungle5.png",
];

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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[0]})` }}
            />
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
                src="GithubLogo\github-mark.svg"
                alt="GitHub Logo Dark"
                className="h-5 w-5 dark:hidden block"
              />
              <img
                src="GithubLogo\github-mark-white.svg"
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[1]})` }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[2]})` }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[3]})` }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[4]})` }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${parallaxImages[5]})` }}
            />
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
            <Gallery />
          </ParallaxLayer>

          {/* <ParallaxLayer 
          offset={3}
        > */}
          {/* <Footer className="bottom-0 place-content-end" ></Footer> */}

          {/* </ParallaxLayer> */}
        </Parallax>
        {/* Footer outside Parallax to be below Gallery */}
      </div>
      {/* <Footer className="bottom-0 " /> */}
    </div>
  );
}

export default App;
