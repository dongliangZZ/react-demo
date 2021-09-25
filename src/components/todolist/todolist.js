import React, { useState } from "react";

//import style
import "./todo.css"

//import data
import data from './data.json'

export default function Todolist() {
  //mockup data
  const [listItem, setListItem] = useState(data)

  //function
  const addTask = (userInput) => {
    let newTask = [
      ...listItem,
      {
        id: listItem.length + 1,
        task: userInput,
        complete: false
      }
    ]
    setListItem(newTask)
  }

  //event functions
  const handleToggle = id => {
    let toggled = listItem.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete } : {...task}
    })
    setListItem(toggled)
  }

  const handleFilter = () => {
    let filtered = listItem.filter(task => {
      return !task.complete
    })
    setListItem(filtered)
  }
  
  //components
  const Header = () => {
    return (
      <div>
        <h1>To Do List</h1>
      </div>
    )
  }

  const TodoList = ({listItem, handleToggle, handleFilter}) => {
    return (
      <div>
        {
          listItem.map(item => {
            return <TodoItem todoItem={item} handleToggle={handleToggle} />
          })
        }
        <button style={{margin: '20px'}} onClick={handleFilter}>Clear</button>
      </div>
    )
  }

  const TodoItem = ({todoItem, handleToggle}) => {
    const handleClick = e => {
      e.preventDefault()
      handleToggle(e.currentTarget.id)
    }

    return (
      <div id={todoItem.id} onClick={handleClick} name="todoItem" value={todoItem.id} className={todoItem.complete ? "stricke" : ""}>
        {todoItem.task}
      </div>
    )
  }

  const TodoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput("")
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button>Submit</button>
      </form>
    )
  }

  //DOM
  return (
    <div>
      <Header />
      <TodoList listItem={listItem} handleToggle={handleToggle} handleFilter={handleFilter} />
      <TodoForm addTask={addTask} />
    </div>
  )
}