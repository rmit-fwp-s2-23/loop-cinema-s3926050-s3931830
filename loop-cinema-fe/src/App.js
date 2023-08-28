import "@picocss/pico"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import SideBarNav from "./Components/SideBarNav"
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {

  return (
    <>
    <div className="outside-container">
      <main class="container-fluid">
        <SideBarNav />
        <MainContent />
      </main>
      <Footer />
    </div>
      
    </>
  )
}

export default App;
