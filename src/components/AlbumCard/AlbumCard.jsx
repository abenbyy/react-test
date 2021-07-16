import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AlbumCard.css'

function AlbumCard(props){
    const [album] = useState(props.album)
    const [artist] = useState(props.artist)
    const link = `/album/${album.id}`
    return (
        <Link to={link}>
            <div className="card album-card">
                <img className="card-img-top" src={album.image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{album.name}</h4>
                    <p className="card-subtitle">{artist}</p>
                </div>
            </div>
        </Link>
    )
}

export default AlbumCard