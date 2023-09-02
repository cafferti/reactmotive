import { useState } from "react";

const Home = () => {
  let [count,setCount] = useState(0);
  // let username = `austin`
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleclick = () => { 
    if(count === 0){
        setName("luigi");
        setAge(30)
        setCount(1)
    }else{
        setName('mario')
        setAge(25)
        setCount(0)
    }
  
   
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleclick}>click me</button>
    </div>
  );
};

export default Home;
