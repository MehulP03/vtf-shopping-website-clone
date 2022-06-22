import './App.css';
import Bankoffers from './components/Bankoffers';
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
    </div>
  );
}

export default App;
