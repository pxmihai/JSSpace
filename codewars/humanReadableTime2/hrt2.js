// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 3 years = 94670777
// 1 year = 31556926
// (6 years 192 days 13 hours 3 minutes) + (54 seconds) = 205 977 390
console.log(formatDuration(31556926));

function formatDuration(seconds) {
    let s=seconds;
    if (seconds==0) return 'now';
    let years=Math.floor(seconds / (3600*24*365));
    let days=Math.floor(seconds / (3600*24))-(years*365);
    let hours = Math.floor(seconds % ((3600*24) / 3600)-(days)  );
    let minutes = Math.floor(seconds % 3600 / 60)-(hours*60);
    let second=Math.floor(seconds % 60);
    //cutoff value
    // console.log(years);
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(second);
    // console.log('------------------');

    // console.log(hours+":"+minutes+":"+second) ;
    // console.log(hours.toString().padStart(2,'0') +":"+ minutes.toString().padStart(2,'0') +":"+second.toString().padStart(2,'0') ) ;

    let time=[
        {
            name: 'year',
            plural:'years',
            glue:', '
        },
        {
            name: 'day',
            plural:'days',
            glue:', '
        },
        {
            name: 'hour',
            plural:'hours',
            glue:', '
        },
        {
            name: 'minute',
            plural:'minutes',
            glue:', '
        },
        {
            name: 'second',
            plural:'seconds',
            glue:'',
        },
        {
            last:'and',
        },
    ];

    //and is time[3].glue
    let ywords;
    if(years==0) ywords="";
    if(years==1) ywords=years+" "+time[0].name;
    if(years==1&&days>0) ywords=years+" "+time[0].name+time[0].glue;
    if(years>1) ywords=years+" "+time[0].plural;
    if(years>1&&(days>0||hours>0||minutes>0||second>0) ) ywords=years+" "+time[0].plural+time[0].glue;

    // console.log(ywords);

    let dwords;
    if(days==0)dwords="";
    if(days==1)dwords=days+" "+time[1].name;
    if(days==1&&(hours>0))dwords=days+" "+time[1].name+time[1].glue;
    if(days>1) dwords=days+" "+time[1].plural;
    if(days>1&&(years>0||hours>0||minutes>0||second>0) )dwords=days+" "+time[1].plural+time[1].glue;

    // console.log(dwords);

    let hwords;
    if(hours==0)hwords="";
    if(hours==1)hwords=hours+" "+time[2].name;
    if(hours==1&&(minutes>0))hwords=hours+" "+time[2].name+time[2].glue;
    if(hours>1) hwords=hours+" "+time[2].plural;
    if(hours>1&&(years>0||days>0||minutes>0||second>0))hwords=hours+" "+time[2].plural+time[2].glue;

    // console.log(hwords);

    let mwords;
    if(minutes==0) mwords="";
    if(minutes==1 ) mwords=minutes+" "+time[3].name;
    if(minutes==1 &&second>0) mwords=minutes+" "+time[3].name+time[5].glue;
    if(minutes>1 ) mwords=minutes+" "+time[3].plural;
    if(minutes>1 && (years>0||days>0|hours>0||second>0)) mwords=minutes+" "+time[3].plural+time[5].glue;


    // console.log(mwords);

    let swords;
    if(second==0) swords="";
    if(second==1)swords=second +" "+time[4].name;
    if(second>1) swords=second+" "+time[4].plural;
    if(second>1&&(years>0||days>0>hours>0)) swords=time[5].glue+" "+ second+""+time[4].plural;

    // console.log(swords);

    return(ywords+dwords+hwords+mwords+swords);

}
//Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: '6 years, 2382 days, 13 hours, 3 minutes and  and  54seconds'