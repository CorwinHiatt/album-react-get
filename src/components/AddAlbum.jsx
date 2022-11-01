import { useState } from "react"


export default function AddAlbum({setToggle, toggle}) { //switch 
    const [albums, setAlbum] = useState('')
    const [years, setYears] = useState('')
    const [artists, setArtist] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!albums || !artists || !years ) {
            alert('please enter all items & info')
            return
        }
        const newAlbum = {artists, albums, years}
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
               <input type="text" name="albums" required
                onChange={ e => setAlbum(e.target.value)}
                value={albums}  className="label-in" />
               </label>
               <br/>
               <label html='albums'  className="label">Artists:
               <input type="text" name="albums" required
               onChange={ e => setArtist(e.target.value)}
                value={artists}  className="label-in" />
               </label>
              
               <br/>
               <label html='years'  className="label">Years:
               <input type="number" name="years"required
                onChange={ e => setYears(e.target.value)}
                value={years}  className="label-in" />
               <br/>

               </label>
               <br/>
                <input type="submit" value='add album' />
            </form>
        </section>
    )
}