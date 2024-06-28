import React,{useState,useEffect} from "react"

const Try = (mydate) => {
    const [tryDate,setTryDate]=useState(null)
    useEffect(()=>{
    if(mydate){
        setTryDate(new Date(mydate).getMonth())
    }
    },[tryDate])
  return tryDate
};

export default Try;
