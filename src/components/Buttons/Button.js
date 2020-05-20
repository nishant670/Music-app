import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/action';

const Button = props => {
    return (
        <div>
            <button onClick={()=>props.listenAlbumHandler(props.listenData)} style={styles.buttonStyle}>{props.children}</button>
        </div>
    )
}

const styles = {
    buttonStyle : {
        backgroundColor : "#007bff",
        border : "none",
        borderRadius : "3px",
        padding : "8px 15px",
        color : "white",
        margin : "0 5px"
    }
}

// const mapStateToProps = state => {
//     return {
//         albumData : state.currentAlbum,
//         currentSong : state.currentSong,
//         currentURL : state.currentURL,
//         duration : state.duration
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        listenAlbumHandler : (albData) => dispatch(actions.listenAlbum(albData))
    }
}

export default connect(null, mapDispatchToProps)(Button);
