
// Not Live Yet 
// This will replace LeadersApi
// Purpose will be to obtain team logo will also doing everything the LeadersApi does. 
// Doing this here for the purpose of upgrading without disrupting a stable project. 
// Goal is to seemlessly replace 


export default function GetPointLeadersData(data) {

    let hls = data.hls; 
    let vls = data.vls;


    function FilterHls(hlsData) {
        let team = hlsData.ta;
        let evalHls = hlsData.pstsg;
        
        let sortedHls = evalHls.sort((a, b) => {
            if(a.pts < b.pts) {
                return -1
            } else if(a.pts > b.pts) {
                return 1
            } else {
                return 0
            }
        });

        let newHls = sortedHls.reverse();

        let data = [
            {
                name: newHls[0].fn[0] + '.' + newHls[0].ln,
                pts: newHls[0].pts,
                ast: newHls[0].ast,
                pid: newHls[0].pid,
                ta: team
            }, {
                name: newHls[1].fn[1] + '.' + newHls[1].ln,
                pts: newHls[1].pts,
                ast: newHls[1].ast,
                pid: newHls[1].pid,
                ta: team
            }, {
                name: newHls[2].fn[2] + '.' + newHls[2].ln,
                pts: newHls[2].pts,
                ast: newHls[2].ast,
                pid: newHls[2].pid,
                ta: team
            }
            
        ];
        return data;
    }

    function FilterVls(vlsData) {
        let team = vlsData.ta;
        let evalVls = vlsData.pstsg;
        let sortedVls = evalVls.sort((a, b) => {
            if(a.pts < b.pts) {
                return -1
            } else if(a.pts > b.pts) {
                return 1
            } else {
                return 0
            }
        });

        let newVls = sortedVls.reverse();

        let data = [
            {
                name: newVls[0].fn[0] + '.' + newVls[0].ln,
                pts: newVls[0].pts,
                ast: newVls[0].ast,
                pid: newVls[0].pid,
                ta: team
            }, {
                name: newVls[1].fn[1] + '.' + newVls[1].ln,
                pts: newVls[1].pts,
                ast: newVls[1].ast,
                pid: newVls[1].pid,
                ta: team
            }, {
                name: newVls[2].fn[2] + '.' + newVls[2].ln,
                pts: newVls[2].pts,
                ast: newVls[2].ast,
                pid: newVls[2].pid,
                ta: team
            }
        ]
        return data;
    }

    const hlsLdrs = FilterHls(hls);
    const vlsLdrs = FilterVls(vls);

    const query = [] 

    query.push(hlsLdrs[0]);
    query.push(hlsLdrs[1]);
    query.push(hlsLdrs[2]);
    query.push(vlsLdrs[0]);
    query.push(vlsLdrs[1]);
    query.push(vlsLdrs[2]);


    let sortedQuery = query.sort((a, b) => {
        if(a.pts < b.pts) {
            return -1
        } else if(a.pts > b.pts) {
            return 1
        } else {
            return 0
        }
    });

    let newQuery = sortedQuery.reverse();
    const leaders = newQuery.slice(0, 3);

    return leaders;
}
