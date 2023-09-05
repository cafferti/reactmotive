import { useParams } from "react-router-dom";


const blogDetails = () => { useParams
    const { id } = useParams()
    return ( 
        <div className="blogDetails">
            <h2>Blog details - { id }</h2>
        </div>
     );
}
 
export default blogDetails;