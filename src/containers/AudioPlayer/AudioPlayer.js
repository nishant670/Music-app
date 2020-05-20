import React, {Component} from 'react';

class AudioPlayer extends Component{

    audioRef = React.createRef();

    audioManage = () => {
        const audio = this.audioRef.current;
        audio.pause();
        audio.load();
        // audio.play();
    }

    componentDidUpdate(){
        this.audioManage();
    }

    // componentDidMount(){
    //     this.audioManage();
    // }

    render(){
        const sourceUrl = this.props.url;

    return (
        <div>
            
            <audio ref={this.audioRef} controls autoPlay>
                <source src={sourceUrl} type="audio/ogg" />
                <source src={sourceUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
    }
    
}

export default AudioPlayer
