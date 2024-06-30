import "./App.css";
import Header from "./components/Header";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
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
      <div className="dark:bg-gradient-to-t from-purple-800 to-slate-900 bg-slate-400 snap-y snap-mandatory h-screen overflow-auto snap-center scroll-smooth">
        <Parallax pages={3} style={{ top: "0", left: "0", width: "100%" }}>
          {/* Background layers for parallax effect */}
          <ParallaxLayer offset={0} speed={0.3}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"


              }}
            />
          </ParallaxLayer>

          {/* Header Layer */}
          <ParallaxLayer
            offset={0}
            speed={-0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex : 1
            }}
          >
            <Header />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"

              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[2]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"

              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[3]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"

              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[4]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"

              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.40}>
            <div
              style={{
                backgroundImage: `url(${parallaxImages[5]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                loading: "lazy"

              }}
            />
          </ParallaxLayer>

          {/* SectionTwo Layer */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SectionTwo />
          </ParallaxLayer>

          {/* SectionThree Layer */}
          <ParallaxLayer
            offset={2}
            speed={0.35}
            style={{
              display: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SectionThree />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
