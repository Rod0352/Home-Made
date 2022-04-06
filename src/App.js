import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Food from "./components/Food";
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './index.css';

function App() {
  const [navItems] = useState([
    {
      name: "About",
    },
    {
      name: "Food",
    },
    {
      name: "Hygiene",
    },
    {
      name: "Apperal",
    },
  ]);
  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
    <Router>
      <Header></Header>
      <main>
        <Sidebar 
         currentNavItem={currentNavItem}
         setCurrentNavItem={setCurrentNavItem}
         navItems={navItems}
        />
      {currentNavItem.name === "About" && <About></About>}
      {currentNavItem.name === "Food" && <Food></Food>}
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
