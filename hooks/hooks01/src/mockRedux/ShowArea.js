import React, { useContext } from 'react'
import { ColorContext } from './Color'



export default function ShowArea() {
    const { color } = useContext(ColorContext)
    return (
        <div>
            <h1 style={{ color: color }}>文字的颜色是{color}</h1>
        </div>
    )
}
