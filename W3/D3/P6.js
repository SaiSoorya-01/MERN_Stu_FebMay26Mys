//Nested object and Method
const student = {
    firstName: "soorya",
    lastName: "M",
    scores:{
        math:100,
        science:86
    },
    hobbies:["reading","drive"],
    fullname: function(){
        return this.firstName + " "+this.lastName;
    },
    greet(){
        console.log("Hi,",this.fullname());
    }
};
console.log(student.fullname());
