import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const handleInc = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());

  return (
    <div className="App">
      <div>Counter: {count}</div>
      <button onClick={handleInc}>+1</button>
      <button onClick={handleDec}>-1</button>
    </div>
  );
}

export default App;
