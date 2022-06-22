import './App.css';
import Bankoffers from './components/Bankoffers';
import Cleaning from './components/Cleaning';
import MostPopular from './components/MostPopular';
import SnacksStore from './components/SnacksStore';
import TopOffers from './components/TopOffers';

function App() {
  return (
    <div className="App">
     big basket
     <Bankoffers/>
     <MostPopular />
     <TopOffers />
     <SnacksStore/>
     <Cleaning/>
    </div>
  );
}

export default App;
