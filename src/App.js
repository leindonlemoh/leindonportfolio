import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Route from "./components/Route";
import Link from "./Link";
import Clock from "./components/Clock";

// experience Items
const expItems = [
  {
    title: " Full Stack Web Developer",
    institute: "KodeGo.ph",
    date: "July 01, 2022 - September 30, 2022",
  },
  {
    title: " Customer Service Representative",
    institute: "Sitel-Max Hub La Union",
    date: "June 01, 2021 - February 2, 2022",
  },
  {
    title: "Customer Service Representative ",
    institute: "Teleperformance- Baguio",
    date: "November 25, 2019 - June 06, 2020",
  },
  {
    title: "Customer  Service Representative",
    institute: "Teleperformance - Baguio",
    date: "August 13, 2019 - October 12, 2019",
  },
  {
    title: "Computer System Servicing NCII",
    institute: "SDI Lorma",
    date: "April 16, 2018 - May 29, 2018",
  },
  {
    title: "Bachelor's Degree BS Inormation Technology",
    institute: "Saint Louis College",
    date: "June 2013 - December 2017",
  },
  {
    title: "IT Intern",
    institute: "Pc4me",
    date: "August 17, 2017 - November 23, 2017",
  },
];

function App(props) {
  return (
    <>
      <Clock />
      <AppBar></AppBar>
      <Route path="/">
        <Profile />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/experience">
        <Experience expItems={expItems} />
      </Route>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
