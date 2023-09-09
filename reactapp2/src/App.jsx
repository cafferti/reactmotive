import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Explore from "./Explore";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from "./destination";


function App() {
  const [imageUrl, setImageUrl] = useState(`url('/assets/home/background-home-desktop.jpg')`);

  //  location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname ===  '/'){
      setImageUrl(`url('/assets/home/background-home-desktop.jpg')`)
    }else if(location.pathname === '/des'){
      setImageUrl(`url('/assets/destination/background-destination-desktop.jpg')`)
    }
  },[location.pathname]);

  return (
    
    <Router>
      <div className="App" style={{backgroundImage:imageUrl}}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/des" element={<Destination/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;