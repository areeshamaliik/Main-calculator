import React, {useState} from 'react';
import './App.css'
function App() 
{
  const [Operation,setOperation]=useState("");
  
  const clear=(e)=>{
    e.preventDefault();
    setOperation(" ");
  }

  const Delete=()=>{
    if(Operation === ''){
        return
    }
    const value=Operation.slice(0,-1)
    setOperation(value)
}
  const handleClick=(e)=>
  {
    e.preventDefault();
    setOperation(Operation.concat(e.target.name))
  }

  //const point=(e)=>
  // {
  //   const value = e.target.innerHTML;
  //   e.preventDefault();
  //   setOperation({
  //     ...Operation,
    
  //   })

  //   // if(Operation==='.' && setOperation==='.'){
  //   // return
  //   // }
  //   // const value=Operation.slice()
  //   // setOperation(value)
    
  // }
  const result=()=>
  {

    setOperation(eval(Operation).toString())
  }
  

  return (
    <div className='container'>

    <form>

    <div>
      <input 
      type="text" 
      value={Operation}
      placeholder="0"
      />
    </div>
    </form>

    <div className='keyboard'>
    <button className="highlight" name="Clear" onClick={clear}>AC</button>
    <button className="highlight" name="Del" onClick={Delete}>Del</button>
    <button className="highlight" name="/" onClick={handleClick} >/</button>
    <button className="highlight" name="%" onClick={handleClick}>%</button>
    <button name="7" onClick={handleClick}>7</button>
    <button name="8" onClick={handleClick}>8</button>
    <button name="9" onClick={handleClick}>9</button>
    <button className="highlight" name="*" onClick={handleClick}>*</button>
    <button name="4" onClick={handleClick}>4</button>
    <button name="5" onClick={handleClick}>5</button>
    <button name="6" onClick={handleClick}>6</button>
    <button className="highlight" name="-" onClick={handleClick}>-</button>
    <button name="1" onClick={handleClick}>1</button>
    <button name="2" onClick={handleClick}>2</button>
    <button name="3" onClick={handleClick}>3</button>
    <button className="highlight" name="+" onClick={handleClick}>+</button>
    <button className="highlight" name="00" onClick={handleClick}>00</button>
    <button name="0" onClick={handleClick}>0</button>
    <button name="." onClick={handleClick}>.</button>
    <button className="highlight" id="result" name="=" onClick={result}>=</button>
    </div>

    </div>
  );
}

export default App;
