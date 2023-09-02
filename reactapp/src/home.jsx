import { useState } from "react";

const Home = () => {
 
    const [blogs,setBlogs] = useState([
     {title: 'my new website', body:`lorem....`,author:'mario',id: 1  },
     {title: 'Welcome home', body:`lorem....`,author:'Yoshi',id: 2 },
     {title: 'web dev tips', body:`lorem....`,author:'mario',id: 3 }   
    ])

  return (
    <div className="home">
        {blogs.map((blog) =>(
           <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>writen by {blog.author}</p>
           </div> 
        ))}
    </div>
  );
};

export default Home;
