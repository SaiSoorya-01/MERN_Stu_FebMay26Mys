// Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

//
let markss = [
    {name:"soorya",mark:85},
    {name:"madhu",mark:85},
    {name:"tom",mark:69}
];

// let pas = markss.filter(student => student.mark >=70) .map(student => student.name);
// console.log(markss);

console.log("QualifiedStudents: ",pas);

let pas = markss.filter(student => student.mark >=70);
let eat = pas.map(student => student.name );
console.log(eat);