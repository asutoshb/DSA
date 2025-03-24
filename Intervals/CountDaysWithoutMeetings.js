/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    // T = n log n;
    let start = 0;
    let prevEnd = 0;
    let res = 0;
    meetings.sort((a,b) => a[0] - b[0]);
    for(const meet of meetings) {
        start = meet[0];
        if(start > prevEnd) {
            res += start - prevEnd - 1;
        }
        const currEnd = meet[1];
        prevEnd = Math.max(prevEnd, currEnd);
    }
    if(prevEnd < days) {
        res += days - prevEnd;
    }
    return res;
};