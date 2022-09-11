import React,  { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        
        if (name === "task-name"){
            setTaskName(value)
        } else if (name === "due-date"){
            setDueDate(value)
        } else {
            setStatus(value)
        }
    }
  
    const handleSave = () => {

        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["DueDate"] = dueDate
        taskObj["Status"] = status
        save(taskObj)
      }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>New Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task name</label>
                        <input type="text" id="task-name" name="task-name" className="form-control" placeholder="Add a new task" value={taskName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Due Date</label>
                        <input type="date" id="due-date" name="due-date" className="form-control" value={dueDate}  onChange={handleChange} />
                    </div>
                    <div className="form-group">
                    <label>Status</label>
                        <select id="status" name="status" className="form-control" value={status}  onChange={handleChange} >
                            <option value="not-started">Not Started</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option> 
                        </select>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button className="btn-create" color="primary" onClick={handleSave}>
                Create
            </Button>{' '}
            <Button className="btn-cancel" color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
    </Modal>
    )
}

export default CreateTask;