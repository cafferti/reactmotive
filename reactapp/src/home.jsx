import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: `lorem....`, author: "mario", id: 1 },
    { title: "Welcome home", body: `lorem....`, author: "Yoshi", id: 2 },
    { title: "web dev tips", body: `lorem....`, author: "mario", id: 3 },
  ]);
  const [name, setName] = useState(`mario`);

  const handleDelete = (id) => {
    const newblog = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(newblog);
  };

  useEffect(() => {
    console.log("use effect running");
    console.log(name);
  }, []);
  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
