import React,{useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);
    
    const incrementCount= () => {
        setAge(count+1);
    }
    const decrementCount= () => {
        setAge(count-1);
    }
    const incCount= () => {
        setAge(count+1);
    }
    
}