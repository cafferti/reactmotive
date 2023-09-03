import { useState } from "react";
import Bloglist from "./bloglist";

const Home = () => {
 
    const [blogs,setBlogs] = useState([
     {title: 'my new website', body:`lorem....`,author:'mario',id: 1  },
     {title: 'Welcome home', body:`lorem....`,author:'Yoshi',id: 2 },
     {title: 'web dev tips', body:`lorem....`,author:'mario',id: 3 }   
    ])

  return (
    <div className="home">
        <Bloglist blogs={blogs} title = 'All Blogs!'/>
        <Bloglist blogs={blogs.filter((blog) => blog.author === `mario`) } title = 'Marios Blogs!'/>

    </div>
  );
};

export default Home;
