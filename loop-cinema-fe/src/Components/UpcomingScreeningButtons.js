import { useStatusThemeUpdate } from "./StatusThemeProvider";

function UpcomingScreeningButtons(){
    const statusUpdater = useStatusThemeUpdate();

    function statusFalse(){
        statusUpdater(false)
    }

    function statusTrue(){
        statusUpdater(true)
    }
    
    return(
        <div className="show_button">
                <button  className="nowScreeing_button" onClick={statusFalse}>Now Streaming</button>
                <button  className="upcoming_button" onClick={statusTrue} >Coming Soon</button>
        </div>
    );
}

export default UpcomingScreeningButtons;