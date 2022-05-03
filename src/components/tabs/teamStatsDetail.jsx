import React from 'react';

const TeamStats = (data) => {
    const instance = data.props;

    const fgp = (fgm, fga) => {
        if(!fgm){
            return '0%';
        } else if(!fga) {
            return '0%';
        } else {
            return Math.round((fgm / fga) * 100) + '%';
        }
    }

    const tpp = (tpm, tpa) => {
        if(!tpm){
            return '0%';
        } else if(!tpa) {
            return '0%';
        } else {
            return Math.round((tpm / tpa) * 100) +'%';
        }
    }

    const ftp = (ftm, fta) => {
        if(!ftm){
            return '0%';
        } else if(!fta) {
            return '0%';
        } else {
            return Math.round((ftm / fta) * 100) + '%';
        }
    }

    const fbptsp = (fbptspm, fbptspa) => {
        if(!fbptspm){
            return '0%';
        } else if(!fbptspa) {
            return '0%';
        } else {
            return Math.round((fbptspm / fbptspa) * 100) + '%';
        }
    }

    const url = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'

    const mapPlayer = instance.map((index)=>
        <tr key={index}>
            <td className="table-img"><img src={url + index.pid +'.png'} alt={index.ta} /></td>
            <td>{index.num}</td>
            <td className="table-plyr-n">{index.fn[0]}.{index.ln}</td>
            <td>{index.pos ? index.pos : 'N/A'}</td>
            <td>{index.min}:{index.sec}</td>
            <td>{index.pts}</td>
            <td>{index.ast}</td>
            <td>{index.pip}</td>
            <td>{fgp(index.fgm, index.fga)}</td>
            <td>{tpp(index.tpm, index.tpa)}</td>
            <td>{ftp(index.ftm, index.fta)}</td>
            <td>{fbptsp(index.fbptsm, index.fbptsa)}</td>
            <td>{index.reb}</td>
            <td>{index.stl}</td>
            <td>{index.blk}</td>
            <td>{index.tov}</td>
            <td>{index.f ? index.f : 0}</td>
            <td>{index.tf ? index.tf : 0}</td>
            <td>{index.pm ? index.pm : 'N/A'}</td>
        </tr>
    )
    
    return (
        <div className="table-container">
            <div className="game-stats-table">
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>#</th>
                            <th>Name</th>
                            <th>POS</th>
                            <th>MIN</th>
                            <th>PTS</th>
                            <th>AST</th>
                            <th>PIP</th>
                            <th>FG%</th>
                            <th>TP%</th>
                            <th>FT%</th>
                            <th>FBPTS%</th>
                            <th>REB</th>
                            <th>STL</th>
                            <th>BLK</th>
                            <th>TOV</th>
                            <th>F</th>
                            <th>TF</th>
                            <th>+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapPlayer}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TeamStats;
