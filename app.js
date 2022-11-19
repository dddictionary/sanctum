const name_button = document.getElementById('name-button');
name_button.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    console.log(name);
    location.href = 'main_page.html';
});

const handleFormSubmission = (id) =>{
    const username = document.getElementById(id);
    console.log(username.value);
    return username.value;
}

const handlenewEvent = () => {
    console.log("hello")
    let container = document.querySelector('.container');
    container.innerHTML = "";
    container.innerHTML = 
    `
        <form action='index.html' method='post'>
            <label for='name'>Name</label>
            <input type='text' id='name'>
            <button type='button' id='name-button'> Submit</button>
        </form>
    `
    const eventName = document.getElementById('event-name');
    const date =  document.getElementById('event-name');
    const time =  document.getElementById('event-name');
    const description = document.getElementById('event-name');
    new_event = new Event(eventName, date, time, description);
}

const event_button = document.querySelector('#event-button');
event_button.addEventListener("click", handlenewEvent())

class Event{
    constructor(eventName, date, time, description) {
       this.eventName = eventName,
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


class User extends Event{
    constructor() {
        const username = handleFormSubmission('name');
        this.username = username;
        console.log(this.username);
        this.schedule = {};
    }
    add(Event) {
        this.schedule[Event.name] = Event;
        console.log(Event); //debug
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




