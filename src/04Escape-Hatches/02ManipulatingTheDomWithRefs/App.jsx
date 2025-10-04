import { useRef } from "react";

// export default function Form() {
//
//     const inputRef = useRef(null);
//
//     function handleClick() {
//         inputRef.current.focus();
//     }
//
//     return (
//         <>
//             <input type="text" ref={inputRef} />
//             <button onClick={handleClick}>
//                 Focus on the input
//             </button>
//         </>
//     )
// }


function MyInput({re}) {
    return <input ref={re} />;
}

export default function MyForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput re={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}