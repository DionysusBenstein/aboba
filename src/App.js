import { useDispatch, useSelector } from "react-redux";
import { getTotdos } from "./redux/actions";
import { useEffect } from "react";
import Counter1 from "./Counter1";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state);

  useEffect(() => {
    dispatch(getTotdos);
  });

  return (
    <div className="App">
      <ul className="list">
        {todos.map(todo => <li key={todo.id}>{todo.id}</li>)}
      </ul>
      <Counter1/>
    </div>
  );
}

export default App;
