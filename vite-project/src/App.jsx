import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import AboutMe from "./pages/Aboutme"
import Header from "./components/Header"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Footer from "./components/Footer"

function App() {


  return (
<div className="App">
  <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<AboutMe/> } />
      <Route path="/contact" element= {<Contact/>}/>
      <Route path="/portfolio" element= {<Portfolio/>}/>
      <Route path="/resume" element= {<Resume/>}/>
    </Routes>
    <Footer/>
  </Router>
</div>
  )
}

export default App
