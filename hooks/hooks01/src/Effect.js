import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";

function Index() {
    useEffect(() => {
        console.log(`首页页面，进来了`)
        return () => {
            console.log(`首页页面，出去了`);
        }
    }, [])
    return <h1>index首页</h1>
}
function List() {
    useEffect(() => {
        console.log(`列表页面，进来了`)
        return () => {
            console.log(`列表页面，出去了`);
        }
    })
    return <h1>List列表页面</h1>
}
export default function Effect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>${count}`)
        return () => {
            console.log('===============');
        }
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <BrowserRouter>
                <ul>
                    <li><Link to="/" >首页</Link></li>
                    <li><Link to="/list" >列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list' exact component={List} />

            </BrowserRouter>
        </div>
    )
}
