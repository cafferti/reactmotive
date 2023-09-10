import Marsintro from "./Marsintro";
import Marsstats from "./Marsstats";
import React, { useState } from 'react';

const NestedNav = () => {
  const [activeItem, setActiveItem] = useState('Mars');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

const items = ['Moon', 'Mars', 'Europa', 'Titans'];

  return (
    <div className="nav">
      <ul>
        {items.map((item) => ( <li key={item} onClick={() => handleItemClick(item)} className={activeItem === item ? 'active' : ''}> {item}
          </li>))}
     </ul>
         <div className="marsabout">
            <div className="part1">
            <Marsintro/>
         </div>
            <div className="part2">
            <Marsstats/>
            </div>
       

         </div>
     </div>
  );
};

export default NestedNav;
