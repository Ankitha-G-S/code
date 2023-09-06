import React from 'react';
import './App.css';
import TodoListClass from './components/TodoListClass';
import TodoListFunction from './components/TodoListFunction';
function App() {
return (
<div className="container">
<div className="row">
<div className="col">
<TodoListClass />
</div>
<div className="col">
<TodoListFunction />
</div>
</div>
</div>
);
}
export default App;
