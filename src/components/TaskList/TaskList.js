import React, { Component } from 'react';
import Task from '../Task/Task';
import './TaskList.css';

export default class TaskList extends Component {
  deleteTask = (id) => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  render() {
    const { tasks } = this.props;
    const taskComponents = tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        className={task.className}
        onDelete={this.deleteTask}
      />
    ));
    return <ul className="todo-list">{taskComponents}</ul>;
  }
}
