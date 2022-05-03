import React from 'react';

const ScoreBoard = (data) => {

    return (
        <div className="score-board">
             {/* Away Score */}
            <div className="away-score">
                <img src={data.props.awayImg} alt={data.props.awayTeam} />
                <h1 className="sb-score">{data.props.awayScore}</h1>
            </div>

            {/* Score Board */}
            <div className="clock">
                <h2>{data.props.time} (QTR {data.props.qtr})</h2>
            </div>

            {/* Home Score */}
            <div className="home-score">
                <img src={data.props.homeImg} alt={data.props.homeTeam} />
                <h1 className="sb-score">{data.props.homeScore}</h1>
            </div>
        </div>
    )
}

export default ScoreBoard;
