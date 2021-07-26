import React, { useReducer } from 'react'

export default function Reducer() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0)
    return <>
        <h1>你点击的次数：{count}</h1>
        <button onClick={() => dispatch('add')}> increase </button>
        <button onClick={() => dispatch('sub')}> decrease </button>
    </>
}

