import React, { useState, useEffect } from 'react';
import './App.css';

// Reducers
import GetScoreData from './reducers/ScoreAPI';
import GetLastPlayData from './reducers/LastPlayAPI';
// import GetPointLeaders from './reducers/LeadersAPI'; // This was phased out as it is missing team data
import GetPointLeadersData from './reducers/PointLeadersDataAPI' // This will upgrade LeadersApi

// Components
import ScoreBoard from './components/mainCards/scoreBoard.jsx';
import PointLeaders from './components/tabs/pointLeaders.jsx';
import LoadingScreen from './components/resources/loadingScreen.jsx';
import BoxScore from './components/tabs/boxScoreDetail';
import BoxScoreGraph from './components/tabs/boxScoreGraph.jsx';
import TeamStats from './components/tabs/teamStatsDetail.jsx';
import Tickets from './components/tabs/tickets.jsx';
import ListenWatchTab from './components/tabs/listenWatch.jsx';
import LastPlayDetail from './components/tabs/lastPlayDetail.jsx';

// Analytics 
// import GetTabAnalytics from './analytics/TabAnalytics';

function App() {
  const [ data, setData ] = useState(null);
  const [ scoreData, setScoreData ] = useState(null);
  
  const [ showBoxScore, setShowBoxScore ] = useState(true);

  const [ showGetTickets, setShowGetTickets ] = useState(false);

  const [ showLastPlay, setShowLastPlay ] = useState(false);
  const [ lastPlayData, setLastPlayData ] = useState(null);
  const [ pointLeaders, setPointLeaders ] = useState(null);

  const [ showTeamStats, setShowTeamStats ] = useState(false);
  const [ team, setTeam ] = useState(null);

  const [ loaded, setLoaded ] = useState(false);
  const [ error, setError ] = useState(null);

const displayBoxScore = () => {
  setShowLastPlay(false);
  setLastPlayData(null);
  setPointLeaders(null);

  setShowTeamStats(false);
  setTeam(null);

  setShowGetTickets(false);

  // GetTabAnalytics('boxScore');

  setShowBoxScore(true);
}

const displayLastPlay = () => {
  setShowBoxScore(false);
  setShowTeamStats(false);
  
  setShowTeamStats(false);

  setShowGetTickets(false);

  // GetTabAnalytics('lastPlayed');

  const lpd = GetLastPlayData(data);
  // const ptsLdrs = GetPointLeaders(data); // This is the old way. It was missing team informations
  const ptsLdrs = GetPointLeadersData(data);

  setLastPlayData(lpd);
  setPointLeaders(ptsLdrs);

  setShowLastPlay(true);
}

const displayHomeTeamStats = () => {
  setShowLastPlay(false);
  setLastPlayData(null);
  setPointLeaders(null);

  setShowBoxScore(false);

  setShowGetTickets(false);
  
  setTeam(data.hls.pstsg);
  // GetTabAnalytics('homeTeam');
  setShowTeamStats(true);
} 

const displayAwayTeamStats = () => {
  setShowBoxScore(false);

  setShowGetTickets(false);

  setShowLastPlay(false);
  setLastPlayData(null);
  setPointLeaders(null);

  setTeam(data.vls.pstsg);
  // GetTabAnalytics('awayTeam');
  setShowTeamStats(true);
}

const displayGetTickets = () => {
  setShowBoxScore(false);

  setShowGetTickets(false);

  setShowLastPlay(false);
  setLastPlayData(null);
  setPointLeaders(null);

  setShowTeamStats(false);
  setTeam(null);

  // GetTabAnalytics('tickets');
  setShowGetTickets(true);
}

  useEffect(()=>{
    fetch("https://htxrockets.com/api/archived-game/0022101142")
    .then( (res) => res.json() )
    .then( (res) => {
      setData(res.g);
      setScoreData(GetScoreData(res.g)); 
      setLoaded(true);
    },
    // Note: handling errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => { 
      setError(error);
    });
  }, [])

  if (loaded && error) {
    return <div className="App">
        <LoadingScreen />
        <h4>Error: {error.message}</h4>
      </div>
  } else if (loaded === true ) {
    return (
      <div className="App">
        <ListenWatchTab props={data.st} />
        <ScoreBoard props={scoreData} />
        <section className="tab">
          {/* <Tabs /> */}
          <div className="tab-bar">
            <button onClick={displayBoxScore}>Box Score</button>
            <button onClick={displayLastPlay}>Last Play</button>
            <button onClick={displayAwayTeamStats}>{data.vls.ta} Stats</button>
            <button onClick={displayHomeTeamStats}>{data.hls.ta} Stats</button>
            <button onClick={displayGetTickets}>Get Tickets</button>
          </div>

          { showBoxScore === true && (
            <div className="tab-content">
              <BoxScore props={data} />
              <BoxScoreGraph props={data} />
            </div>
          )}

          { showLastPlay === true && (
            <div className="tab-content">
              <LastPlayDetail props={lastPlayData} />
              <PointLeaders props={pointLeaders} />
            </div>
          )}

          { showTeamStats === true && (
            <div className="tab-content">
              <TeamStats props={team} />
            </div>
          )}

          { showGetTickets === true && (
            <div className="tab-content">
              <Tickets />
              <iframe width="560" height="275" src="https://www.youtube.com/embed/videoseries?list=PLne3NOCIB9JIr7V3kNg5IfVTg5l5sZZ5P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          )}
        </section>
      </div>
    )
  } else {
    return <div className="loading-page">
        <LoadingScreen />
      </div>
  }
}

export default App;