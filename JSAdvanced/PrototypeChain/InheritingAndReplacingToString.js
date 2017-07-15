/**
 * Created by Stefan on 14.7.2017 г..
 */
function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        toString(){
            let name = this.constructor.name;
            return `${name} (name: ${this.name}, email: ${this.email}`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name,email);
            this.subject = subject;
        }
        toString(){
            let parent = super.toString().slice(0, -1);
            return `${parent}, subject:${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            let parent  = super.toString().slice(0,-1);
            return `${parent}, course: ${this.course})`;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }

}
let Teacher = personAndTeacher.Teacher;
let teacher = new.Teacher('Ivan', 'stefan@ab.bg',"Math");
console.log(teacher);