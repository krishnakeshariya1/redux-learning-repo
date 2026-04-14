import { useEffect } from 'react';
import { fetchPhotos, fetchVideo } from '../API/mediaApi'
import { setQuery, setError, setLoading, setResults } from '../Redux/features/SearchSlice';
import { useDispatch, useSelector } from "react-redux"
import { getAdapter } from 'axios';

export const ResultGrid = () => {

    const { query, activeTab, result, loading, err } = useSelector((store) => store.search)

    useEffect(() => {

        if(query === "") return

        async function getData() {
            let data = null;
            if (activeTab === "photos") {
                let response = await fetchPhotos(query)
                data = response.photos.map((item)=>({
                    id : item.id,
                    type : "photos",
                    title : item.alt,
                    thumbnail : item.src.small,
                    src : item.url ,
                }))
            }
            if (activeTab === "videos") {
                let response = await fetchVideo(query)

                data = response.videos.map((item)=>({
                    id :item.id,
                    type : "videos",
                    title : item.user,
                    thumbnail : item.url.name,
                    src : item.video_files[0].link
                }))
            }
            console.log(data)
        }
        getData()

    }, [query, activeTab])

    return (
        <div>
            
        </div>
    )
}
