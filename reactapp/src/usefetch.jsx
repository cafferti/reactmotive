import { useEffect, useState } from "react";


const usefetch = () =>{
    const [isPending, setPending] = useState(true);
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);
  
  

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
          .then((response) => {
            if (!response.ok) {
              throw Error(`failed to fetch data from that resourse `);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setdata(data);
            setPending(false);
            setError(null)
          })
          .catch((error) => {
            setError(error.message);
          });
        setPending(false);
      }, []);
    
}
export default usefetch