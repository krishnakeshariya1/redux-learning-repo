import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decremnet, increaseBy5, increment} from "./redux/features/counterSlice";

const App = () =>{

  const dispatch = useDispatch();
  const count = useSelector((State)=> State.counter.value);

   const [num, setNum] = useState(0)

  return(
    <div>
      <h1> {count} </h1>
      <button
       onClick={()=> dispatch(increment())}>incremnet</button>
      <button
      onClick={()=> dispatch(decremnet())}>decrement</button>
      <input type="number"
       value={num}
       onChange={(e)=> {setNum(e.target.value)}}/>
      <button
      onClick={()=> dispatch(increaseBy5(Number(num)))}>increase by </button>
    </div>
  )
}
export default App