import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  const [isPending, setPending] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState(`mario`);
  const [error, setError] = useState("null");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        if (!response.ok) {
          throw Error(`failed to fetch data from that resourse `);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setPending(false);
        setError(null)
      })
      .catch((error) => {
        setError(error.message);
      });
    setPending(false);
  }, []);
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
