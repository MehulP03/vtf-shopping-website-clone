import './App.css';
import Bankoffers from './components/Bankoffers';
import BeautyandHygiene from './components/BeautyandHygiene';
import Beverages from './components/Beverages';
import BrandStore from './components/BrandStore';
import Cleaning from './components/Cleaning';
import FruitsandVegetables from './components/FruitsandVegetables';
import HomeandKitchen from './components/HomeandKitchen';
import MostPopular from './components/MostPopular';
import SnacksStore from './components/SnacksStore';
import TopOffers from './components/TopOffers';
import YourDailyStaples from './components/YourDailyStaples';

function App() {
  return (
    <div className="App">
     big basket
     <Bankoffers/>
     <MostPopular />
     <TopOffers />
     <FruitsandVegetables/>
     <YourDailyStaples/>
     <Beverages/>
     <SnacksStore/>
     <Cleaning/>
     <BeautyandHygiene/>
     <HomeandKitchen/>
     <BrandStore/>
    </div>
  );
}

export default App;
