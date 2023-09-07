import { Link } from "react-router-dom/cjs/react-router-dom";

const Bloglist = ({blogs, title, }) => {
  return (
    <div className="bloglist">
      <h1>{title}</h1>
  
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to = {`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>writen by {blog.author}</p>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;