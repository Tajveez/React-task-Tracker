import React from "react";

const AddTask = () => {
    return <form className="add-form">
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" placeholder='Add Task' />
        </div>
        <div className="form-control">
            <label htmlFor="time">Day & time</label>
            <input type="datetime-local" placeholder='Select Time' />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="task">Set Reminder</label>
            <input type="checkbox" />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
  </form>;
};

export default AddTask;
