import Carouselitem from "./Carauselitems";
import commanderimg from "../public/assets/crew/image-douglas-hurley.webp";
import engineerimg from "../public/assets/crew/image-anousheh-ansari.webp";
import pilotimg from "../public/assets/crew/image-victor-glover.webp";
import specialimg from "../public/assets/crew/image-mark-shuttleworth.png";
import { useState } from "react";

const Crew = () => {
  const [activeindex, Setactiveindex] = useState(0);
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
      img: { pilotimg },
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
    <div className="carousel">
      <h1>02 MEET YOUR CREW</h1>

      {crewmembers.map((crewmember, index) => {
        return <Carouselitem key={index} crewmember={crewmember} />;
      })}

      <div className="btn">
        <button>Next</button>
        <button>Previous</button>
      </div>
    </div>
  );
};

export default Crew;
