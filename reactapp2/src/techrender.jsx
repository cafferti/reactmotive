import { useState } from "react";
import Techcapsule from "./techcapsule"
import Techvehicle from "./techvehicle";
import Techspace from "./techspace"
const techrender = () => {
    const [activetech, setactivetech] = useState(1)

const techondisplay = (param) =>{
  if(param === 1){
    setactivetech(1)
  }else if(param === 2){
   setactivetech(2)
  }else if(param === 3){
    setactivetech(3)
  }
}


  return (
    <div className="techrender">
        <div className="technav">
            <div onClick={()=>{techondisplay(1)}} className={activetech === 1 ? "technavactive" : ""} >1</div>
            <div onClick={() =>{techondisplay(2)}} className={activetech === 2 ? "technavactive" : ""} >2</div>
            <div onClick={()=>{techondisplay(3)}} className={activetech === 3 ? "technavactive" : ""} >3</div>
        </div>
      <div className="techdetails">
        <h1 className="over" >
          <span>03</span> spacelaunch 101
        </h1>
        {activetech === 1 &&    <Techvehicle />}
        {activetech === 2 &&    <Techcapsule />}
        {activetech === 3 &&    <Techspace />}


      </div>
    </div>
  );
};

export default techrender;
