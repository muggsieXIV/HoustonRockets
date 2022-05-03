
export default function GetGameData(data) {

    const GameData = {
        'status': data.st,
        'date': data.gdtutc,
        'time': data.utctm,
        'city': data.ac,
        'state': data.as,
        'home': data.hls.ta,
        'away': data.vls.ta,
        'evtTime': data.lpla.cl,
        'lastPlay': data.lpla.de
    };

    return GameData;
}

