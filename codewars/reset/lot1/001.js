// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/solutions

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

function log(x){return console.log(x)}
function race(v1, v2, g) {

    if (v2 < v1) { return null; }

    let seconds = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds - h * 3600) / 60);
    let s = seconds - h * 3600 - m * 60;

    return [h, m, s];
}

log(race(10,12,6));
log(race(720, 850, 70)); // => [0, 32, 18] or "0 32 18"
log(race(80, 91, 37)); //   => [3, 21, 49] or "3 21 49"