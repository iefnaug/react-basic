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
// function AlertButton(props) {
//     return (
//         <button onClick={() => alert(props.message)}>{props.children}</button>
//     )
// }
//
// export default function Toolbar() {
//     return (
//         <div>
//             <AlertButton message='Playing!'>Play Movie</AlertButton>
//             <AlertButton message={'Uploading!'}>Upload Image</AlertButton>
//         </div>
//     )
// }


// function Button({onClick, children}) {
//     return (
//         <button onClick={e => {
//             e.stopPropagation();
//             onClick();
//         }}>{children}</button>
//     )
// }

/**
 * 阻止事件传播
 */
// export default function Toolbar() {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//             }}>
//             <Button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </Button>
//             <Button onClick={() => alert('Uploading!')}>
//                 Upload Image
//             </Button>
//         </div>
//     )
// }

/**
 * 阻止默认行为
 */

export default function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert(`Thanks for us!`);
        }}>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    )
}