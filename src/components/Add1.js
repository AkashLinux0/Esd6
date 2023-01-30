import React,{ useState } from 'react'

export default function Add1(props){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setRes] = useState(0);

    function addfun(){
        setRes(num1 + num2);
    }

    return (
        <div>
        <h1>Addition1</h1>
        Num1:<input type="text" onChange={e => setNum1(parseInt(e.target.value))} /> <br></br><br></br>
        Num2:<input type="text" onChange={e => setNum2(parseInt(e.target.value))} /> <br></br>
        <br></br><button onClick={addfun} class ="btn btn-primary">Addition</button><br></br><br></br>
        <div>{result}</div>
        </div>
    )
    }