import React, { useState, useMemo } from 'react'

export default function Memo() {
    const [state, setState] = useState('state1');
    const [state2, setState2] = useState('state2');
    return (
        <div>
            <Child state={state} state2={state2}></Child>
            <button onClick={() => { setState(state + new Date().getTime()) }}>state</button>
            <button onClick={() => { setState2(state2 + new Date().getTime()) }}>state2</button>
        </div>
    )
}

function Child({ state, state2 }) {
    function changeState(state) {
        console.log('改变了')
        return '改变了' + state
    }
    const newState = useMemo(() => changeState(state), [state])
    return (
        <>
            <h1>{newState}</h1>
            <h1>{state2}</h1>
        </>
    )
}

