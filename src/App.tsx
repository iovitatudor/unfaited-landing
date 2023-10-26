import React from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Apocalypse from "./components/Apocalypse";
import Icy from "./components/Icy";
import Terrains from "./components/Terrains";
import Divided from "./components/Divided";
import Features from "./components/Features";
import BuyGame from "./components/BuyGame";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div id="Header"><Header/></div>
        <div id="Banner"><Banner/></div>
        <div id="Gallery"><Gallery/></div>
        <div id="Apocalypse"><Apocalypse/></div>
        <div id="Icy"><Icy/></div>
        <div id="Terrains"><Terrains/></div>
        <div id="Divided"><Divided/></div>
        <div id="Features"><Features/></div>
        <div id="BuyGame"><BuyGame/></div>
        <div id="Footer"><Footer/></div>
      </div>
    </div>
  );
}

export default App;
