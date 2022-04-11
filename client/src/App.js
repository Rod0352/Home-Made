import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Food from "./components/Food";
import Add from "./components/Add";
import Apperal from "./components/Apperal"
import Hygiene from "./components/Hygiene";
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
    {
      name: "Add A Buisness"
    }
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
      {currentNavItem.name === "Add A Buisness" && <Add></Add>}
      {currentNavItem.name === "Hygiene" && <Hygiene></Hygiene>}
      {currentNavItem.name === "Apperal" && <Apperal></Apperal>}
      </main>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
