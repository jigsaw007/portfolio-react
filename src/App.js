import React from "react";


import './App.css';
import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skill from "./components/skills/Skill";
// import Experience from "./components/experience/Experience";



function App() {
  return (
    <>
	  
 
    {/* <Navbar /> */}
    <Header />
    <About />
	<Projects />
	<Skill />
	{/* <Experience /> */}
    
    </>
  );
}

export default App;
