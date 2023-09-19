import Carouselitem from "./crewitem";
import commanderimg from "/assets/crew/image-douglas-hurley.webp";
import engineerimg from "/assets/crew/image-anousheh-ansari.webp";
import pilotimg from "/assets/crew/image-victor-glover.webp";
import specialimg from "/assets/crew/image-mark-shuttleworth.webp";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Crew = () => {
  const location = useLocation()
  const espan = "espan";
  const [activediv, setActivediv] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activediv < 3) {
        setActivediv(activediv + 1);
      } else if (activediv === 3) {
        setActivediv(0);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [activediv]); // Empty dependency arr
  const crewmembers = [
    {
      Role: "Commander",
      Name: " Douglas Hurley",
      About:
        "    Douglas Gerald Hurley is an American engineer, former Marine Corps pilotand former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: commanderimg,
    },
    {
      Role: "  Flight Engineer",
      Name: "Anousheh Ansari",
      About:
        "     Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: engineerimg,
    },
    {
      Role: " Pilot",
      Name: " Victor Glover",
      About:
        "     Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: pilotimg,
    },
    {
      Role: " Mission Specialist",
      Name: " Mark Shuttleworth",
      About:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ",
      img: specialimg,
    },
  ];

  return (
    <div className="crewrender">
      <h1> <span>02</span> MEET YOUR CREW</h1>
      <Carouselitem crewmember={crewmembers} />
      <div style={{ display: "flex" }}>
        <div className={`espan ${activediv === 0 ? "activeespan" : ""}`}></div>
        <div className={`espan ${activediv === 1 ? "activeespan" : ""}`}></div>
        <div className={`espan ${activediv === 2 ? "activeespan" : ""}`}></div>
        <div className={`espan ${activediv === 3 ? "activeespan" : ""}`}></div>
      </div>
    </div>
  );
};

export default Crew;
