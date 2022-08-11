const termsBox = document.getElementById("terms");
const rentBtn = document.getElementById("rent");
const close = document.getElementById("close")
let check = document.querySelector('check')


function OpenModel() {
    termsBox.classList.add("show");
    rentBtn.classList.add("hide")
}

function closeModel() {
    termsBox.classList.remove("show");
    rentBtn.classList.remove("hide")
}



// $('form input[type=checkbox]').change(function() { console.log('hello') });