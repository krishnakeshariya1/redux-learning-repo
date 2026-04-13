import { fetchPhotos, fetchVideo } from "./API/mediaApi"
 const App = () =>{

  return(
    <div className="h-screen w-full  bg-black">
      <button onClick={async ()=> {
        const data = await fetchPhotos('cat')

        console.log(data)
      } } className="bg-green-300">Get request</button>

    </div>
  )
}
export default App 