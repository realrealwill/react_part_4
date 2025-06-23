import { useState, useReducer } from 'react'
import './App.css'

// 假设state = {count: 0}
// 将所有操作变成确定的可能性放在同一处操作
function counterReducer(state, action) { // state状态 action动作
  switch (action.type) {  //根据动作类型返回状态
    case 'increment':
      return { count: state.count + 1 }  // 返回新的状态
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state  // 没有识别出来type
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  const increment = () => {
    setCount(preCount => preCount + 1)
  }
  const decrement = () => {
    setCount(preCount => preCount - 1)
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <div>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
      </div>
    </>
  )
}

export default App
