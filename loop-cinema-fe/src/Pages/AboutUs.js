
import { getLocationList, initLocationList } from "../data/locationRepo"
import "../css/pages/AboutUs.css"

export const AboutUs = ()=>{
    return(
        <main className="aboutUs_container">
            <section>
                <hgroup>
                    <h1>About Us</h1>
                    <h2>Your Ultimate Movie Experience</h2>
                </hgroup>
                <p>Welcome to Loop Cinemas, where cinematic magic comes to life! Just like Hoyts, we pride ourselves on delivering unforgettable movie moments that stay with you long after the credits roll. At Loop Cinemas, we're not just a movie theater – we're an experience, a destination for film lovers, families, and friends to come together and celebrate the art of storytelling.</p>
                <p>Loop Cinemas is dedicated to providing you with the highest quality movie-watching experience. From the latest blockbusters to timeless classics, we curate a sectionerse selection of films that cater to every taste. Our state-of-the-art theaters boast cutting-edge audiovisual technology, ensuring that you're immersed in the sights and sounds of the big screen.</p>

            </section>

            <section>
                <hgroup>
                    <h1>Events at Loop Cinemas</h1>
                    <h2>Where Entertainment Takes Center Stage</h2>
                </hgroup>
                <p>At Loop Cinemas, our commitment to delivering exceptional entertainment goes beyond the silver screen. We take great pride in hosting a variety of engaging events that bring communities together and celebrate the arts. From captivating community events to inspiring art shows, our locations become vibrant hubs of creativity, interaction, and enjoyment.</p>
            </section>

            <section>
                <hgroup>
                    <h1>Locations Across Australia</h1>
                    <h2>Where movie meets magic</h2>
                </hgroup>
                <p>With locations spanning across Australia, Loop Cinemas brings the magic of cinema closer to you. Explore our imaginary, yet captivating, locations that capture the essence of iconic Australian cities.</p>
                <div className="locations">
                    {   getLocationList().map((location_obj)=>{
                        return(
                            <div className="location_card">
                                <img src={location_obj.image}/>
                                <h3>{location_obj.name}</h3>
                            </div>
                        )
                        })
                    }
                </div>
            </section>
        </main>
    )
}