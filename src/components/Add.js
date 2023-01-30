import React from 'react'

export default function Add(props){
    return (
        <div>
        <h1>From Add Component</h1>
        <h1>{props.x + props.y}</h1>
        </div>
    )
    }