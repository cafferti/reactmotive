import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading....</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

//using async function/
//   useEffect(() => {
//     (async () => {
//       const response = await fetch('http://localhost:8000/blogs');
//       const data = await response.json();
//       setBlogs(data);
//     })();
//   }, []);
