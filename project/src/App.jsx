 import { fetchphots } from "./API/mediaApi";
 const App = () =>{

  return(
    <div className="h-screen w-full  bg-black">
      <button onClick={()=>fetchphots("cat") } className="bg-green-300">Get request</button>

    </div>
  )
}
export default App 