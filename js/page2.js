function calculatePrice() {
    let noOfDays = parseInt(document.getElementById('noOfDays').value);
    let people = parseInt(document.getElementById('people').value);
    let addons = document.getElementById('addons').selectedOptions;
    let totalPrice = noOfDays*1000;

    for (let i = 0; i < addons.length; i++) {
        let addonOption = parseInt(addons[i].value);
        switch(addonOption){
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
}