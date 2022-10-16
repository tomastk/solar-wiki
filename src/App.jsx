import React, { useState } from "react";
import './App.css'
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./components/Hero";
import AboutSolarSystem from "./components/AboutSolarSystem";
import PlanetsNav from "./components/PlanetsNav";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [showed, setShowed] = useState(true)
  const updateMenu = () => {
    setShowed(!showed)
  }
  return (
  <div className="app">
    <Router>
      <section className="main-section">
        <Header  updateMenu={updateMenu} showed={showed} />
        <Hero />
      </section>
      <AboutSolarSystem />
      
      <PlanetsNav />
      <MobileNav />
    </Router>
  </div>
)};

export default App;
