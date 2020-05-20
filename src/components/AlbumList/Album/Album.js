import React from 'react';
import Button from '../../Buttons/Button';
import './Album.css'

const Album = props => {
    return (
        <div className="albumWrapper">
            <div className="albumNameWrapper">
                <p className="albumName">{props.albumName}</p>
                <p className="equalToDivider">=</p>
                <p className="albumReleaseYear"><strong>{props.albumReleaseYear}</strong></p>
            </div>
            <div className="albumActionsWrapper">
                <Button>Buy</Button>
                <Button listenData={props.listenData}>Listen</Button>
                {/* removed property from above line -> clicked={props.clicked} */}
            </div>
        </div>
    )
}

export default Album
