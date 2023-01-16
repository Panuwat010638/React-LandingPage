import './App.css';
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Aboutme from "./components/Aboutme"
import SkillandEdu from "./components/SkillandEdu"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Aboutme/>
      <SkillandEdu/>
      <Project/>
      <Contact/>
      <Footer/>
 
    </div>
  );
}

export default App;
