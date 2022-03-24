import {useState, useCallback, useContext} from 'react';
import AuthContext from "../security/authContext";

const useFetch = () => {
    const REST_PATH = "http://127.0.0.1:8080/api"

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const authCtx = useContext(AuthContext);

    const sendRequest = useCallback(async (requestConfig, applyData, p) => {
        setIsLoading(true);
        setError(null);

        if (!requestConfig.headers) {
            requestConfig.headers = {};
        }

        if (authCtx.isLoggedIn) {
            requestConfig.headers['Authorization'] = authCtx.requestToken;
        }

        const APIAddress = REST_PATH + requestConfig.url;
        try {
            const response = await fetch(APIAddress, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers,
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const responseText = await response.text();
            let data = responseText === "" ? {} : JSON.parse(responseText);
            applyData(data);
        } catch (error) {
            setError(error.message || 'Something went wrong.');
        }
        setIsLoading(false);
    }, [authCtx]);


    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useFetch;