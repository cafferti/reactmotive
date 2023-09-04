import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  const [isPending, setPending] = useState(true)
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState(`mario`);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(response =>{
        return response.json();
    })
    .then(  (data) =>{
       console.log(data) 
       setBlogs(data)
       setPending(false)
    })
  }, []);

  //using async function/
//   useEffect(() => {
//     (async () => {
//       const response = await fetch('http://localhost:8000/blogs');
//       const data = await response.json();
//       setBlogs(data);
//     })();
//   }, []);

  return (
    <div className="home">
        {isPending && <div>loading....</div>}
    { blogs && <Bloglist blogs={blogs} title="All Blogs!"  />}  
    </div>
  );
};

export default Home;
