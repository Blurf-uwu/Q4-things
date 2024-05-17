window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);

    let noOfDays = parseInt(urlParams.get('noOfDays'));
    let people = parseInt(urlParams.get('people'));
    let addons = urlParams.getAll('addons');
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

    totalPrice *= people;

    document.getElementById('totalAmount').textContent = totalPrice.toFixed(2);
});