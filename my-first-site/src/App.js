import './App.css';
import Header from './components/Header';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import {motion} from "framer-motion"

function App() {
  return (
    <div className="App">
      <div className=' bg-slate-800 snap-y snap-mandatory h-screen overflow-scroll scroll-smooth'>
      <Header></Header>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      </div>
    </div>
  );
}

export default App;
