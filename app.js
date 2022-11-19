
class User {
    constructor() {
        const username = prompt("What is your username?");
        this.username = username,
        this.schedule = {}
    }
    add(event) {
        console.log(event); //debug
    }
}

class Event extends User {
    constructor(eventName, date, time, description) {
       this.event = eventName,
       this.time = time,
       this.description = description,
       this.date = date,
       this.schedule
    }
    renameEvent() {
        const newEventName = prompt("What is the new event name?");
        this.event = newEventName;
        return;
    }
}

class Schedule extends User {
    constructor() {
        console.log("hello");

    }
}

class Lecture extends Event {
    constructor(professor, professorEmail) {
        //super all of the things from the event class
        super(lectureName, date, time, description);
        this.professor = professor,
        this.professorEmail = professorEmail
    }

}