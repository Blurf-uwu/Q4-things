window.addEventListener('DOMContentLoaded', (event) => { // occurs when page has been completely loaded 

    let name = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    let date = sessionStorage.getItem('date');
    let noOfDays = parseInt(sessionStorage.getItem('noOfDays'));
    let people = parseInt(sessionStorage.getItem('people'));
    let roomType = sessionStorage.getItem('roomType');
    let addons = JSON.parse(sessionStorage.getItem('addons'));
    let totalPrice = 0;
    let noOfRooms = 0;

    switch (roomType) {
        case "single":
            totalPrice += 500;
            noOfRooms = people;
            break;
        case "double":
            totalPrice += 900;
            noOfRooms = Math.ceil(people / 2);
            break;
        case "king":
            totalPrice += 1400;
            noOfRooms = Math.ceil(people / 3);
            break;
        case "quad":
            totalPrice += 3000;
            noOfRooms = Math.ceil(people / 4);
            break;
        case "luxury":
            totalPrice += 5000;
            noOfRooms = Math.ceil(people / 5);
            break;
        case "penthouse":
            totalPrice += 10000;
            noOfRooms = Math.ceil(people / 10);
            break;
    }

    totalPrice *= noOfRooms * noOfDays;

    for (let i = 0; i < addons.length; i++) {
        switch (addons[i]) {
            case "breakfast":
                totalPrice += 900*people;
                break;
            case "transport":
                totalPrice += 400*people;
                break;
            case "comedy":
                totalPrice += 500*people;
                break;
            case "massage":
                totalPrice += 1200*people;
                break;
        }
    }

    let addonsList = '';
        for (let i = 0; i < addons.length; i++) {
            addonsList += `<li>${addons[i]}</li>`;
        }

    document.getElementById('ticket').innerHTML = `
        <h1>Booking Summary</h1>
        <p>Hello <span>${name}</span>! please check your email <span>${email}</span> to confirm that you're booked!</p>
        <p><span>Number of Days:</span> ${noOfDays}</p>
        <p><span>Number of People:</span> ${people}</p>
        <p><span>Room Type:</span> ${roomType}</p>
        <p><span>Number of Rooms:</span> ${noOfRooms}</p>
        <p><span>Add-ons:</span></p>
        <ul>${addonsList}</ul>
        <p><span>Total Price:</span> ${totalPrice}Php</p>
    `;
});
