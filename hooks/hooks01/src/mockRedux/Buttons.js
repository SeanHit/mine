import React, { useContext } from 'react'
import { UPDATE_COLOR, ColorContext } from './Color'

export default function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'blue' })}>蓝色</button>
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'yellow' })}>黄色</button>
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'green' })}>绿色</button>
        </div>
    )
}
