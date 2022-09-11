import React from 'react'

export default function Todo({taskObj, index, deleteTask}) {

  const handleDelete = () => {
    deleteTask(index)
  }

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    const result = `${month}/${day}/${year}`;

    return result;
  }

  const dateCheck = (date) => {
    if (date) {
      return <p className="task-duedate">deadline: {formatDate(taskObj.DueDate)}</p>;
   }
  }

  const statusCheck = (status) => {
    if (status === "not-started") {
      return <div className="task-status-red"></div>
    } else if  (status === "in-progress") {
      return <div className="task-status-yellow"></div>
    } else if (status === "done") {
       return <div className="task-status-green"></div>
    } else {
      return <div className="task-status-default"></div>
    }
  }

  return (
    <>
    <div className="task-wrapper">
        <div className="task-holder">
        {statusCheck(taskObj.Status)}
        <div className="task-details">
          <p className="task-name">{taskObj.Name}</p>
          {dateCheck(taskObj.DueDate)}
        </div>
        <div className="trash"><i className="fas fa-thin fa-xmark" aria-hidden="true" onClick={handleDelete}></i></div>
        </div>
    </div>
  </>
  )
}