const Bloglist = ({blogs, title, handleDelete}) => {
  return (
    <div className="bloglist">
      <h1>{title}</h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>writen by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id) } >delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
