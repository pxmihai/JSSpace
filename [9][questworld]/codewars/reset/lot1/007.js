const arr = [3,3,3,4,4,4,4,5,5,5]

const rdc = (acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc);

const grouped = arr.reduce(rdc, {});

const mostTimes = Math.max(...Object.values(grouped));

const mostRepeated = Object.entries(grouped)
    .filter(([k, v]) => v === mostTimes)
    .map(([k]) => k)

const mostRepeatedHigher = Math.max(...mostRepeated)

console.log({ mostTimes });
console.log({ grouped });
console.log({ mostRepeated });
console.log({ mostRepeatedHigher });