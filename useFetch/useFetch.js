import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    useEffect(() => {

        return ( ) =>{
            isMounted.current = false;
        }

    },[])

    useEffect(() => {

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                if (isMounted.current) {
                    
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });

                }

            })
            .catch(() => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'No fetch data'
                })
            })
        

    },[url])


    return state;
    
}
