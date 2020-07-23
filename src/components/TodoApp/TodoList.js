import React, {Component} from 'react';
import '../../static/main.css';


class TodoList extends Component {
    constructor(props) {
      super(props);
    }
  
    removeItem(item, i) {
      this.props.removeTodo(item, i);
    }
  
    render() {
      return (
        <div>
          <ul>
            {this.props.entries.map((todo, i) => {
              return (
                <li>
                 <span>{i}.</span> {todo}
                  <button className='ml-4' onClick={() => {this.removeItem(todo, i); }} key={i}> Delete </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  

export default TodoList;