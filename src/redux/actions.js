export function setTodods(todos) {
  return {
    type: 'SET_TODOS',
    payload: todos,
  };
}

export function getTotdos(dispatch, state) {
  fetch('https://jsonplaceholder.typicode.com/todos').then(todos => {
    todos.json().then(data => {
      dispatch(setTodods(data));
    });
  });
}
