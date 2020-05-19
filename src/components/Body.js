import React from 'react';
import AudioPlayer from '../containers/AudioPlayer/AudioPlayer';
import AlbumList from './AlbumList/AlbumList';
import Playlist from './PlayList/Playlist';

import cd from '../assets/images/cd.png';

const Body = props => {
    return (
        <div className="bodyWrapper">
            <div className="leftWrapper">
                    <div className="leftImageWrapper">
                        <img src={cd} alt="cd" className="leftImage" />
                    </div>
                    <h2>DiscoGraphy</h2>
                    <AlbumList
                        musicData={props.musicData}
                        clicked={props.clicked}/>
            </div>
            <div className="rightWrapper">
                <h2>Now Playing</h2>
                    <p>{props.currentSong}</p>
                <AudioPlayer
                    url={props.url}
                     />
                     {/* {console.log(props.url)} */}
                     <h4>{props.currentAlbumName}</h4>
                <Playlist
                    musicData={props.musicData}
                    currentAlbumName={props.currentAlbumName}
                    duration={props.duration}
                    clicked={props.songClicked} />
            </div>
        </div>
    )
}
export default Body;
