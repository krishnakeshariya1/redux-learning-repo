import { fetchPhotos, fetchVideo } from "./API/mediaApi"
const App = () => {

  return (
    <div className="h-screen w-full  bg-black">
      <button onClick={async () => {
        const data = await fetchPhotos('cat')

        console.log(data)
      }} className="bg-green-500 px-4 py-2 rounded mr-5">Get Photos</button>

      <button onClick={async () => {
        const data = await fetchVideo('cat')

        console.log(data)
      }} className="bg-green-500 px-4 py-2 rounded ">Get Video</button>

    </div>
  )
}
export default App 