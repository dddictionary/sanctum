function handleNewEvent() {
    console.log("hello")
    let container = document.querySelector('.container');
    let event_ids = ["name","date","time","description"];
    let event_data = {};

    for (let i = 0; i < event_ids.length; i++) {
        data = event_ids[i];
        container.innerHTML += 
        `
            <form action='index.html' method='post'>
                <label>Enter event ${data}: </label>
                <input type='text' id='${data}'>
            </form>
        `;
    }
    container.innerHTML += `<button type='button' id='submit-button'> Submit</button>`

    event_ids.forEach(data => {
        const submit_button = document.getElementById(`submit-button`);
        submit_button.addEventListener('click', () => {
            const id = document.getElementById(data).value;
            console.log(id);
        });
    });

    event_ids.forEach(data => {
        
    });
    // console.log(event_data);
    // new_event = new Event(eventName, date, time, description);
}