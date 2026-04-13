import { fetchPhotos, fetchVideo } from "./API/mediaApi"
import { SearchBar } from "./Component/SearchBar"
import { Tabs } from "./Component/Tabs"
const App = () => {

  return (
    <div className="bg-black h-screen w-full">
      < SearchBar />
      < Tabs />
    </div>
  )
}
export default App 