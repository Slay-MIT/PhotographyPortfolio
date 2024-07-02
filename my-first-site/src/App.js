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
      <div className="dark:bg-gradient-to-t from-purple-800 to-slate-900 bg-slate-400 snap-y h-screen overflow-visible snap-center scroll-smooth">
        <Parallax pages={3} style={{ top: "0", left: "0", width: "100%" }} className="custom-parallax">
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

          <ParallaxLayer offset={0} speed={0.40}>
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
