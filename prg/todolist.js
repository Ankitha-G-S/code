TodoListClass.js
import React, { Component } from 'react';
class TodoListClass extends Component {
constructor(props) {
super(props);
this.state = {
todos: [],
newTodo: '',
};
}
handleInputChange = (event) => {
this.setState({ newTodo: event.target.value });
};
handleAddTodo = () => {
if (this.state.newTodo.trim() !== '') {
this.setState((prevState) => ({
todos: [...prevState.todos, this.state.newTodo],
newTodo: '',
}));
}
};
handleDeleteTodo = (index) => {
this.setState((prevState) => ({
todos: prevState.todos.filter((_, i) => i !== index),
}));
};
render() {
const { todos, newTodo } = this.state;
return (
<div>
<h1>Todo List (Class-based)</h1>
<div className="input-group mb-3">
<input
type="text"
className="form-control"
placeholder="Add new todo"
value={newTodo}
onChange={this.handleInputChange}
/>
<div className="input-group-append">
<button className="btn btn-primary" onClick={this.handleAddTodo}>
Add
</button>
</div>
</div>
<ul className="list-group">
{todos.map((todo, index) => (
<li className="list-group-item" key={index}>
{todo}
<button
className="btn btn-sm btn-danger float-right"
onClick={() => this.handleDeleteTodo(index)}
>
Delete
</button>
</li>
))}
</ul>
</div>
);
}
}
export default TodoListClass;

TodoListFunction.js
import React, { useState } from 'react';
const TodoListFunction = () => {
const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');
const handleInputChange = (event) => {
setNewTodo(event.target.value);
};
const handleAddTodo = () => {
if (newTodo.trim() !== '') {
setTodos([...todos, newTodo]);
setNewTodo('');
}
};
const handleDeleteTodo = (index) => {
setTodos(todos.filter((_, i) => i !== index));
};
return (
<div>
<h1>Todo List (Functional)</h1>
<div className="input-group mb-3">
<input
type="text"
className="form-control"
placeholder="Add new todo"
value={newTodo}
onChange={handleInputChange}
/>
<div className="input-group-append">
<button className="btn btn-primary" onClick={handleAddTodo}>
Add
</button>
</div>
</div>
<ul className="list-group">
{todos.map((todo, index) => (
<li className="list-group-item" key={index}>
{todo}
<button
className="btn btn-sm btn-danger float-right"
onClick={() => handleDeleteTodo(index)}
>
Delete
</button>
</li>
))}
</ul>
</div>
);
};
export default TodoListFunction;
