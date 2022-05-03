import React from 'react';


const ListenWatchTab = (data) => {

    return (
        <div className="listen-watch">
            <div className="listen-watch-tab">
                {/* This needs to be routing to a prefered or sponsored video broadcast  */}
                <a href="https://www.nba.com/rockets/broadcast-information" target="blank"><i className="fa fa-tv"></i></a>
                {/* This needs to be routing to a prefered or sponsored radio station broadcast  */}
                <a href="https://www.nba.com/rockets/broadcast-information" target="blank"><i className="fa fa-headphones"></i></a>
            </div>
        </div>
    );
}

export default ListenWatchTab;


// TODO 
// Use correct routes 
// Obtain game status data and change the links based on game status.
// If game status is complete should direct to recap video and article
