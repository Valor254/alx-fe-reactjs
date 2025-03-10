import logo from './logo.svg';
import './App.css';
import TodoList from "../components/TodoList";
import AddTodoForm from './components/AddToDoForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
