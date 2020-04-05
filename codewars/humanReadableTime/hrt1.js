// https://gomakethings.com/how-to-convert-seconds-to-minutes-and-hours-with-vanilla-js/
// https://www.codewars.com/kata/52685f7382004e774f0001f7
humanReadable(359999);

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 60 / 60);
    let minutes = Math.floor(seconds / 60)-(hours*60);
    let second=seconds%60;

    console.log(hours);
    console.log(minutes);
    console.log(second);

    // return hours+":"+minutes+":"+second;
    console.log(hours.toString().padStart(2,'0') +":"+ minutes.toString().padStart(2,'0') +":"+second.toString().padStart(2,'0') ) ;
}

// assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');