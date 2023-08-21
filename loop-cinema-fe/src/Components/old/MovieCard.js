import "./MovieCard.css"

function MovieCard({image, title, rated, runtime}) {
    return(
        <div className="card_body">
            <div className="card_view">
                <img className="card_image" src={image}/>
            </div>
            <div className="card_detail_container">
                <div className="card_title">{title}</div>
                {/**Try to get Rating Stars in here. */}
                <div className="card_detail">
                    <div className="card_rated">{rated}</div>
                    <div className="card_runtime">{runtime}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard