import {useState} from 'react';

export default function Form() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    //状态
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing')
            setError(err)
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    function submitForm(answer) {
        // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error(`Good guess but '${answer}' is a wrong answer. Try again!`));
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}/>
                <br />
                <button disabled={status === 'submitting' || answer.length === 0} >
                    Submit
                </button>
                {error != null && <p className="Error">{error.message}</p>}
            </form>
        </>
    )
}
/**
 * When developing a component:
 * Identify all its visual states.
 * Determine the human and computer triggers for state changes.
 * Model the state with useState.
 * Remove non-essential state to avoid bugs and paradoxes.
 * Connect the event handlers to set state.
 */


