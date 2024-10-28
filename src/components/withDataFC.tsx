import { useState, useEffect } from 'react';

const withDataFC = (endpoint: any, dataToState: any) => (Component: any) => {
    return (props: any) => {
        const [state, setState] = useState([]);

        const fetchData = (endpoint: any) => {
            if (typeof endpoint === 'function') {
                endpoint = endpoint(props)
            }

            fetch(endpoint)
                .then((result) => result.json())
                .then((data) => setState(dataToState(data)))
        }

        useEffect(() => {
            fetchData(endpoint);
        }, [endpoint])

        return <Component {...props} {...state} />
    };
};

export { withDataFC }
