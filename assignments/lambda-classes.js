// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.name;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}; I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(el) {
            console.log(el)
        })
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favLanguage;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}: @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Test persons

const person1 = new Person ({
    name: "Bob",
    age: 45,
    location: "London"
})

const person2 = new Person ({
    name: "Jane",
    age: 43,
    location: "Chicago"
})

person1.speak();

person2.speak();

// Test instructors

const instructor1 = new Instructor ({
    name: "Bob",
    age: 45,
    location: "London",
    specialty: "React",
    favLanguage: "JS",
    catchPhrase: "AAAAAAAAAAAAAAAAAAAAAA"
})

const instructor2 = new Instructor ({
    name: "Ding",
    age: 45,
    location: "London",
    specialty: "Bugs",
    favLanguage: "C",
    catchPhrase: "BUGS"
})

instructor1.demo("pizza");

instructor2.grade({name:"Jimmy"}, "pizza");

// Test students

const student1 = new Student ({
    name: "Jormy",
    age: 10,
    location: "Binghamton",
    previousBackground: "Literal Child",
    className: "WEB24",
    favSubjects: ["Math", "Sports", "Science"]
})

const student2 = new Student ({
    name: "Cheebles",
    age: 25,
    location: "New York",
    previousBackground: "Human Bus",
    className: "WEB24",
    favSubjects: ["Reptile Studies", "Geology", "Grammar"]
})

student1.listsSubjects();

student2.PRAssignment("Assassination");

student2.sprintChallenge("Assassination");

// Test PMs

const pm1 = new ProjectManager ({
    name: "Chogg",
    age: 34,
    location: "Ozone layer",
    specialty: "Bologna",
    favLanguage: "Ruby",
    catchPhrase: "Chogg smash",
    gradClassName: "WEB1",
    favInstructor: "Borjon"
})

const pm2 = new ProjectManager ({
    name: "Prune",
    age: 100,
    location: "Hospital",
    specialty: "Eating soup",
    favLanguage: "Python",
    catchPhrase: "I don't have any teeth",
    gradClassName: "WEB1",
    favInstructor: "Borjon X"
})

pm1.standUp("#WEB100");

pm2.debugsCode(student1, "Dancing")