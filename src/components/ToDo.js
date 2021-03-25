import React, { Component } from 'react';

import ToDoItem from './ToDoItem';
import ToDoHeader from './ToDoHeader';

class ToDo extends Component {
  state = {
    newTask: '',
    tasks: []
  };

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.setState({ tasks: JSON.parse(tasks) })
    }
  }

  componentDidUpdate(_, prevState) {
    if(prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ''
    })
  }

  handleInputChange = e => {
    let task = e.target.value;
    this.setState({ newTask: task })
  }

  handleDelete = (task) => {
    this.setState({ tasks: this.state.tasks.filter(tk => tk !== task)})
  }
  
  render() {
    return(
      <>
      <ToDoHeader />
      <form onSubmit={this.handleSubmit} className="form">
        <ul>
          <h3>Tasks ( {this.state.tasks.length} )</h3>
          {this.state.tasks.map(task => <ToDoItem key={task} task={task} onDelete={() => this.handleDelete(task)} />)}
        </ul>
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTask}
          id="input"
        />
        <button type="submit" id="submit">+</button>
      </form>
      </>
    )
  }
}

export default ToDo;