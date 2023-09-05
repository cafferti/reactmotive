import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] = useState('mario')

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form>
        <label> Blog Details</label>
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
        <button>Add button</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
