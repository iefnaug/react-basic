import {useEffect, useRef, useState} from "react";
import './style.css'

export default function App() {
    return (
        // <h1>React Beginning</h1>
        // List()
        // LogicShow()
        // Counter()
        // FormBind()
        // Parent()
        A()
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

/*
组件传值
 */
function Child(props) {
    console.log(props)
    return (
        <>
            <div>this is a child</div>
            {props.children}
        </>
    )
}

function Parent() {
    let name = 'this is a child';
    return (
        <Child
            name={name}
            age={18}
            isTrue={true}
            obj={{a:1, b:2}}
            arr={['a', 'b', 'c']}
            fc={() => console.log('test')}
            jsx={<span>this is jsx</span>}
        >
            <span>内部元素</span>
        </Child>
    )
}

/*
同级组件通信，状态提升
 */
function A() {
    const [msg, setMsg] = useState('')
    function getMsg(msg) {
        setMsg(msg)
    }

    // wrong way
    // let msg = ''
    // function getMsg(message) {
    //     msg = message
    // }

    return (
        <>
            <B1 getMsg={getMsg}></B1>
            <B2 msg={msg}></B2>
        </>
    )
}

function B1({getMsg}) {
    let msg = 'the msg from B1'
    return (
        <div onClick={() => getMsg(msg)}>B1</div>
    )
}

function B2({msg}) {
    return (
        <div>B2: {msg}</div>
    )
}