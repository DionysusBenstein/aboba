import { useSelector } from "react-redux";

function Counter1() {
  const todos = useSelector(state => state.todos);
  return (
    <div className="Counter1">
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.id}</li>)}
      </ul>
    </div>
  );
}

export default Counter1;
