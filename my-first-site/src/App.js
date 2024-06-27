import './App.css';
import Header from './components/Header';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';

function App() {
  return (
    <div className="App">
      <div className=' dark:bg-slate-800 bg-slate-400 snap-y snap-mandatory h-screen overflow-auto snap-center scroll-smooth'>
      <Header></Header>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      </div>
    </div>
  );
}

export default App;
