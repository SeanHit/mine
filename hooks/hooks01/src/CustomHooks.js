import React, { useState } from 'react'

export default function CustomHooks() {
    const size = useWindowSize()
    return (
        <div>
            页面的大小{`width:${size.width}x${size.height}`}
        </div>
    )
}

function useWindowSize() {
    const [size, setSize] = useState({
        width: document.documentElement.offsetWidth,
        height: document.documentElement.offsetHeight
    })
    const onResize = () => {
        setSize({
            width: document.documentElement.offsetWidth,
            height: document.documentElement.offsetHeight
        })
    }
    useState(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
    return size
}
