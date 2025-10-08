import {useEffect, useRef, useState} from "react";
import './style.css'

export default function App() {
    return (
        // <h1>React Beginning</h1>
        // List()
        // LogicShow()
        // Counter()
        FormBind()
    )
}

/*
渲染列表
 */
let data = [
    {"id": 1, name: "gf"},
    {"id": 2, name: "afei"},
]
function List() {
    return (
        <ul>
            {data.map((item, index) => (<li key={item.id}>{item.name}</li>))}
        </ul>
    )
}

/*
逻辑运算
 */
const isLogin = false;
function LogicShow() {
    return (
        <div>
            {isLogin && <span>login</span>}
            {isLogin || <span>please login first</span>}
        </div>
    )
}

/*
state
 */
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className={"show"}>{count}</div>
            <button onClick={() => setCount(count + 1)}>add+1</button>
        </>
    )
}

/*
表单绑定
 */
function FormBind() {
    const [value, setValue] = useState('')
    const inputRef = useRef(null);
    useEffect(() => {
        console.log(inputRef.current)
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} onChange={(e) => setValue(e.target.value)} value={value} />
        </div>

    )
}