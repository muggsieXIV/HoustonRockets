import rocketsLogo from '../media/images/rocketsLogo.png';

export default function GetLastPlayData(data) {
    const getImage = () => {
        if(data.lpla.pid >= 1) {
            const playerImg = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + data.lpla.pid + ".png";
            return playerImg;
        }
        else if(data.lpla.tid === data.hls.tid){
            const playerImg = "https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/" + data.hls.ta + ".svg";
            return playerImg;
        }
        else if(data.lpla.tid === data.vls.tid){
            const playerImg = "https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/" + data.vls.ta + ".svg";
            return playerImg;
        }
        else {
            const playerImg = rocketsLogo;
            return playerImg;
        }
    }

    const locX = data.lpla.locX / 2;
    const locY = data.lpla.locY / 2;

    const lastPlayData = {
        'clock': data.lpla.cl,
        'teamID': data.lpla.tid,
        'playerID': data.lpla.pid,
        'playerImg': getImage(),
        'description': data.lpla.de,
        'locX': locX,
        'locY': locY,
        'opid': data.lpla.opid,
    };
    
    return lastPlayData;
}
