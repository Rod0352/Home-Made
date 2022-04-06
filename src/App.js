import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About"
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
    <>
      <Header></Header>
      <main>
      {currentNavItem.name === "About" && <About></About>}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
