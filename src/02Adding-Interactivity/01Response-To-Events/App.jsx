// export default function Button() {
//
//     function handleClick() {
//         alert("Hello World!")
//     }
//
//     return (
//         <button onClick={handleClick}>click</button>
//     )
//
// }

/**
 * Reading props in event handlers
 */
function AlertButton(props) {
    return (
        <button onClick={() => alert(props.message)}>{props.children}</button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message='Playing!'>Play Movie</AlertButton>
            <AlertButton message={'Uploading!'}>Upload Image</AlertButton>
        </div>
    )
}