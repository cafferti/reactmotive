import { useEffect, useState } from "react";

  const usefetch = (url) => {
  const [isPending, setPending] = useState(true);
  const [fresult, setFresult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, {signal:abortCont.signal})
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
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          if(error.name === 'AbortError'){
          }else{
            setFresult(data);
            setPending(false);
          }
        });
      setPending(false);
    }, 1000);
    return () => abortCont.abort()
  }, [url]);

  return { fresult, isPending, error };
};
export default usefetch;
