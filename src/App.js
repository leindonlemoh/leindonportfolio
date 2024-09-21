'useClient'
import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Clock from "./components/Clock";

function App() {
  const tabs = ['Profile', 'Skills/Tools', 'Projects', 'Experience'];
  
  // Get the current tab from the URL (if present) or default to 'Profile'
  const getTabFromUrl = () => {
    const urlTab = window.location.pathname.slice(1); // Get the URL path without '/'
    return tabs.includes(urlTab) ? urlTab : 'Profile';
  };

  const [currentTab, setCurrentTab] = useState(getTabFromUrl());

  // Update the URL whenever the tab changes
  useEffect(() => {
    window.history.pushState(null, '', `/${currentTab}`);
  }, [currentTab]);

  const selectedTab = () => {
    switch (currentTab) {
      case 'Profile':
        return <Profile />;
      case 'Skills/Tools':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
      <Clock />
      <AppBar setTab={setCurrentTab} current={currentTab} />
      {selectedTab()}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
