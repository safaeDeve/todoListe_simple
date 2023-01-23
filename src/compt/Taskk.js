import React from 'react'

export default function Taskk({txt,delf,donef,done}) {
  return (
    <div id="d">
    <div class="input-group">
      <input type="text" id='inpt2' className='cn'  value={txt} placeholder="Recipient's username" style={done ? {textDecoration:'line-through'}: {textDecoration:'none'}} />
        <button  type="button" onClick={delf} className="btn">DELETE</button>
        <button  type="button"  onClick={donef} className="btn" >DONE</button>
     
    </div>

    </div>
    
  )
}

