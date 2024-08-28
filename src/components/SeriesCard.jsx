export const SeriesCard =(props)=>{

    return(
        <li key={props.curElem.id}>
            <div>
                {/* <img
                src={props.curElem.img_url}
                alt={props.curElem.name} 
                height="40%"
                width="40%"
                /> */}
            </div>
            <h2>Name: {props.curElem.name}</h2>
            <h3>Rating:{props.curElem.rating}</h3>
            <p>Summary:{props.curElem.description}</p>
            <p>Genre:{props.curElem.genre}</p>
            <p>Cast:{props.curElem.watch_url}</p>
        </li>
        
    )

}
