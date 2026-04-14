import { fetchPhotos, fetchVideo } from '../API/mediaApi'
import { setQuery, setError, setLoading, setResults } from '../Redux/features/SearchSlice';
import { useDispatch, useSelector } from "react-redux"

export const ResultGrid = () => {

    const { query, activeTab, result, loading, err } = useSelector((store) => store.search)

    async function getData() {
        let data = null;
        if (activeTab === "photos") {
            data = await fetchPhotos(query)
        }
        if (activeTab === "videos") {
            data = await fetchVideo(query)
        }
        console.log(data)
    }
    return (
        <div>
            <button className='text-white'
                onClick={() => getData()}>get data </button>
        </div>
    )
}