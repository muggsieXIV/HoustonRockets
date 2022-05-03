import React, { useEffect, useState } from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import LoadingScreen from '../resources/loadingScreen';

const BoxScoreGraph = (state) => {
    const instance = state.props;
    
    const [ loaded, setLoaded ] = useState(false);

    const [ pipHls, setPipHls ] = useState(null);
    const [ pipVls, setPipVls ] = useState(null);
    const [ fgpHls, setFgpHls ] = useState(null);
    const [ fgpVls, setFgpVls ] = useState(null);
    const [ tppHls, setTppHls ] = useState(null);
    const [ tppVls, setTppVls ] = useState(null);
    const [ ftpHls, setFtpHls ] = useState(null);
    const [ ftpVls, setFtpVls ] = useState(null);
    const [ orebHls, setOrebHls ] = useState(null);
    const [ orebVls, setOrebVls ] = useState(null);
    const [ drebHls, setDrebHls ] = useState(null);
    const [ drebVls, setDrebVls ] = useState(null);
    const [ tovHls, setTovHls ] = useState(null);
    const [ tovVls, setTovVls ] = useState(null);
    const [ potovHls, setPotovHls ] = useState(null);
    const [ potovVls, setPotovVls ] = useState(null);

    // PTS IN PAINT
    const allPip = instance.vls.tstsg.pip + instance.hls.tstsg.pip;
    const pipH = Math.round((instance.hls.tstsg.pip / allPip) * 100);
    const pipV = Math.round((instance.vls.tstsg.pip / allPip) * 100);

    const pipData = [
        {title: "PIP " + instance.hls.ta, value: pipHls, color: "#dd2b35"},
        {title: "PIP " + instance.vls.ta, value: pipVls, color: "#663694"},
    ]

    // FIELD GOALS
    const fgpV = Math.round((instance.vls.tstsg.fgm / instance.vls.tstsg.fga) * 100);
    const fgpH = Math.round((instance.hls.tstsg.fgm / instance.hls.tstsg.fga) * 100);

    const fgpData = [
        {title: "FG% " + instance.vls.ta, value: fgpHls, color: "#dd2b35"},
        {title: "FG% " + instance.vls.ta, value: fgpVls, color: "#663694"},
    ]

    // THREE POINTERS
    const tppH = Math.round((instance.hls.tstsg.tpm / instance.hls.tstsg.tpa) * 100);
    const tppV = Math.round((instance.vls.tstsg.tpm / instance.hls.tstsg.tpa) * 100);

    const tppData = [
        {title: "TP% " + instance.hls.ta, value: tppHls, color: "#dd2b35"},
        {title: "TP% " + instance.vls.ta, value: tppVls, color: "#663694"},
    ]

    // FREE THROWS
    const ftpH = Math.round((instance.hls.tstsg.ftm / instance.hls.tstsg.fta) * 100);
    const ftpV = Math.round((instance.vls.tstsg.ftm / instance.vls.tstsg.fta) * 100);

    const ftpData = [
        {title: "FT% " + instance.hls.ta, value: ftpHls, color: "#dd2b35"},
        {title: "FT% " + instance.vls.ta, value: ftpVls, color: "#663694"},
    ]

    // OFFENSIVE REBOUNDS
    const oRebOne = instance.hls.tstsg.oreb + instance.vls.tstsg.dreb;
    const orebH = Math.round((instance.hls.tstsg.oreb / oRebOne) * 100);

    const oRebTwo = instance.vls.tstsg.oreb + instance.hls.tstsg.dreb;
    const orebV = Math.round((instance.vls.tstsg.oreb / oRebTwo) * 100);

    const orebData = [
        {title: "OREB " + instance.hls.ta, value: orebHls, color: "#dd2b35"},
        {title: "OREB " + instance.vls.ta, value: orebVls, color: "#663694"},
    ]

    // DEFENSIVE REBOUNDS 
    const drebOne = instance.hls.tstsg.oreb + instance.vls.tstsg.dreb;
    const drebH = Math.round((instance.hls.tstsg.oreb / drebOne) * 100);

    const drebTwo = instance.vls.tstsg.oreb + instance.hls.tstsg.dreb;
    const drebV = Math.round((instance.vls.tstsg.oreb / drebTwo) * 100);

    const drebData = [
        {title: "DREB " + instance.hls.ta, value: drebHls, color: "#dd2b35"},
        {title: "DREB " + instance.vls.ta, value: drebVls, color: "#663694"},
    ]

    // TURNOVERS 
    if(!instance.hls.tstsg.tov) {
        setTovHls(50);
    }
    if(!instance.vls.tstsg.tov) {
        setTovVls(50);
    }
    
    const allTurnovers = instance.hls.tstsg.tov + instance.hls.tstsg.tov;
    const tovH = Math.round((instance.hls.tstsg.tov / allTurnovers) * 100);
    const tovV = Math.round((instance.vls.tstsg.tov / allTurnovers) * 100);
    
    const tovData = [
        {title: "TOV " + instance.hls.ta, value: tovHls, color: "#dd2b35"},
        {title: "TOV " + instance.vls.ta, value: tovVls, color: "#663694"},
    ]

    // POINTS OFF TURNOVERS
    const allTOPoints = instance.hls.tstsg.potov + instance.vls.tstsg.potov;
    const potovH = Math.round((instance.hls.tstsg.potov / allTOPoints) * 100);
    const potovV = Math.round((instance.vls.tstsg.potov / allTOPoints) * 100);

    const potovData = [
        {title: "POTOV " + instance.hls.ta, value: potovHls, color: "#dd2b35"},
        {title: "POTOV " + instance.vls.ta, value: potovVls, color: "#663694"},
    ]

    useEffect(()=>{
        setPipHls(pipH);
        setPipVls(pipV);
        setFgpHls(fgpH);
        setFgpVls(fgpV);
        setTppHls(tppH);
        setTppVls(tppV);
        setFtpHls(ftpH);
        setFtpVls(ftpV);
        setOrebHls(orebH);
        setOrebVls(orebV);
        setDrebHls(drebH);
        setDrebVls(drebV);
        setTovHls(tovH);
        setTovVls(tovV);
        setPotovHls(potovH);
        setPotovVls(potovV);

        setLoaded(true);
    }, []);

    if(!loaded) {
        return (
            <div className="graph">
                <LoadingScreen />
            </div>
        )
    } else if ( loaded ) {
        return (
            <div className="graph">

                <div className="graph-card">
                    <h1>Pts in the Paint</h1>
                    <ReactSvgPieChart
                        data={pipData}
                        
                        // Expand on hover (or touch) effect
                        expandOnHover

                        // custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Feild Goals</h1>
                    <ReactSvgPieChart
                        data={fgpData}
                        // Expand on hover (or touch) effect
                        expandOnHover

                        // custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Three Points</h1>
                    <ReactSvgPieChart
                        data={tppData}
                        // Expand on hover (or touch) effect
                        expandOnHover

                        // custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Free Throws</h1>
                    <ReactSvgPieChart
                        data={ftpData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>
                
                <div className="graph-card">
                    <h1>Off-Rebounds</h1>
                    <ReactSvgPieChart
                        data={orebData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Def-Rebounds</h1>
                    <ReactSvgPieChart
                        data={drebData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Turnovers</h1>
                    <ReactSvgPieChart
                        data={tovData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>

                <div className="graph-card">
                    <h1>Pts off Turnovers</h1>
                    <ReactSvgPieChart
                        data={potovData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            // if (d) {
                            //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            // } else {
                            //     console.log("Mouse leave - Index:", i, "Event:", e)
                            // }
                        }}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <LoadingScreen />
        )
    }
    
}

export default BoxScoreGraph;
