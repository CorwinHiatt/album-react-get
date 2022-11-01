import { useState } from "react"


export default function AddAlbum({setToggle, toggle}) { 
    const [album, setAlbum] = useState('')
    const [years, setYears] = useState('')
    const [artist, setArtist] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!album || !artist || !years ) {
            alert('please enter all items & info')
            return
        }
        const newAlbum = {artist, album, years}
        fetch ('https://albums-api-cjh.web.app/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
        .then(() => {
            //assume it worked 
            setToggle(!toggle)
            setAlbum('')
            setArtist('')
            setYears(1970)
        })
        .catch(alert)
    }
    return(
        <section className="add-album">
            <h3>Add New Album</h3>
            <form onSubmit={handleSubmit}>
               <label html='albums' className="label">Albums:
               <input type="text" name="albums" onChange={ e => setAlbum(e.target.value)}
                value={album}  className="label-in" required/>
               </label>
               <br/>
               <label html='albums'  className="label">Artists:
               <input type="text" name="albums" onChange={ e => setArtist(e.target.value)}
                value={artist}  className="label-in" required/>
               </label>
              
               <br/>
               <label html='years'  className="label">Years:
               <input type="number" name="years" onChange={ e => setYears(e.target.value)}
                value={years}  className="label-in" required/>
               <br/>

               </label>
               <br/>
                <input type="submit" value='add album' />
            </form>
        </section>
    )
}