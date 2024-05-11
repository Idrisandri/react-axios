import { useEffect } from "react";
import { getAllTodos } from "./features/service"
import { useState } from "react";

function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const fetchTodos = async () => {
    const  response = await getAllTodos()
    setTodos(response.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])
  

  return (
    <div className="ml-[120px]">
          {
            todos.map(todo => {
              return (
                <div className="min-h-[50px] bg-slate-300 rounded-md mb-2">
                  {todo?.title}
                  
                </div>
              )
            })
          }
    </div>
  )
}

export default TodoWrapper