import React, { Component } from 'react';
import Top from '../components/Top';
import Body from '../components/Body';
import musicData from '../data';

import {connect} from 'react-redux';
import * as actions from '../store/action';

export class Main extends Component {

    state = {
        musicData : [],
        // currentAlbum : '',
        // currentSong : '',
        // currentURL : null,
        // duration : null
    }

    componentDidMount(){
        this.setState({
            musicData : musicData
        })
        console.log('componentdidmount', this.state.musicData)
    }

    // listenClickHandler = (ld) => {
        // const getCurrentSong = musicData.map(first => {
        //     return first.playList.map(song => {
        //         return {
        //             songName : song.songName,
        //             songURL : song.URL
        //         }
        //     })
        // }) 
        // this.setState({
        //     currentAlbum : ld.albumName,
        //         currentSong : ld.playList[0].songName,
        //         currentURL : ld.playList[0].songURL,
        //         duration : ld.playList[0].duration

        // })
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.currentSong !== prevState.currentSong) {
          
    //       if(this.state.currentURL) {
    //         this.player.src = this.state.currentURL;
    //         this.player.play()
    //       }
    //     }
    //   }

    // songClickHandler = (songInfo) => {
    //     this.setState({
    //         currentSong : songInfo.songName,
    //         currentURL : songInfo.songURL
    //     })
    //     this.forceUpdate();
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.currentSong !== this.state.currentSong;
    // }


    render() {
            console.log(this.props.albumData);
        return (
            <div>
                <Top />
                {/* <audio controls ref="audio">
   <source src={this.state.currentURL} />
</audio> */}
                <Body
                    musicData={musicData}
                    clicked={this.props.listenAlbumHandler}
                    currentAlbumName={this.props.albumData}
                    currentSong={this.props.currentSong}
                    url={this.props.currentURL}
                    duration={this.props.duration}
                    songClicked={this.props.listenSongHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        albumData : state.currentAlbum,
        currentSong : state.currentSong,
        currentURL : state.currentURL,
        duration : state.duration
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listenAlbumHandler : (albData) => dispatch(actions.listenAlbum(albData)),
        listenSongHandler : (sngData) => dispatch(actions.listenSong(sngData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
