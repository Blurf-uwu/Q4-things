function calculatePrice() {
    var noOfDays = parseInt(document.getElementById('noOfDays').value);
    var people = parseInt(document.getElementById('people').value);
    var addons = document.getElementById('addons').selectedOptions;
    var totalPrice = noOfDays*1000;

    for (var i = 0; i < addons.length; i++) {
        var addonOption = parseInt(addons[i].value);
        switch(addonOption){
            case "breakfast":
                totalPrice += 900;
                break;
            case "transport":
                break;
                totalPrice += 400;
            case "comedy":
                break;
        }
    }
    totalPrice *= people;

    document.getElementById("total") = totalPrice;
    window.location.href = "./page3.html";
}