import React, { useState } from 'react'

export default function Example2() {
    const [age, setAge] = useState(18);
    const [sex, setSex] = useState('男');
    const [work, setWork] = useState('前端程序员');

    return (
        <div>
            <p>刘祥今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>职业：{work}</p>
        </div>
    )
}
