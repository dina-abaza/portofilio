
import Skills from './skills';
import './App.css'
import Header from './header'
import React from 'react';
import About from './about';
import Education from './education';
import Projects from './projects';
import Contact from './contact';
function App() {

  return (
  <div>
     <Header/>
     <Skills/>
     <About/>
     <Education/>
     <Projects/>
     <Contact/>
  </div>
 
  
  )
}

export default App
