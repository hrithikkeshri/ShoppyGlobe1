import { useEffect, useState } from "react";
import axios from "axios"



// a Custom Hook which fatch data
export default function useFatch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fatchData() {
            try {
                const responseData = await axios.get(url);
                console.log(responseData.data)
                setData(responseData.data)
            } catch (error) {
                 setError(error.message)
            } finally{
                setLoading(false);
            }

        }
        fatchData();
    },[])
    return {data,error,loading}
}