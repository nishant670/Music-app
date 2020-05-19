import React, { Component } from 'react';
import Top from '../components/Top';
import Body from '../components/Body';
import musicData from '../data';

import {connect} from 'react-redux';
import * as actions from '../store/action';

export class Main extends Component {

    state = {
        musicData : [],
    }

    componentDidMount(){
        this.setState({
            musicData : musicData
        })
    }


    render() {
        return (
            <div>
                <Top />
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
