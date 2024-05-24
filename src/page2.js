function saveData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let noOfDays = document.getElementById('noOfDays').value;
    let people = document.getElementById('people').value;
    let roomType = document.getElementById('roomType').value;

    let addonsElements = document.querySelectorAll('input[name="addons"]:checked');
    let addons = [];
    addonsElements.forEach((addon) => {
        addons.push(addon.value);
    });

    // Save data to session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('date', date);
    sessionStorage.setItem('noOfDays', noOfDays);
    sessionStorage.setItem('people', people);
    sessionStorage.setItem('roomType', roomType);
    sessionStorage.setItem('addons', JSON.stringify(addons));
}