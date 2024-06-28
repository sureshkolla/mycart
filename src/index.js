// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Container from './Container';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Container />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React,{useEffect,useState} from 'react';
import ReactDOM  from 'react-dom';
import Draw from './Draw'
const Myapp=()=>{
const [data,setData]=useState([]);
const [user,setUser]=useState({});
useEffect(()=>{
    console.log(1)
},[])
  const changeHandler=(event)=>{
    let filedName =event.target.name;
    setUser({...user,[filedName]:event.target.value});
  }
const submitData=()=>{ 
  setData([...data, user]);
  console.log(data);
}
const deleteItem=(item)=>{ 
  const listWithDeleted =data.filter((element,index)=>(index !==item));
  setData(listWithDeleted);
}
  return(
    <>
    <Draw/>
    <input type='textbox' name='username' value={user.username || ''} onChange={changeHandler}/>
    <input type='number' name='age' value={user.age || ''} onChange={changeHandler}/>
    <textarea type='address' name='address' value={user.address || ''} onChange={changeHandler}/>
    <button onClick={submitData}>Add</button>
    <table border='1' cellPadding={0} cellSpacing={0} width='50%'>
       <tr><th>Index</th><th>User</th><th>Action</th></tr> 
       {
        data.map((tata,index)=>(
          <tr key={index}><td>{index}</td><td>{JSON.stringify(tata)}</td><td>
            <button onClick={()=>deleteItem(index)}>Del</button></td>
          </tr>
        ))
       } 
       {
        data.map((g)=>(
          <span>{JSON.stringify(g)}</span>
        ))
       }
    </table>
    </>
  );
};

ReactDOM.render(<Myapp/>,document.getElementById('root'));


 