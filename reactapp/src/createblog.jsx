import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] = useState('mario')
const   [isPending, setIspending ] = useState(false)

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
        </select>
        {!isPending &&   <button>Add button</button>}
        {isPending &&   <button> Adding blog.....</button>}

      </form>
    </div>
  );
};

export default Create;
