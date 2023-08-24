import './Todo.scss'
import React from 'react';
function App() {
  const[Todoarr ,setTodoarr] = React.useState([])
  const [list, setlist]=React.useState()
  const change =(e)=>{
    setlist(e.target.value)
  }
  const add =()=>{
    if(list===""){
      return;

    }   
    if(Todoarr.length>10){
      alert("You Cant able to add more Todo's For Now")
    }
    else{
      let valueof = {text:list,key:Date.now()}
      setTodoarr([...Todoarr,valueof])
      setlist("")
    }  
  }
  const clickDEl=(itemdel)=>{
    const pro = Todoarr.filter((item)=>{
     return( item.key !== itemdel.key
     ) })
  setTodoarr(pro)
  }
  // const clickDEl = (itemToDelete) => {
  //   const updatedTodoArr = Todoarr.filter((item) => {
  //     return item.key !== itemToDelete.key;
  //   });
  
  //   setTodoarr(updatedTodoArr);
  // };
  // console.log(Todoarr)
  return (
    <section className="main">

    <div className="Todo">
      <input type="text" value={list} onChange={change} placeholder='Write Todo' />
    <button className='first' onClick={add}>+</button>
    <ul>
      {
        Todoarr.map((item)=>{
          return(
            <div style={{display:"flex",justifyContent:"space-between",padding:"0rem 1rem"}}>
               <li key={item.key} >{item.text}</li>
               <button onClick={()=>clickDEl(item)} className="cancel-button">
    <span className="cancel-icon">X</span>
  </button>
            </div>
         
          )
        })
      }
    </ul>
    </div>

    </section>


  );
}

export default App;
