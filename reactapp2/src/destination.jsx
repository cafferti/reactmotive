import Marsintro from "./Marsintro";
import Marsstats from "./Marsstats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nestednav from "./nestednav";

const Destination = () => {
  return (
    
       <div className="descontainer">
        <div className="part1"> <Marsintro/></div>
        <div className="navcontain">
            <div><Nestednav/></div>
        <div className="part2"><Marsstats/></div>
        </div>
      </div>
  );
};

export default Destination;
