import './App.css';
import Bankoffers from './components/Bankoffers';
import BeautyandHygiene from './components/BeautyandHygiene';
import Beverages from './components/Beverages';
import Cleaning from './components/Cleaning';
import FruitsandVegetables from './components/FruitsandVegetables';
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
     <FruitsandVegetables/>
     <Beverages/>
     <SnacksStore/>
     <Cleaning/>
     <BeautyandHygiene/>
    </div>
  );
}

export default App;
