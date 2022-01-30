import React, { useState, useEffect } from 'react';

function FetchHooks(url) {
    const [state, setState] = useState({data: [], loading: true, error: null});
    useEffect(() => {
        (async () => {
            const resp = await fetch(url);
            const data = await resp.json();
            // Simular tiempo de carga de 2 segundos
            setState({
                data: data,
                loading: false,
                error: false
            })
        })()
    }, []);

    return state;
}

export default FetchHooks;
