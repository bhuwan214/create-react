export const SeriesCard =(props)=>{

    const {id, img_url,name,rating,description,genre,watch_url }=props.curElem
   
    return(
        <li key={id}>
            {}
            <div>
                <img
                src={img_url}
                alt={name} 
                width="200px"
                />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Summary:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{watch_url}</p>
        </li>
        
    )

}
