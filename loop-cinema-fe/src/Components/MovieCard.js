import "../css/components/MovieCard.css"

function MovieCard({key, image, title, rated, runtime, stars}) {

    function printStars(numStars) {
        const wholeNumberPart = Math.floor(numStars);
        const decimalPart = numStars - wholeNumberPart;

        const starElements = [];
        for (let i = 0; i < wholeNumberPart; i++) {
          starElements.push(
            <span key={i} className="material-symbols-outlined">
              star
            </span>
          );
        }

        if(decimalPart > 0){
            starElements.push(
            <span key={wholeNumberPart} className="material-symbols-outlined">
                star_half
            </span>
            );
        }
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
                    printStars(stars)
                }
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