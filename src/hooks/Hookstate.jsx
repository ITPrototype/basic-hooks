import React, { useEffect, useState } from 'react'
export default function Hookstate() {
  const [num, setNum] = useState(3)
  const [inputword, setInputWord] = useState('')
  const [mes, setMes] = useState('')
  const handleClick = e => {
    e.preventDefault();
    setMes(inputword)
  }
  const checkWord = () =>{
    if(inputword === ''){
      setMes('empty')
    }
  }
  useEffect(()=>{
    checkWord()
  },[mes])
  return (
    <>
      <div>
        <span>Num:{num}</span>
        <div>
          <button className='btn' onClick={() => setNum(num + 1)}>Increase</button>
          <button className='btn red' onClick={() => setNum(num - 1)}>Decrease</button>
        </div>
      </div>
      <hr />
      <span style={{color:'gray',marginBottom:'30px',display:'block'}}>Get word from input</span><br />
      <div>
        <span>Word:{mes}</span>
      </div>
        <input type="text" style={{width:'250px'}} value={inputword} placeholder="Enter smth" onChange={e => { setInputWord(e.target.value) }} />
        <button className='btn blue darken-1' onClick={handleClick}>Submit</button>
    </>
  )
}
