import React from 'react';
import Album from './Album/Album';
// import musicData from '../../data';

const AlbumList = props => {
    const musicDataa = props.musicData.map(al => {
        return <Album key={al.id} albumName={al.albumName} albumReleaseYear={al.releasedYear} listenData={al}/>
    })
        {/* removed property from above line -> clicked={props.clicked} */}
    return (
        <div>
            {musicDataa}
        </div>
    )
}

export default AlbumList
