import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    // Инициализируем состояние completed из свойства className
    this.state = {
      completed: this.props.className === 'completed',
    };
  }

  // Обработчик события клика на задачу
  handleClick = () => {
    // Обновляем состояние completed, инвертируя его значение
    this.setState((prevState) => ({
      completed: !prevState.completed,
    }));
  };

  // Обработчик события клика на кнопку удаления задачи
  handleDelete = () => {
    // Получаем функцию удаления из свойств props
    const { onDelete, id } = this.props;
    // Вызываем функцию удаления, передавая id задачи
    onDelete(id);
  };

  render() {
    // Получаем свойства из props
    const { text } = this.props;
    // Получаем состояние completed из состояния компонента
    const { completed } = this.state;

    // Определяем класс задачи в зависимости от состояния completed
    const taskClassName = completed ? 'completed' : '';

    return (
      <li className={taskClassName}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            readOnly
            onClick={this.handleClick}
          />
          <label>
            <span className="description">{text}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          {/* Обработчик события клика на кнопку удаления */}
          <button
            className="icon icon-destroy"
            onClick={this.handleDelete}
          ></button>
        </div>
      </li>
    );
  }
}

export default Task;
