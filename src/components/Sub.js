import React from 'react'

export default function Sub(props){
    return (
        <div>
        <h1>From Sub Component</h1>
        <h1>{props.x - props.y}</h1>
        </div>
    )
    }