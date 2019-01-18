// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000
}
];

// let fullName = `${firstName} ${lastName}`;

// Done!
function exercise1() {
    let answer = people.filter((person) => person.Salary > 100000).map((person) => person.firstName + " " + person.lastName).join(", ");
    document.getElementById("1").innerText = `Answer: ${answer}`;
}

// Done!
function exercise2() {
    let totalSalary = people.reduce((accumulator, person) => {
        return accumulator + person.Salary;
    }, 0);
    document.getElementById("2").innerText = `Answer: ${totalSalary}`;
}

// Done!
function exercise3() {
    let sqlSkills = people.filter((person) => {
        return person.Skills.filter(skill => { return skill === "SQL" }).length > 0;
    }).map((person) => person.firstName + " " + person.lastName).join(", ");
    document.getElementById("3").innerText = `Answer: ${sqlSkills}`;
}

// Done, but not super happy with it.
function exercise4() {
    let goodJob = people.filter(person => person.job.includes("Software Engineer")).map(person => person.firstName + " " + person.lastName + "—" + person.job).join(", ");
    document.getElementById("4").innerText = `Answer: ${goodJob}`;
}