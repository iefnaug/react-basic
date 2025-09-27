import {useState} from "react";

// export default function() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState("Hi!");
//     if (isSent) {
//         return <h1>Your message is on the way!</h1>
//     }
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             setIsSent(true)
//             sendMessage(message)
//         }}>
//             <textarea placeholder="message" onChange={e => setMessage(e.target.value)}></textarea>
//             <br/>
//             <button type="submit">Send</button>
//         </form>
//     )
// }
//
//
// function sendMessage(message) {
//     console.info("Sending message: ", message);
// }



export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br/>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br/>
            <button type="submit">Send</button>
        </form>
    );
}