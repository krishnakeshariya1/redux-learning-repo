import { fetchPhotos, fetchVideo } from "./API/mediaApi"
import { SearchBar } from "./Component/SearchBar"
const App = () => {

  return (
    <div className="bg-black h-screen w-full">
      < SearchBar />
    </div>
  )
}
export default App 