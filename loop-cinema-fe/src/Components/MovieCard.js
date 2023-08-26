import "../css/components/MovieCard.css"

function MovieCard({image, title, rated, runtime, stars}) {

    function printStars(numStars, symbolName) {
        const starElements = [];
        for (let i = 0; i <= numStars; i++) {
          starElements.push(
            <span key={i} className="material-symbols-outlined">
              {symbolName}
            </span>
          );
        }
        console.log(starElements);
        return starElements;
      }

    return(
        <div className="card_body">
            <div className="card_view">
                <img className="card_image" src={image}/>
            </div>
            <div className="card_detail_container">
                <div className="card_title">{title}</div>
                <div className="card_stars">
                {   
                    printStars(stars, "star")
                }
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star_half</span>
                </div>
                <div className="card_detail">
                    <div className="card_rated">{rated}</div>
                    <div className="card_runtime">{runtime}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard