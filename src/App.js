'useClient'
import React,{useState} from "react";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

import Clock from "./components/Clock";

function App(props) {

  const [currentTab,setCurrentTab]=useState('Profile')

  const selectedTab=()=>{
    switch (currentTab) {
      case 'Profile':
        return <Profile/>
      case 'Skills/Tools':
        return <Skills/>
      case 'Projects':
        return <Projects/>
      case 'Experience':
        return <Experience/>
    }
  }
  return (
    <div >
      <Clock />
      <AppBar setTab={setCurrentTab} current={currentTab}/>
{selectedTab()}

      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
