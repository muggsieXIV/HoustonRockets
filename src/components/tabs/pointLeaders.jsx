import React, { useEffect, useState } from 'react';
import LoadingScreen from '../resources/loadingScreen';


const PointLeaders = (data) => {

    const instance = data.props;

    const url = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/';
    const teamLogos = 'https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/';

    const [ loaded, setLoaded ] = useState(false); 

    useEffect(()=>{
        setLoaded(true);
    }, [])

    if(!loaded) { 
        return (
            <LoadingScreen />
        )
    } else {
        return (
            <div>
                <h4>Point Leaders</h4>
                <div className="point-leaders">
                    <div className={"point-leader-card ptsldr-" + instance[0].ta }>
                        <img className="ptsldr-logo" src={teamLogos + instance[0].ta + '.svg'} alt={instance[0].ta} />
                        <div className="ptsldr-stats-container">
                            <h3>{instance[0].name}</h3>
                            <img src={url + instance[0].pid + '.png'} alt={instance[0].name} />
                            
                            <div>
                                <p>{instance[0].pts} pts </p>
                                <p>{instance[0].ast} ast</p>
                            </div>
                        </div>
                    </div>

                    <div className={"point-leader-card ptsldr-" + instance[1].ta }>
                        <img className="ptsldr-logo" src={teamLogos + instance[1].ta + '.svg'} alt={instance[1].ta} />
                        <div className="ptsldr-stats-container">
                            <h3>{instance[1].name}</h3>
                            <img src={url + instance[1].pid + '.png'} alt={instance[1].name} />
                            
                            <div>
                                <p>{instance[1].pts} pts </p>
                                <p>{instance[1].ast} ast</p>
                            </div>
                        </div>
                    </div>

                    <div className={"point-leader-card ptsldr-" + instance[2].ta }>
                        <img className="ptsldr-logo" src={teamLogos + instance[2].ta + '.svg'} alt={instance[2].ta} />
                        <div className="ptsldr-stats-container">
                            <h3>{instance[2].name}</h3>
                            <img src={url + instance[2].pid + '.png'} alt={instance[2].name} />
                            <div>
                                <p>{instance[2].pts} pts </p>
                                <p>{instance[2].ast} ast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    };
}

export default PointLeaders;



// NOTES 
// API being improved in './reducers/PointLeadersDataAPI'
// 
// API update will include player's team information 
// 
// It would be cool if a card was on a switch and the front / backs were like player cards from the 90s 
// (meaning image front stats back, onClick flip card). 
// 
// # CSS # background-image: linear-gradient(); needs to be the teams hexcode 
