import { useEffect, useState } from "react";

const Carouselitem = ({ crewmember }) => {

  const [activecrew, Setactivecrew] = useState(0)
  const [activeclass, Setactiveclass] = useState('')
  const sipe = 'sipe'


const swipeclass = () =>{
 const ourin = setInterval(() =>{
    Setactiveclass('swipe')

  }, 4850)
  return ourin
}

useEffect((ourin) =>{
 const intervalid = setInterval(() =>{
  swipeclass()
    if( activecrew < crewmember.length -1){
      Setactiveclass('')
      Setactivecrew(activecrew + 1)
    }else if(activecrew === crewmember.length -1){
      Setactiveclass('')
      Setactivecrew(0)
    }
    clearInterval(ourin)
  }, 5000)
  

  return () =>(
    clearInterval(intervalid)
  )  


},[activecrew])


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
