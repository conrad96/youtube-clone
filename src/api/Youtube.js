import axios from "axios"


const KEY = 'AIzaSyC1dI_o331FRNc5zn_wMnofUPZTTKXLzBA'
const URL = 'https://www.googleapis.com/youtube/v3'

//preconfigured instance of axios
export default axios.create({
    baseURL: URL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
