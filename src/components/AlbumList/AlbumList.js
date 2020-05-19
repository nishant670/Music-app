import React from 'react';
import Album from './Album/Album';
// import musicData from '../../data';

const AlbumList = props => {
    const musicDataa = props.musicData.map(al => {
        return <Album key={al.id} albumName={al.albumName} albumReleaseYear={al.releasedYear} clicked={props.clicked} listenData={al}/>
    })
    return (
        <div>
            {musicDataa}
        </div>
    )
}

export default AlbumList
