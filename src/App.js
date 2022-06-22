import './App.css';
import Bankoffers from './components/Bankoffers';
import BeautyandHygiene from './components/BeautyandHygiene';
import BestSellers from './components/BestSellers';
import Beverages from './components/Beverages';
import BrandStore from './components/BrandStore';
import Cleaning from './components/Cleaning';
import Deals from './components/Deals';
import FeaturedSlideimg from './components/FeaturedSlideimg';
import Footer from './components/Footer';
import FruitsandVegetables from './components/FruitsandVegetables';
import HomeandKitchen from './components/HomeandKitchen';
import MostPopular from './components/MostPopular';
import SliderImg from './components/Sliderimg';
import SliderImg2 from './components/Sliderimg2';
import SnacksStore from './components/SnacksStore';
import TopOffers from './components/TopOffers';
import YourDailyStaples from './components/YourDailyStaples';

function App() {
  return (
    <div>
     <SliderImg/>
     <Deals/>
     <Bankoffers/>
     <BestSellers/>
     <MostPopular />
     <TopOffers />
     <FruitsandVegetables/>
     <YourDailyStaples/>
     <Beverages/>
     <SnacksStore/>
     <Cleaning/>
     <BeautyandHygiene/>
     <HomeandKitchen/>
     <SliderImg2 />
     <BrandStore/>
     <FeaturedSlideimg/>
     <Footer/>
    </div>
  );
}

export default App;
