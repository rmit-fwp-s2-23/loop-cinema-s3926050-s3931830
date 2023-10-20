import React, { useEffect, useState } from 'react'
import { getLocationList } from '../data/locationRepo';
import moment from 'moment';
import "../css/components/SessionList.css"
import SessionModal from './SessionModal';

function compareDatetime(a, b) {
    // Convert the datetime strings or objects to Date objects
    const dateA = new Date(a);
    const dateB = new Date(b);
  
    // Compare the Date objects
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  }

  const openSessionModal = (e)=>{
    document.body.style.overflow = "hidden"
    const classSessionID = e.target.getAttribute('data-sessionid');
    const element = document.querySelector(`.${classSessionID}`);
    element.setAttribute("open", true);
    e.stopPropagation();
  }

  const closeSessionModal = (e)=>{
    document.body.style.overflow = "auto"
    console.log(e.target);
    const classSessionID = e.target.getAttribute('data-sessionid');
    console.log(classSessionID);
    const element = document.querySelector(`.${classSessionID}`);
    element.removeAttribute("open");
    e.stopPropagation();
    window.location.reload(); 
  }


const SessionBasedOnLocation = (props) =>{
    const movieSessions = props.location.sessions.filter((session)=> (session.movieID === props.movieID) && (session.sessionNumberOfSeat != 0));
    return (
        <div className="sessions-location">

        {movieSessions.length !== 0 ? (
            movieSessions.sort(compareDatetime).map((session)=>(
                <>  
                    <SessionModal key={session.sessinoID} sessionID={session.sessionID} closeSessionModal={closeSessionModal} setResetSession={props.setResetSession} isLoggedIn={props.isLoggedIn}/>
                    <button className="open-session-modal" data-sessionid={session.sessionID} onClick={openSessionModal}>{moment(session.sessionTime).format('hh:mm DD/MM')}</button>
                </>
            ))
        ):(
            <h4 style={{paddingTop: "0.5vh"}}>No sessions for this location</h4>
        )}
        </div>
    )
}


//props: {isLoggedIn, movieObj}
const SessionList = (props) => {

    //get Locations
    const [locations, setLocations] = useState(null);
    const [resetSession, setResetSession] = useState(false);

    useEffect(()=>{
        const getLocations = async () =>{
            const response = await getLocationList();
            setLocations(response);
        }
        getLocations();
    },[resetSession]);


    return (
        <article>
            <hgroup>
                <h1>Available Sessions</h1>
                {locations ? (
                    locations.map((location)=>(
                        <>  
                            <h3>{location.locationName}</h3>
                            <SessionBasedOnLocation movieID={props.movieObj.movieID} location={location} isLoggedIn={props.isLoggedIn} setResetSession={setResetSession}/>
                        </>
                    )
                )):(
                    <>
                        <div>Loading Sessions...</div>
                    </>
                )}
            </hgroup>
        </article>

  )
}

export default SessionList