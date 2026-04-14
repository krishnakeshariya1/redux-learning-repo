import { fetchPhotos, fetchVideo } from "./API/mediaApi"
import { ResultGrid } from "./Component/ResultGrid"
import { SearchBar } from "./Component/SearchBar"
import { Tabs } from "./Component/Tabs"
const App = () => {

  return (
    <div className="bg-black h-screen w-full">
      < SearchBar />
      < Tabs />
      < ResultGrid />
    </div>
  )
}
export default App 