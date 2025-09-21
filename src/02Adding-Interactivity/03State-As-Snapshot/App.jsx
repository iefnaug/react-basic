import {useState} from 'react';

// export default function Form() {
//     console.log('reader Form')
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('Hi!');
//     if (isSent) {
//         return <h1>Your message is on its way!</h1>
//     }
//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//         }}>
//       <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => {
//               console.log('onChange')
//               setMessage(e.target.value)
//           }}
//       />
//
//             <button type="submit">Send</button>
//         </form>
//     );
// }

// function sendMessage(message) {
//     console.log('send:' + message)
// }


// export default function Counter() {
//     const [number, setNumber] = useState(0);
//     console.log('counter render', number);
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);
//
//                 setNumber(number + 5)
//                 //A state variable’s value never changes within a render,
//                 //even if its event handler’s code is asynchronous.
//                 setTimeout(() => {
//                     alert(number)
//                 }, 3000)
//
//             }}>+n</button>
//         </>
//     )
// }



// export default function Form() {
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         setTimeout(() => {
//             alert(`You said ${message} to ${to}`);
//         }, 5000);
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 To:{' '}
//                 <select
//                     value={to}
//                     onChange={e => {
//                         setTo(e.target.value)
//                         setMessage('aaaaaaaaaaa')
//                     }}>
//                     <option value="Alice">Alice</option>
//                     <option value="Bob">Bob</option>
//                 </select>
//             </label>
//             <textarea
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// }


// export default function Counter() {
//     const [number, setNumber] = useState(0);
//     console.info('render...')
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 setNumber(n => n + 1);
//                 setNumber(42);
//             }}>Increase the number</button>
//         </>
//     )
// }


export default function RequestTracker() {
    console.log('rendering...');
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(pending => pending + 1);
        //遇到断点会先渲染一次
        await delay(3000);
        //后续的批处理会合并，再次渲染一次
        setPending(pending => pending - 1);
        setCompleted(completed => completed + 1);
        console.log('completed');
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        console.log('delay start', resolve);
        setTimeout(resolve, ms);
        console.log('delay end');
    });
}

