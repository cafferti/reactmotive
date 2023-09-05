import Bloglist from "./bloglist";
import usefetch from "./usefetch";

const Home = () => {
const {fresult:blogs, isPending, error} =usefetch("http://localhost:8000/blogs")

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
