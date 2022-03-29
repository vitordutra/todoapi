import './App.css';

function App() {
  async function getTodos() {
    const data = await fetch('https://api-todo-dh.herokuapp.com/todo');
    const responseJSON = await data.json();
    console.log(responseJSON);
  }

  return (
    <div className='App'>
      <button onClick={getTodos}>Buscar Todos</button>
      <form action=''>
        <input type='text' placeholder='Titulo' />
        <input type='text' placeholder='Descrição' />
        Status <input type='checkbox' />
      </form>
    </div>
  );
}

export default App;
