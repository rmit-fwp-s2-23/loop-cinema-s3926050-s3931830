import "@picocss/pico"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import SideBarNav from "./Components/SideBarNav"
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {

  return (
    // <>
    // <Manifest/>
    //   <span className="gradient"></span>
    //   <div className = "main_container">
    //     <div className = "main_page">
    //       <Navigation/>

    //       <div className = "main_content">
    //         <Header/>

    //         <div className = "main_display">
    //           <ScrolltoTop/>
    //           <Routes>
    //             <Route path = "/" element={<Home/>}>
    //               <Route index element={<MovieList/>}/>
    //             </Route>
    //             <Route path="/Movie/:id" element={<Movie/>}/>
    //             <Route path="/Profile" element={<UserProfile/>}/>
    //             <Route path="*" element={<NotFound/>}/>
    //             <Route path = "/About" element={<About/>}/> 
    //             <Route path = "/account" element={<MyAccount />}/>
    //           </Routes>

    //         </div>
    //       </div>
    //     </div>

    //     <div className = "footer">Footer</div>

    //   </div>
    // </>

    <>
    <div className="outside-container">
      <main class="container-fluid">
        <SideBarNav />
        <MainContent />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </main>
      <Footer />
    </div>
      
    </>
  )
}

export default App;
