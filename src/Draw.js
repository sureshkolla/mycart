import React,{useState} from "react";
import useDateToTimestamp from "./useDateToTimestamp";
const Draw = (props) => {
    const [data,setData]=useState([]);
    const [user,setUser]=useState({});
    const [myDtae,setMyDate]=useState('12/12/2023');
    const [editNumber,setEditNumber]=useState(-1);
    const timestamp=useDateToTimestamp(myDtae)

    const changeHand=(event)=>{
        setMyDate(event.target.value);
    }
    const changeHandler=(event)=>{
        let filedName=event.target.name;
        let value = event.target.value;
        setUser({...user,[filedName]:value });
    }
    const submitData=()=>{
        if(editNumber!=-1){
            data[editNumber]=user;
            setData(data);
        }else{
            setData([...data,user]);
        }
        setUser({});
        setEditNumber(-1);
    }
    const delMe=(index)=>{
        let afterFilter=data.filter((ele,n)=>(n!=index));
        setData(afterFilter);
    }
    const editMe=(index)=>{
        setUser(data[index]);
        setEditNumber(index)
    }
  return (   <> <div>
        <h1>User Data</h1>
        <input type="date" value={user.date ||""} name='myDate' onChange={changeHand} />
        {timestamp}
        <input type="textbox" name='username' value={user.username||''} onChange={changeHandler}/><br/>
        <input type="number" name='age' value={user.age||''} onChange={changeHandler}/><br/>
        <input type="textbox" name='address' value={user.address||''} onChange={changeHandler}/><br/>
        <button onClick={submitData}>Go</button>
    </div>
    <table border={1} width={'20%'} center>
        <tr><th>Id</th><th>Name</th><th>Age</th><th>Address</th><th>Action</th></tr>   
        {   data.map((tata,index)=>(<tr><td>{index+1}</td><td>{tata.username}</td><td>{tata.age}</td><td>{tata.address}</td>
                <td style={{display:'flex'}}><button onClick={()=>delMe(index)}>Del</button>&nbsp;<button onClick={()=>editMe(index)}>Edit</button></td></tr>
            ))
        }
     </table>
    {<p>{JSON.stringify(data)}</p>}</>
  )
};

export default Draw;
