import React from 'react'
import Buttons from './Buttons'
import { Color } from './Color'
import ShowArea from './ShowArea'

export default function index() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>

        </div>
    )
}
