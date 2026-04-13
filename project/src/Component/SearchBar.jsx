import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../Redux/features/SearchSlice";

export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");


    function sumbitHandler(e) {
        e.preventDefault();
        dispatch(setQuery(search));
        setSearch("")
    }


    return (
        <div className="bg-gray-800">
            <form className=" py-4 px-8 flex  items-center  gap-8"
                onSubmit={(e) => sumbitHandler(e)}>
                <   input type="text"
                    required
                    className="border-2 border-gray-500 rounded text-white py-1 px-2 w-lg text-xl"
                    placeholder="Search anything"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className="py-2 px-4 bg-green-600 rounded font-bold text-white cursor-pointer active:scale-95">Search</button>
            </form>
        </div>
    )
}