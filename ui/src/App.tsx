import {Spin} from "antd";
import React, {useEffect, useState} from 'react';

import {api} from "./services";


export function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [resp, setResp] = useState<string>();

    useEffect(() => {
        setIsLoading(true)
        api.getRoot().then(setResp).then(() => setIsLoading(false))
    }, []);

    return (
        <div>
            {isLoading ? <Spin/> : resp}
        </div>
    );
}
