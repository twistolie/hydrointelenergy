import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Foter from "./components/Foter";

function App() {

  return (
    <>
       <Navbar/>
       <Home/>
       <Services/> 
       <About/>
       <Projects/>
       <Blogs/>
       <Newsletter/>
       <Contact/>
       <Foter/>
       
    </>
  );
}

export default App;
