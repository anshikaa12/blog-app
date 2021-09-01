import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error("invalid");
            }
            return res.json();
        }).then(data => {

            setData(data);
            setPending(false);
        })
            .catch(err => {
                console.error(err);
            })
    }, [url]);
    return { data, isPending };
}

export default useFetch;