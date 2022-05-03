/* 
The purpose of this file is to evaluate view data for generating reports
regarding analytics of application. 
*/

import { useState } from 'react';

export default function GetTabAnalytics(instance) {

    const [ start, stop, tab ] = instance;

    // time viewed tab
    const timeDiff = stop - start;

    const [ data, setData ] = useState(null);

    // get analytic data about the evaluating tab
    fetch("https://htxrockets.com/api/archived-game/0022101142/analytics/" + tab + "/")
    .then( (res) => res.json() )
    .then( (res) => {
        setData(res.a);
    });

    // update sum of views
    const newSum = data.sum + 1;
    // update logs 
    const newLogs = data.logs.append(timeDiff);
    // update total time viewed
    const newTotalTime = data.totalTime += timeDiff;
    // update avg time viewed
    const newAvg = newTotalTime / newLogs.length;

    // there should probably be a data set for IP to track unique visits and location information
    // if this application is utilized in plugins (ie WordPress SquareSpace SportsEngine, Stats sites ect) 
    // it should track the site used 
    
    // set new tab data
    const thisState = {
        tab: {
            'views': newSum,
            'logs': newLogs,
            'totalTime': newTotalTime,
            'avgTime': newAvg,
        }
    }

    // update database 
    fetch("https://htxrockets.com/api/archived-game/0022101142/analytics/" + tab + "/", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(thisState)
    }).then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    });

}
