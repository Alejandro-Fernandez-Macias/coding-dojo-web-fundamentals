let change = document.querySelector("#profile_name")

function changeName() {
    change.innerText = "Jane Doe"
}

let remove1 = document.querySelector(".todd_row")
let requestCount = document.querySelector("#request_count")
let connections = document.querySelector("#connections")

function removeRequest1() {
    remove1.remove()
    requestCount.innerText--;
    connections.innerText++;
}

let remove2 = document.querySelector(".phil_row")

function removeRequest2() {
    remove2.remove()
    requestCount.innerText--;
    connections.innerText++;
}