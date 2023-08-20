import { useEffect, useState } from "react";
import movieData from "./movie_data.json";

function Manifest(){
    // Checkout what hook should we use so that the data doesn't get
    // re-written everytime it re-renders, i guess I have used the right
    //one

    // const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log("manifested again")
        localStorage.setItem("movie_data", JSON.stringify(movieData))
    }, [])
    return(<></>)
}

export default Manifest;