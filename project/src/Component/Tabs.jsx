import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../Redux/features/SearchSlice";

export const Tabs = () => {
    const dispatch = useDispatch()

    const tabs = ["photos", "videos"];

    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className="flex items-center gap-7 mt-7 px-4 font-semibold">
            {tabs.map((elem, id) => {
                return < button
                    key={id}
                    className={`${activeTab === elem ? "bg-blue-600": "bg-white"} px-3 py-2 rounded active:scale-95`}
                    onClick={()=> dispatch(setActiveTab(elem))}>
                    {elem}
                </button>
            })}
        </div>
    )
}