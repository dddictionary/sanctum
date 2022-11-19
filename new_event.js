const button = document.getElementById('submit');
    button.addEventListener('click', () => {
        const name = document.getElementsByClassName('name').value;
        const date = document.getElementsByClassName('date').value;
        const time = document.getElementsByClassName('time').value;
        const desc = document.getElementById('desc').value;

        console.log(name);
        console.log(date);
        console.log(time);
        console.log(desc);
});