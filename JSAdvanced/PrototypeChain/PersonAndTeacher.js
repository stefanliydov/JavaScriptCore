/**
 * Created by Stefan on 14.7.2017 г..
 */
function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name,email);
            this.subject = subject;
        }


    }
    return {
        Person,
        Teacher
    }
}
