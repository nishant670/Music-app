import * as actionTypes from './actionTypes';
import musicData from '../data';

const initialState = {
        musicData : musicData,
        currentAlbum : null,
        currentSong : null,
        currentURL : null,
        duration : null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
            case actionTypes.LISTEN_ALBUM :
                return {
                    ...state,
                    currentAlbum : action.albumData.albumName,
                    currentSong : action.albumData.playList[0].songName,
                    currentURL : action.albumData.playList[0].songURL,
                    duration : action.albumData.playList[0].duration
                }
                case actionTypes.LISTEN_SONG :
                return {
                    ...state,
                    currentSong : action.songData.songName,
                    currentURL : action.songData.songURL
                }
                default :
                 return state
    }
}

export default reducer;