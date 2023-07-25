import { useState, useEffect } from 'react';


const useFetch = (url) => { 
    const [Blog, setBlog] = useState(null)
    const abortCont = new AbortController();

 useEffect(() => {
        fetch(url)
            .then((rev) => {
                if (!rev.ok) { 
                    throw Error("Could not fetch data for that resource")
                } else {
                    return rev.json()
                }
            })
            .then((data) => setBlog(data))
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                      console.log(err.message);
                }
            });
          },[])

    return { Blog, setBlog };
    return () => abortCont.abort();
}

export default useFetch;