import React, { useState, useEffect } from 'react'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import './ArtistPage.css'

function ArtistPage(){
    const name = "Adhitya Sofyan"
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        fetch(`http://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
        .then(res => res.json())
        .then(data => {
            setAlbums(data.data.albums);
        })
    },[])

    //console.log(albums)

    return(
        <div className="album-container">
            {albums?.map(album => {
                // return <div key={album.id}>
                //     <img src={album.image} alt="" />
                //     <div>
                //         {album.name}
                //     </div>
                // </div>

                return <AlbumCard key={album.id} album={album} artist={name}/>
            })}
        </div>
    );
}

export default ArtistPage