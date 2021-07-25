// 父子组件传值
import React, { createContext, useContext, useState, useEffect } from 'react'
const CountContext = createContext()
function Counter() {
    const context = useContext(CountContext)
    useEffect(() => {
        console.log(`useEffect=>${context}`)
        return () => {
            // cleanup
        }
    }, [])
    return <>
        <h1>{context}</h1>
        <CounterChild />
    </>
}
function CounterChild() {
    const context = useContext(CountContext)

    return <h1>我是孙子：{context}</h1>
}
export default function Context() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点击的次数是：{count}</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
