import './index.scss'

const TodoItem = ({ todoItemData }) => {
	const {todo, completed, userId} = todoItemData;

	return (
		<div className="TodoItem">
			<input type="checkbox" checked={completed} onChange={() => {}} />
			<h3>{todo}</h3>
			<p>{userId} </p>
		</div>
	);
};

export default TodoItem