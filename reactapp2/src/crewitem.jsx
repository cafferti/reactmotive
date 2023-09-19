import { useEffect, useState } from "react";

const Carouselitem = ({ crewmember }) => {
  const [activecrew, setActiveCrew] = useState(0);
  const [activeclass, setActiveClass] = useState("swipe"); // Start with 'swipe' to initiate the first animation
  const sipe = 'sipe';
  

  const startInterval = () => {
    return setInterval(() => {
      if (activecrew < crewmember.length - 1) {
        setActiveClass("");
        setActiveCrew(activecrew + 1);
      } else {
        setActiveClass("");
        setActiveCrew(0);
      }
    }, 5000);
  };

  useEffect(() => {
    let intervalId = startInterval(); // Initialize the interval

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [activecrew]);


  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setActiveClass("swipe"); // Apply the 'swipe' class for animation
    }, 4500); // You can adjust this timeout value as needed
     
    setActiveClass("slide"); // Apply the 'swipe' class for animation
    return () => {
      clearTimeout(animationTimeout); // Clear the animation timeout when the component unmounts
    };
  }, [activecrew]);

  return (
    <div className={`${activeclass} ${sipe}`}>
      <div className="about">
        <h2>{crewmember[activecrew].Role}</h2>
        <h1>{crewmember[activecrew].Name}</h1>
        <p>{crewmember[activecrew].About}</p>
      </div>
      <img src={crewmember[activecrew].img} alt="" width={350} height={400} />
    </div>
  );
};

export default Carouselitem;
