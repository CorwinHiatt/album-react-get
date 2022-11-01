import { useState, useEffect } from "react";

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-cjh.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)

    }, []) //run once when you first load....
    return (
        <main className="album-list">
            {!albums
                ? <p>Loading....</p>
                : albums.map(albums => ( 
                    <div className="album" key={ albums.albumId}>
                        <h3>{albums.albums}</h3>
                        <p>{albums.years}, {albums.artists}</p>
                    </div>
                ))
            }
        </main>

    )
}