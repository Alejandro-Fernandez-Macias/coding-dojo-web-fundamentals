var count = 1;
var countElement = document.querySelector("#likes")

function add1() {
    count++;
    countElement.innerText = count + " Like(s)";
}
