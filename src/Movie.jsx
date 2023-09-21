// import './movie.css'
export default function Movie(props){
    return(
        <>  
            <div className="cont">
                <img className="img" src={props.img}></img>
                <div className="desc">
                    <h1 className='movie-name'>{props.name}</h1>
                    <h3 className="movie-dir">{props.director}</h3>
                    <h4 className="texts">{props.genre} • {props.year}</h4>
                    
                    <div className="texts">
                        <div className="three">
                            <p>{props.rating}  </p>
                            <p> ({props.myrating})</p>
                        </div>
                    </div>
                    
                    <p className="descrip">{props.description}</p>
                    <button><a href={props.link}>Read more</a></button>
                </div>
            </div>
        </>
    )
}