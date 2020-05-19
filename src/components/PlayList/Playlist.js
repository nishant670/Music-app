import React from 'react';
import Song from './Song/Song';

const Playlist = props => {


            const list = props.musicData.map(al => {
                return al.playList.map(pl => {
                    return <Song
                            key={pl.songId}
                            songName={pl.songName}
                            songUrl={pl.SongURL}
                            duration={pl.duration}
                            clicked={()=>props.clicked(pl)}/>
                });
            })
        


        // console.log('list', list);

        let songPlayList = null;
        if(props.currentAlbumName === 'Some Nights'){
            return songPlayList = list.filter(fl => fl.length === 2);
        }
        else if(props.currentAlbumName === 'Love Yourself'){
            return songPlayList = list.filter(fl => fl.length === 3);
        }

    return (
        
        <div>
            {songPlayList}
        </div>
    )
}

export default Playlist
