export default function AlbumCard({thisAlbum}) {
    return(( 
        <div className="album" key={ thisAlbum.albumId}>
            <h3>{thisAlbum.albums || thisAlbum.album}</h3>
            <p>{thisAlbum.years}, {thisAlbum.artists || thisAlbum.artist}</p>
        </div>
    ))
}