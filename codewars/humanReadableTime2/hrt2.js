// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 3 years = 94670777
// 1 year = 31556926
// (6 years 192 days 13 hours 3 minutes) + (54 seconds) = 205 977 390
// 109 days, 4 hours, 13 minutes and 54 seconds = 9432834
//Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: 205851834
console.log(formatDuration(31556926));

function formatDuration(seconds) {


    let sec=seconds;

    let years=Math.floor(sec / (60*60*24*365));
        sec-=years*60*60*24*365;
        let days=Math.floor(sec / (60*60*24));
        sec-=days*60*60*24;
        let hours = Math.floor(sec / (60*60) );
        sec-=hours*(60*60);
        let minutes = Math.floor(sec / 60);
        sec-=minutes*60;
        let second=Math.floor(sec % 60);



    // console.log("y"+years);
    // console.log("d"+days);
    // console.log("h"+hours);
    // console.log("m"+minutes);
    // console.log("s"+second);
    // console.log('------------------');

    let time=[
        {
            name: 'year',
            plural:'years',

        },
        {
            name: 'day',
            plural:'days',

        },
        {
            name: 'hour',
            plural:'hours',

        },
        {
            name: 'minute',
            plural:'minutes',

        },
        {
            name: 'second',
            plural:'seconds',

        },
        {
            and:' and ',
            comma:', ',
        }

    ];

    if (seconds==0) return 'now';


    let ywords;
    if(years==0){ywords="";}
    if(years==1){ywords=years+" year"}
    if(years>=1){ywords=years+" years"}



        let dwords="";
        if(days==0)dwords="";
        if(days==1)dwords=days+" "+time[1].name;
        if(days==1&&(years>0||hours>0||minutes>0||second>0))dwords=days+" "+time[1].name+time[1].glue;
        if(days>1) dwords=days+" "+time[1].plural;
        if(days>1&&(years>0||hours>0||minutes>0||second>0) )dwords=days+" "+time[1].plural+time[1].glue;

    let hwords="";
    if(hours==0 )hwords="";
    if(hours==1 )hwords=hours+" "+time[2].name;
    if(hours==1&&(years>0||days>0||minutes>0||second>0))hwords=hours+" "+time[2].name+time[2].glue;
    if(hours>1) hwords=hours+" "+time[2].plural;
    if(hours>1&&(years>0||days>0||minutes>0||second>0))hwords=hours+" "+time[2].plural+time[2].glue;

        let mwords="";
        if(minutes==0 ) mwords="";
        if(minutes==1 ) mwords=minutes+" "+time[3].name;
        if(minutes==1 &&(years>0||days>0|hours>0||second>0)) mwords=minutes+" "+time[3].name+time[5].glue;
        if(minutes>1 ) mwords=minutes+" "+time[3].plural;
        if(minutes>1 && (years>0||days>0|hours>0||second>0)) mwords=minutes+" "+time[3].plural+time[5].glue;

    let swords="";
    if(second==0) swords="";
    if(second==1)swords=second +" "+time[4].name;
    if(second>1) swords=second+" "+time[4].plural;
    if(second>1&&(years>0||days>0>hours>0)) swords=time[5].glue+" "+ second+" "+time[4].plural;

    // console.log(ywords);
    // console.log(dwords);
    // console.log(hwords);
    // console.log(mwords);
    // console.log(swords);

    // return(ywords+dwords+hwords+mwords+swords);
    return ("y"+years+" "+"d"+days+" "+"h"+hours+" "+"m"+minutes+" "+"s"+second);

}
