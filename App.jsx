import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from './views/Home';
import Selector from './views/Selector';
import Pokemones from './views/Pokemones';

export default function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pokemones" element={<Selector />} />
            <Route path="/pokemones/:pokemonId" element={<Pokemones />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }