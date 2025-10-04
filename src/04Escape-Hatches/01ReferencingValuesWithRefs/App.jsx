import {useRef, useState} from 'react';

export default function Counter() {
    // const [count, setCount] = useState(0);
    const refCount = useRef(0);

    function handleClick() {
        // setCount(count + 1);
        refCount.current += 1;
    }

    return (
        <button onClick={handleClick}>
            You clicked {refCount.current} times
        </button>
    );
}
