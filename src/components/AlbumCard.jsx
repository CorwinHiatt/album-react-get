export default function AlbumCard({thisAlbum}) {
    return(( 
        <div className="album" key={ thisAlbum.albumId}>
            <h3>{thisAlbum.albums}</h3>
            <p>{thisAlbum.years}, {thisAlbum.artists}</p>
        </div>
    ))
}