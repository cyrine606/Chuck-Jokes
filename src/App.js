import Navbar from './components/Navbar/Navbar';
import './App.css';
import BannerSection from './components/BannerSection/BannerSection';
import FilterMenu from './components/Filter/FilterMenu';
import JokesList from './components/JokesList/JokesList';
import JokeDetails from './components/JokeDetails/JokeDetails';
import Footer from './components/Footer/Footer';
import {useState, createContext} from 'react'

export const AppContext = createContext(null);


function App() {
  const[joke, setJoke] = useState({})
  const[show, setShow] = useState(true)
  


  return (
    <AppContext.Provider value={{ joke, setJoke, show, setShow }}>
      <Navbar />
      <BannerSection />
      {show && <FilterMenu />}
      {show && <JokesList />}
      {!show && <JokeDetails />}
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
