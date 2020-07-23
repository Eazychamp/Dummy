import React, {Component} from 'react';
import TodoList from './TodoList'


class Todos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
    }
  

    addTask = (event) => {
      event.preventDefault();
      let taskArray = this.state.tasks;
      let newTaskInput = this.refs.newTask.value;
      taskArray.push(newTaskInput);
  
      this.setState({ tasks: taskArray });
      this.refs.newTask.value = "";
    }
  

    removeTask = (name, i) => {
      let tasks = this.state.tasks.slice();

      tasks.splice(i, 1);

      this.setState({
        tasks : tasks
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.addTask}>
            <input type="text" placeholder="Enter New Task" ref="newTask" />
            <button type="submit">add</button>
          </form>
          <TodoList entries={this.state.tasks} removeTodo={this.removeTask} />
        </div>
      );
    }
  }
  

export default Todos;