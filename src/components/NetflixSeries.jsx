import data from "./data.json"
import {SeriesCard} from "./SeriesCard"

export const NetflixSeries =()=>{
    return (
        <ul>
            {data.map((curElem)=> <SeriesCard key={curElem.id} curElem={curElem}/>
)}
        </ul>
    )
}