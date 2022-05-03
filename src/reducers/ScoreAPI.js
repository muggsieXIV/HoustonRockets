export default function GetScoreData(data) {

    const awayImg = 'https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + data.vls.ta + '.svg';
    const homeImg = 'https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + data.hls.ta + '.svg';

    const ScoreData = {
        'homeTeam': data.hls.tn,
        'homeImg': homeImg, 
        'homeScore': data.hls.s,
        'awayTeam': data.vls.tn,
        'awayImg': awayImg,
        'awayScore': data.vls.s,
        'time': data.cl,
        'qtr': data.p
    }
    
    return ScoreData;

}
