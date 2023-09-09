import React, { useState } from 'react';

const NestedNav = () => {
  // State to track the active item
  const [activeItem, setActiveItem] = useState('Mars');

  // Function to handle item click
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Define the items
  const items = ['Moon', 'Mars', 'Europa', 'Titans'];

  return (
    <div className="nav">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={activeItem === item ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedNav;
