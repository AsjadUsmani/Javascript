const course = {
    courseName: "Maths",
    courseGrade: 8,
    courseInstructor: "Asjad"
}

// const {courseInstructor} = course;//courseInstructor use hoga course object se fetch karne ke liye.
const {courseInstructor: instructor} = course;

// console.log(courseInstructor);//Asjad
console.log(instructor);//Asjad
