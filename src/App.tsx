import './App.css';
import { Counter } from './components/Counter';
import { UsersList } from './components/UsersList';

function App() {

  return (
      <div className="container">
        <h1>Redux Toolkit</h1>
        <hr />
        <div>
            <h1>Counter component</h1>
            <Counter />
        </div>
        <hr />
        <div>
            <h1>UsersList component</h1>   
            <UsersList />
        </div>
      </div>
  )
}

export default App
