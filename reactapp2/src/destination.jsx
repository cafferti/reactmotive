import Marsintro from "./Marsintro";
import Marsstats from "./Marsstats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Destination = () => {
  return (
    <Router>
       <div className="descontainer">
        <div className="part1"> <Marsintro/></div>
        <div className="part2"><Marsstats/></div>
      </div>
      </Router>
  );
};

export default Destination;
