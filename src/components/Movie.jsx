const Movie =(props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <h3>{props.releaseDate}</h3>
            <h3>{props.overVssiew}</h3>
            <h6>{props.genre}</h6>
            <img src= {props.pic}/>

        </div>
    )

}

export default Movie