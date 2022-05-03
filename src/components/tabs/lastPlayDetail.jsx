import React, {useEffect} from 'react';

const LastPlayDetail = (data) => {
    const instance = data.props;

    const Canvas = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");

        const xCoordinate = instance.locX / 2;
        const yCoordinate = instance.locY / 2;

        ctx.beginPath();

        ctx.fillStyle = "#CF5300";

        // Set canvas [0,0] to center
        ctx.translate(canvas.width/2,canvas.height/2);

        // Draw 
        ctx.arc(xCoordinate,yCoordinate,5,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();

        ctx.save();
    }

    useEffect(()=>{
        const canvas = Canvas();
        return canvas;
    }, [])

    return (
        <div className="last-play">

            {/* To Do: make this section auto scroll on its own vertically. */}
            <div className="last-play-header">
                <div className="scrollbox">
                    <img src={instance.playerImg } alt="player" />
                    <h5>Last Play @ { instance.clock } | { instance.description }</h5>
                </div>
            </div>

            <div className="last-play-canvas">
                <canvas id="canvas" className="canvas"></canvas>
            </div>
        </div>
    )
}

export default LastPlayDetail;


// Component goal, render 'last play' data out onto court based on coordinate provided
// Future goal, render all game event coordinates once a game has completed. 
// Future goal, render all game events with hover over effect with popup of description
