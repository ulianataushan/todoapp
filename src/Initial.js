import React, { useState, useEffect } from 'react';

import Todo from './Todo';
import CreateTask from './CreateTask';

function Initial() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    let obj = JSON.parse(arr)

    if (arr){
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)
    window.location.reload()
    }

  return (
    <>
      <div className="header">
        <h3>To-do list</h3>
        <button className = "btn btn-primary" onClick = {() => setModal(true)}>
          New task
        </button>
      </div>
      <div className = "task-container">
        {taskList && taskList.map((obj, index) => <Todo taskObj={obj} index={index} deleteTask={deleteTask} />)}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  )
}

export default Initial;