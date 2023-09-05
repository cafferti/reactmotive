import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usefetch  from "./usefetch";


const blogDetails = () => { useParams
    const { id } = useParams()
    const {fresult:blog , error, isPending} = usefetch("http://localhost:8000/blogs/" + id)
    return ( 
        <div className="blogDetails">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
               <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
               </article> 
            ) }
        </div>
     );
}
 
export default blogDetails;