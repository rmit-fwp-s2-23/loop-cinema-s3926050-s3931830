import {useParams} from "react-router-dom"

function Movie(){
    /**This will be a complete section for a single movie with all its details and stuff.*/

    const { id } = useParams(); //This function in react router gets us all the custom parameter we passed via route(we got in the url ':id').

    return(
        <h1>{id}</h1> 
    )
}
export default Movie