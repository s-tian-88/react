import './App.css'
import CalcCC from './CalcCC/CalcCC'
// import { CalcCC } from './CalcCC/CalcCC'
import { CalcFC } from './CalcFC/CalcFC'
import { State } from './State/State'


function App() {

  return (
    <div className="App">
        <div>
            <h1>Class base component</h1>
            <CalcCC />
        </div>
        <hr />
        <div>
            <h1>Function component</h1>
            <CalcFC />
        </div>
        <hr />
        <State />
    </div>
  )
}

export default App
