import { useState } from "react";
import { Header } from "./components/Header"
import { Todos } from "./components/Todos";


function App() {
        let count = 4
  const [todo,setTodo] = useState([
    {
      id:1,
      title:"Go to work",
      description:"DO I really need to work??"
    },
    {
      id:2,
      title:"Go to work",
      description:"DO I really need to work??"
    },
    {
      id:3,
      title:"Go to work",
      description:"DO I really need to work??"
    },
  ])
  return (
    <>
    <button onClick={()=>{

      setTodo([
        ...todo,
        {id:count,title:"New Todo",description:"Here is a new Todo"}
      ])
    }}>Add a todo</button>
    { todo.map((el)=>{
      return <Todos key={el.id} title={el.title} description={el.description}/>
     })}
{count++}
    </>
  )
}

export default App


function HeaderWithButton(){
  const [name,setName] = useState("React")

  return <>
  <button onClick={()=>{
    setName(Math.random())
  }}>Click me to change the name</button>
  <p>My name is {name}</p>
  </>
}
