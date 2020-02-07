const people = [
    {
        name: 'John',
        city: 'Chicago',
    },
    {
        name: 'Sally',
        city: 'Seattle',
    }
];

const schools = [
    {
        name: 'Loyal',
        city: 'Chicago',
    },
    {
        name: 'UW',
        city: 'Seattle',
    },
];

const addToList = (personSchool) => {
    // const ul = document.getElementById('list');
    const ul=[];
    // const li = document.createElement('li');
    const li=[];
    li.innerText = `${personSchool.name} from ${personSchool.city} goes to ${personSchool.school}`;
    // ul.appendChild(li);
    ul.push(li);
    console.log(ul);
}


const peopleAndSchools = people.flatMap((p) => {
    return schools.filter((s) => s.city === p.city).map((s) =>
    { return { name: p.name, city: p.city, school: s.name } });
}).map(addToList);

