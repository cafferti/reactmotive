import { useEffect, useState } from "react";


const usefetch = (url) =>{
    const [isPending, setPending] = useState(true);
    const [fresult, setFresult] = useState(null);
    const [error, setError] = useState(null);
  
  

    useEffect(() => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw Error(`failed to fetch data from that resourse `);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setFresult(data);
            setPending(false);
            setError(null)
          })
          .catch((error) => {
            setError(error.message);
          });
        setPending(false);
      }, [url]);

      return { fresult, isPending, error}
    
}
export default usefetch