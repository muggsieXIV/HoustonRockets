import React, { useState, useEffect } from 'react';
import Loading from '../resources/loadingScreen.jsx';

const BoxScore = (data) => {
    const instance = data.props;
    
    const [ loaded, setLoaded ] = useState(true);
    const [ fgpVls, setFgpVls ] = useState(null);
    const [ fgpHls, setFgpHls ] = useState(null);
    const [ tppVls, setTppVls ] = useState(null);
    const [ tppHls, setTppHls ] = useState(null);
    const [ ftpVls, setFtpVls ] = useState(null);
    const [ ftpHls, setFtpHls ] = useState(null);


    const setData = (state) => {
        setFgpVls(Math.round((instance.vls.tstsg.fgm / instance.vls.tstsg.fga) * 100) + '%');
        setFgpHls(Math.round((instance.hls.tstsg.fgm / instance.hls.tstsg.fga) * 100) + '%');
        setTppVls(Math.round((instance.vls.tstsg.tpm / instance.vls.tstsg.tpa) * 100) + '%');
        setTppHls(Math.round((instance.hls.tstsg.tpm / instance.hls.tstsg.tpa) * 100) + '%');
        setFtpVls(Math.round((instance.vls.tstsg.ftm / instance.vls.tstsg.fta) * 100) + '%');
        setFtpHls(Math.round((instance.hls.tstsg.ftm / instance.hls.tstsg.fta) * 100) + '%');
        setLoaded(true);
    }

    useEffect(()=>{
        setData(instance);
    }, [])

    if (!loaded) {
        return (
            <Loading />
        )
    } else {
        return (
            <div className="box-score">
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Q1 Pts</th>
                            <th>Q2 Pts</th>
                            <th>Q3 Pts</th>
                            <th>Q4 Pts</th>
                            <th>OT Pts</th>
                            <th>FT Out</th>
                            <th>ST Out</th>
                            <th>FG%</th>
                            <th>TP%</th>
                            <th>FT%</th>
                            <th>OREB</th>
                            <th>DREB</th>
                            <th>STL</th>
                            <th>BLK</th>
                            <th>FL</th>
                            <th>TOV</th>
                            <th>PIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Away */}
                        <tr>
                            <td className={instance.vls.ta}>{instance.vls.ta}</td>
                            <td>{instance.vls.q1}</td>
                            <td>{instance.vls.q2}</td>
                            <td>{instance.vls.q3}</td>
                            <td>{instance.vls.q4}</td>
                            <td>{instance.vls.ot ? instance.vls.ot : 'N/A'}</td>
                            <td>{instance.vls.ftout}</td>
                            <td>{instance.vls.stout}</td>
                            <td>{ fgpVls }</td>
                            <td>{ tppVls }</td>
                            <td>{ ftpVls }</td>
                            <td>{instance.vls.tstsg.oreb}</td>
                            <td>{instance.vls.tstsg.dreb}</td>
                            <td>{instance.vls.tstsg.stl}</td>
                            <td>{instance.vls.tstsg.blk}</td>
                            <td>{instance.vls.tstsg.pf}</td>
                            <td>{instance.vls.tstsg.tov}</td>
                            <td>{instance.vls.tstsg.pip ? instance.vls.tstsg.pip : 0}</td>
                        </tr>
                        {/* Home */}
                        <tr>
                            <td className={instance.hls.ta}>{instance.hls.ta}</td>
                            <td>{instance.hls.q1}</td>
                            <td>{instance.hls.q2}</td>
                            <td>{instance.hls.q3}</td>
                            <td>{instance.hls.q4}</td>
                            <td>{instance.hls.ot ? instance.hls.ot : 'N/A'}</td>
                            <td>{instance.hls.ftout}</td>
                            <td>{instance.hls.stout}</td>
                            <td>{ fgpHls }</td>
                            <td>{ tppHls }</td>
                            <td>{ ftpHls }</td>
                            <td>{instance.hls.tstsg.oreb}</td>
                            <td>{instance.hls.tstsg.dreb}</td>
                            <td>{instance.hls.tstsg.stl}</td>
                            <td>{instance.hls.tstsg.blk}</td>
                            <td>{instance.hls.tstsg.pf}</td>
                            <td>{instance.hls.tstsg.tov}</td>
                            <td>{instance.hls.tstsg.pip ? instance.hls.tstsg.pip : 0}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoxScore;
