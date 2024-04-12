// фильтры в футере
import React, { Component } from 'react';
import './TasksFilter.css';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    // Инициализируем состояние tasks пустым массивом или переданным массивом tasks
    this.state = {
      tasks: props.tasks || [],
    };
  }
  // Функция удаления задачи
  deleteTask = (id) => {
    // Обновляем состояние, удаляя задачу с заданным id
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { tasks } = this.state;

    // Создаем компоненты задач из переданного массива задач
    const taskComponents = tasks.map((task) => (
      <task
        key={task.id}
        id={task.id}
        text={task.text}
        className={task.className}
        onDelete={this.deleteTask}
      />
    ));

    // Возвращаем список задач
    return <ul className="todo-list">{taskComponents}</ul>;
  }
}
