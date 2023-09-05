import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usefetch  from "./usefetch";
import { useHistory } from "react-router-dom";



const blogDetails = () => { useParams 
    const { id } = useParams()
    const {fresult:blog , error, isPending} = usefetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();

    const handledelete =()=>{
        fetch(`http://localhost:8000/blogs/` + blog.id,
    {method: 'DELETE'
}).then(() =>{
   history.push(`/`)
})

    }
    return ( 
        <div className="blogDetails">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
               <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={ handledelete} >delete</button>
               </article> 
            ) }
        </div>
     );
}
 
export default blogDetails;