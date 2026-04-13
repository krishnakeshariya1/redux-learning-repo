import axios from "axios";
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY 


export async function fetchVideo(query, per_page =20) {
   const res = await axios.get('https://api.pexels.com/videos/search',{
    params : {query, per_page},
    headers : {Authorization : PEXELS_KEY}
   })

   return res.data;
}
export async function fetchPhotos(query, per_page =20) {
   const res = await axios.get('https://api.pexels.com/v1/search',{
    params : {query, per_page},
    headers : {Authorization : PEXELS_KEY},
   })

   return res.data
} 