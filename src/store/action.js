import * as actionTypes from './actionTypes';

export const listenAlbum = albumData => {
    return {
        type : actionTypes.LISTEN_ALBUM,
        albumData : albumData
    }
}

export const listenSong = songData => {
    return {
        type : actionTypes.LISTEN_SONG,
        songData : songData
    }
}