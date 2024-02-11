import './App.scss'
import { useState, useEffect} from 'react'
import TodoItem from './compontents/TodoItem'

function App() {

  const [todoList, setTodoList] = useState([]);
  
  useEffect( () => {
    fetch("https://dummyjson.com/todos")
			.then((res) => res.json())
			.then((data) => setTodoList(data.todos));
  }, [])
  
  return (
		<div className="App">
			{todoList.map((data) => (
				<TodoItem todoItemData={data} key={data.id}/>
			))}
		</div>
	);
}

export default App
