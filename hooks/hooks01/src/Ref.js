// 控制Dom / 保存变量

import React, { useRef } from 'react'

export default function Ref() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.value = 'hello world';
        console.log(ref)
    }
    return (
        <div>
            <input ref={ref} type="text" />
            <button onClick={handleClick}>点击显示input的值</button>
        </div >
    )
}
