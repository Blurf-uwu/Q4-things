window.addEventListener('DOMContentLoaded', (event) => { // occurs when page has been completely loaded 
    const urlParams = new URLSearchParams(window.location.search);

    let name = urlParams.get('name');
    let email = urlParams.get('email');
    let noOfDays = parseInt(urlParams.get('noOfDays'));
    let people = parseInt(urlParams.get('people'));
    let addons = urlParams.getAll('addons');
    let roomType = urlParams.get('roomType');
    let noOfRooms = 0;
    let totalPrice = noOfDays * 1000;

    for (let i = 0; i < addons.length; i++) {
        switch (addons[i]) {
            case "breakfast":
                totalPrice += 900;
                break;
            case "transport":
                totalPrice += 400;
                break;
            case "comedy":
                totalPrice += 500;
                break;
            case "massage":
                totalPrice += 1200;
                break;
        }
    }

    switch (roomType) {
        case "single":
            totalPrice += 900;
            noOfRooms = people;
            break;
        case "double":
            totalPrice += 400;
            noOfRooms = Math.ceil(people / 2);
            break;
        case "king":
            totalPrice += 400;
            noOfRooms = Math.ceil(people / 3);
            break;
        case "quad":
            totalPrice += 500;
            noOfRooms = Math.ceil(people / 4);
            break;
        case "luxury":
            totalPrice += 1200;
            noOfRooms = Math.ceil(people / 5);
            break;
        case "penthouse":
            totalPrice += 1200;
            noOfRooms = Math.ceil(people / 10);
            break;
    }

    totalPrice *= noOfRooms;

    const addonsList = addons.map(addon => `<li>${addon}</li>`).join('');

    document.getElementById('ticket').innerHTML = `
        <h1>Booking Summary</h1>
        <p>Hello <strong>${name}</strong>! please check your email <strong>${email}</strong> to confirm that you're booked!</p>
        <p><strong>Number of Days:</strong> ${noOfDays}</p>
        <p><strong>Number of People:</strong> ${people}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>
        <p><strong>Number of Rooms:</strong> ${noOfRooms}</p>
        <p><strong>Add-ons:</strong></p>
        <ul>${addonsList}</ul>
        <p><strong>Total Price:</strong> ${totalPrice}Php</p>
    `;
});
