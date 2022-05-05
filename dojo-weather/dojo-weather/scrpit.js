function changeCity() {
    alert("Loading weather report...")
}

let cookies = document.querySelector("#cookie_div")

function acceptCookies() {
    cookies.remove();
}

let changeTodayHigh = document.querySelector("#high_temp1")
let changeTodayLow = document.querySelector("#low_temp1")
let changeTomorrowHigh = document.querySelector("#high_temp2")
let changeTomorrowLow = document.querySelector("#low_temp2")
let changeFridayHigh = document.querySelector("#high_temp3")
let changeFridayLow = document.querySelector("#low_temp3")
let changeSaturdayHigh = document.querySelector("#high_temp4")
let changeSaturdayLow = document.querySelector("#low_temp4")

function changeTemp () {
    changeTodayHigh.innerText = 75;
    changeTodayLow.innerText = 65;
    changeTomorrowHigh.innerText = 80;
    changeTomorrowLow.innerText = 66;
    changeFridayHigh.innerText = 69;
    changeFridayLow.innerText = 61;
    changeSaturdayHigh.innerText = 78;
    changeSaturdayLow.innerText = 70;
}
