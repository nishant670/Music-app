import React from 'react';
import './Song.css'

const Song = props => {


    const duration = props.duration;
    const minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration - minutes * 60);
    if(seconds.toString().length < 2){
        seconds = "0" + Math.floor(duration - minutes * 60);
    }
    const songDuration = `${minutes} : ${seconds}`
    return (
        <div onClick={props.clicked} className="songWrapper">
            <div className="songLeftWrapper">
                <button className="playBtn" />
                <p>{props.songName}</p>
            </div>
            <div className="songRightWrapper">
                <p style={{fontSize : "14px"}}>{songDuration}</p>
            </div>
        </div>
    )
}

export default Song;