import {useLayoutEffect, useState} from 'react';

export function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        setSize(window.innerWidth);
    }, []);
    return size;
}