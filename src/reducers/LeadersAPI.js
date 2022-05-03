// export default function GetPointLeaders(data) {
    
//     let hls = data.hls.pstsg; 
//     let vls = data.vls.pstsg;

//     let sortedHls = hls.sort((a, b) => {
//         if(a.pts < b.pts) {
//             return -1
//         } else if(a.pts > b.pts) {
//             return 1
//         } else {
//             return 0
//         }
//     });

//     let sortedVls = vls.sort((a, b) => {
//         if(a.pts < b.pts) {
//             return -1
//         } else if(a.pts > b.pts) {
//             return 1
//         } else {
//             return 0
//         }
//     });

//     let newHls = sortedHls.reverse();
//     let newVls = sortedVls.reverse();

//     let query = [newHls[0], newHls[1], newHls[2], newVls[0], newVls[1], newVls[2]];

//     let sortedQuery = query.sort((a, b) => {
//         if(a.pts < b.pts) {
//             return -1
//         } else if(a.pts > b.pts) {
//             return 1
//         } else {
//             return 0
//         }
//     })

//     let leaders = [sortedQuery[0], sortedQuery[1], sortedQuery[2]];
//     leaders.reverse();
//     let first = {
//         'name': leaders[0].fn[0] + '.' + leaders[0].ln,
//         'pts': leaders[0].pts,
//         'ast': leaders[0].ast,
//         'pid': leaders[0].pid,
//     };

//     let second = {
//         'name': leaders[1].fn[0] + '.' + leaders[1].ln,
//         'pts': leaders[1].pts,
//         'ast': leaders[1].ast,
//         'pid': leaders[1].pid
//     };

//     let third = {
//         'name': leaders[2].fn[0] + '.' + leaders[2].ln,
//         'pts': leaders[2].pts,
//         'ast': leaders[2].ast,
//         'pid': leaders[2].pid
//     };
    
//     let currentLeaders = {
//         'first': first, 
//         'second': second, 
//         'third': third,
//     }

//     return currentLeaders;
// }
