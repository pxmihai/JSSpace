/*
Age of ultron
You are given a large number, you must find the exit from the universe.
    Where is ultron. Ultron is at the end of the rainbow, find the end of the
rainbow.
    You must move forward 2897235 parsecs to find ultron.
    You must go back 9821401231 parsecs to find ultron
https://physics.stackexchange.com/questions/519707/is-the-unit-for-spacetime-intervals-time-or-space-distance
https://en.wikipedia.org/wiki/Natural_units
http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibmaths.html
*/
/*
let compab=[1,2,4,6,8,12,24,48,96,192,384,768,1536,3072];
let compba=[3072,1536,768,384,192,96,48,24,12,8,6,4,2,1];
* v1 it can travel just compab
* v2 it can travel atmost 10 of each compab*/
// either alien invasion or map of the universe

// * It can travel atmost 10 of max for each

let fibbonaci=function(at){
    return "The first"+at+"fibbonaci numbers are";
};
let step=2;

let dots=[0,1,0,1,1,1,0,0,0,0,0,1];
console.log(main(402979283057));

function main(dots){
    let sec=dots;
    let time=[
        {
            y:Math.floor(sec / (60*60*24*365)),
            remain:sec-=Math.floor(sec / (60*60*24*365))*(60*60*24*365),
        },
        {
            d:Math.floor(sec / (60*60*24)),
            remain:sec-=Math.floor(sec / (60*60*24))*60*60*24,
        },
        {
            h:Math.floor(sec / (60*60) ),
            remain: sec-=Math.floor(sec / (60*60) )*(60*60),
        },
        {
            m:Math.floor(sec / 60),
            remain:sec-=Math.floor(sec / 60)*60,
        },
        {
            s:Math.floor(sec % 60),
        },
        {
            f:9999,
            remain:(8 / (2))*(2),
        },

    ];

    return time[0].y+"\n"+time[1].d+"\n"+time[2].h+"\n"+time[3].m+"\n"+time[4].s+"\n"+time[5].f;  /*+" "*/
}


