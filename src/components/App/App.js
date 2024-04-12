import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Check mail', className: 'completed' },
        { id: 2, text: 'Drink coffee', className: 'editing' },
        { id: 3, text: 'Refuel the car' },
      ],
    };
  }

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={tasks} deleteTask={this.deleteTask} />
          <Footer />
        </section>
      </section>
    );
  }
}

// Получаем существующий корень
const root = createRoot(document.getElementById('root'));

// Рендерим компонент App в существующий корень
root.render(<App />);

export default App;
