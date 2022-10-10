import './index.scss';
import { Header } from './Components/Header/Header';
import SectionOne from './Components/Section/SectionOne';
import { Data } from './Components/Data/Data'
import { SectionTwo } from './Components/Section/SectionTwo';
import { SectionThree } from './Components/Section/SectionThree';
import { SectionFour } from './Components/Section/SectionFour';
import { SectionFive } from './Components/Section/SectionFive';
import { Instagram } from './Components/Instagram/Instagram';
import { Footer } from './Components/Footer/Footer';
import { Suscribite } from './Components/Suscribite/Suscribite';

function App() {
  return (
    <div>
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a>*/}

      <Header />
      <SectionOne slides={Data} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Instagram />
      <Suscribite />
      <Footer />
    </div>
  );
}

export default App;
