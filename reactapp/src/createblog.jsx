import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] = useState('mario')
const   [isPending, setIspending ] = useState(false)
const history = useHistory();

const handlesubmit = (e) =>{
   e.preventDefault()
   const blog = {title, body, author}
   console.log(blog)
  
   setIspending(true)
   fetch("http://localhost:8000/blogs", {
    method: 'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(blog)
   }).then (()=>{
    console.log(`new blog added`)
    setIspending(false)
   })

   history.push(`/`)
}
  
  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={handlesubmit} >
        <label> Blog Title</label>
        <input type="text"
         required 
         value={title}
         onChange={(e) => setTitle(e.target.value)}/>

        <label> Blog Body</label>
        <textarea
         required 
         value={body}
         onChange={(e) => setBody(e.target.value)}/>

        <label>Blog Author</label>
        <select
        value={{author}}
        onChange={(e) => setAuthor(e.target.value) }>
            <option value= "mario" >mario</option>
            <option  value= "yoshi" >Yoshi</option>
            <option value= " Harper Lee" > Harper Lee</option>
            <option  value= "George Orwell" > George Orwell</option>
            <option value= "Jane Austen" >Jane Austen</option>
            <option  value= "F. Scott Fitzgerald" >YF. Scott Fitzgerald</option>
            <option  value= "J.D. Salinger" >J.D. Salinger</option>

    

        </select>
        {!isPending &&   <button>Add button</button>}
        {isPending &&   <button> Adding blog.....</button>}

      </form>
    </div>
  );
};

export default Create;
