import { useEffect, useState } from "react";

const Carouselitem = ({ crewmember }) => {

  const [activecrew, Setactivecrew] = useState(0)
  const [activeclass, Setactiveclass] = useState('')


const swipeclass = () =>{
 const ourin = setInterval(() =>{
    Setactiveclass('swipe')

  }, 3000)
}

useEffect(() =>{
 const intervalid = setInterval(() =>{
    swipeclass()
    if( activecrew < crewmember.length -1){
      Setactiveclass('')

      Setactivecrew(activecrew + 1)
    }else if(activecrew === crewmember.length -1){
      Setactiveclass('')
      Setactivecrew(0)
    }
  }, 3000)


  return () =>(
    clearInterval(intervalid)
  )  


},[activecrew])


  return (
    <div className={activeclass}>
      <h2>{crewmember[activecrew].Role}</h2>
      <h1>{crewmember[activecrew].Name}</h1>
      <p>{crewmember[activecrew].About}</p>
      <img src={crewmember[activecrew].img} alt="" width={350} />
    </div>
  );
};

export default Carouselitem;
