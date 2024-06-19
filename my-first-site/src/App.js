import './App.css';
import Header from './components/Header';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import {motion} from "framer-motion"

function App() {
  return (
    <div className="App bg-slate-800 snap-x">
      <Header className="snap-center"></Header>
      <SectionTwo className="snap-center"></SectionTwo>
      <SectionThree className="snap-center"></SectionThree>
    </div>
  );
}

export default App;
