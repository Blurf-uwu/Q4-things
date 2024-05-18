window.addEventListener('DOMContentLoaded', (event) => { // occurs when page has been completely loaded 
    const urlParams = new URLSearchParams(window.location.search);

    let name = urlParams.get('name');
    let noOfDays = parseInt(urlParams.get('noOfDays'));
    let people = parseInt(urlParams.get('people'));
    let addons = urlParams.getAll('addons');
    let roomType = urlParams.get('roomType');
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

    totalPrice *= people;

    document.getElementById('totalAmount').textContent = totalPrice.toFixed(2);
});