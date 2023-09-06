import { Link } from "react-router-dom/cjs/react-router-dom.min";

const notfound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>page not found</p>
           <button><Link to = "/">HomePage</Link></button> 
        </div>
     );
}
 
export default notfound;