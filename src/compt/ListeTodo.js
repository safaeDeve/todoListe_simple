import React from 'react'
import { useState } from 'react'
import Taskk from './Taskk'
import { v4 as uuidv4 } from 'uuid';

export default function ListeDo() {
  const[tasks,settasks]=useState([
    {id:uuidv4(),nom:'sport',done:false},
    {id:uuidv4(),nom:'film',done:false},
    {id:uuidv4(),nom:'coding',done:false}
  ])
  const [task,setTask]=useState('');
  const addTask=()=>{
    let ntasks=[...tasks];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    settasks(ntasks);
    setTask('');
    
  }
  const deleteTask=(idp)=>{
    let ntasks=tasks.filter((t)=>{return t.id!=idp})
    settasks(ntasks);
  }
  const donef=(id)=>{
    settasks(tasks.map(task=>task.id===id ? {id:task.id,nom:task.nom,done:true}:task))
  }
  

  return (
    <div className=' container'>
      <h1 id="titre">To-Do Liste</h1>
        <form>
          <div className='d-flex justify-content-center align-items-center'>
            <input type="text" value={task} placeholder="Entrer tache" id="inpt"
                   onChange={(e)=>{setTask(e.target.value)}}/>    
                    <input id="btn" type="button" onClick={addTask}  value="Ajouter" />
          </div>
        </form>
        <br></br>
        <ul className="lis">
          {
            tasks.map((t)=>{
              return <li key={t.id} ><Taskk donef={()=>donef(t.id)} done={t.done}  delf={()=>deleteTask(t.id)}   txt={t.nom}/></li>
            })
          }
        </ul>
    </div>
  )
}
