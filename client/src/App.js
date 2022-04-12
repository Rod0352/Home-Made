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
import {setContext} from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import './App.css';
import './index.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
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
      <Footer></Footer>
    </Router>
    </ApolloProvider>
  );
}

export default App;
