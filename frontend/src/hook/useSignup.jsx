import axios from "axios";
import { useEffect, useState } from "react";


const useGitHub = (firstname, lastname, username, password) => {
    const [ user, setUser ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);

            try {
                const response = await axios.post(`https://api.github.com/users/${username}`);
                setUser(response);
                setLoading(false);
                console.log(response);
            }catch(err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData()
    }, [username])

    return {user, error, loading}
}

export default useGitHub;