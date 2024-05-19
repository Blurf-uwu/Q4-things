window.addEventListener('DOMContentLoaded', (event) => { // occurs when page has been completely loaded 
    const urlParams = new URLSearchParams(window.location.search);

    let name = urlParams.get('name');
    let email = urlParams.get('email');
    let noOfDays = parseInt(urlParams.get('noOfDays'));
    let people = parseInt(urlParams.get('people'));
    let addons = urlParams.getAll('addons');
    let roomType = urlParams.get('roomType');
    let noOfRooms = 0;
    let totalPrice = 0;

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

    const addonsList = addons.map(addon => `<li>${addon}</li>`).join('');

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
