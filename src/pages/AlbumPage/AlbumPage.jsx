import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import './AlbumPage.css'

function AlbumPage(){
    let { id } = useParams()
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setTracks(data.data)
        })    
       
    }, [])

    return(
        <div className="track-container">
            {tracks?.map(track=>{
                return(
                    <div className="card track-card" key={track.id}>
                        <div className="card-body">
                            <h4 className="card-title">{track.name}</h4>
                            <audio src={track.preview_url} controls></audio>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumPage