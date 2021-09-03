import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: 'Burn it down', duration: '4:05'
        },
        {
            title: 'All stars', duration: '2:30'
        },
        {
            title: 'Numb', duration: '3:15'
        },
        {
            title: 'In the End', duration: '2:50'
        },
        {
            title: 'Testing Song', duration: '3:00'
        }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})