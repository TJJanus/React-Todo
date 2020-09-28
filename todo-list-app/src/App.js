import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

 


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ], 
      todo: ''

    };
  }


  addTodo = e => {
    e.preventDefault()
    const newTodo = {
      task: this.state.todo, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = e => this.setState({
    [e.target.name]: e.target.value
  });
  
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
  
  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
  return (
    <div className="App">
      <h1>Todo List: MVP</h1>
      <TodoList todos={this.state.todos} handleToggleComplete={this.toggleTodoComplete}/>
      <TodoForm value={this.state.todo} handleTodoChange={this.changeTodo} handleAddTodo={this.addTodo} handleClearTodos={this.clearCompletedTodos}/>
      
    </div>
  );
  }
}

export default App;
