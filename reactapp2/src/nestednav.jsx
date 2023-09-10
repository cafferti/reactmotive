import Marsintro from "./Marsintro";
import Marsstats from "./Marsstats";
import Moonstats from "./moonstats";
import Moonintro from "./moonintro";
import Europastats from "./europastats";
import Europaintro from "./europaintro";
import Titansstats from "./titanstats";
import Titansintro from "./titansintro";




import React, { useEffect, useState } from "react";

const NestedNav = () => {
  const [navigate, Setnavigate] = useState(0);

  const [activeItem, setActiveItem] = useState("Moon");
  const handleItemClick = (item) => {
    if (item === "Moon") {
      Setnavigate(0);
    } else if (item === "Mars") {
      Setnavigate(1);
    }else if(item === "Europa"){
        Setnavigate(3)
    }else if(item === "Titans"){
        Setnavigate(4)
    }
    setActiveItem(item);
  };
  const items = ["Moon", "Mars", "Europa", "Titans"];

  return (
    <div className="nav">
      <div className="marsabout">
        <div className="part1">
          {navigate === 0 && <Moonintro />}
          {navigate === 1 && <Marsintro />}
          {navigate === 3 && <Europaintro />}
          {navigate === 4 && <Titansintro />}


        </div>
        <div className="part2">
          <ul>
            {items.map((item) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)}
                className={activeItem === item ? "active" : ""}
              >
                {" "}
                {item}
              </li>
            ))}
          </ul>{" "}
          {navigate === 0 && <Moonstats />}
          {navigate === 1 && <Marsstats />}
          {navigate === 3 && <Europastats />}
          {navigate === 4 && <Titansstats />}


        </div>
      </div>
    </div>
  );
};

export default NestedNav;
