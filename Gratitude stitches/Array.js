let data = [
    {
        text: "Welcome"
    },
    {
        text: "To"
    },
    {   
        text: "Nkiru-world"
    },
    {
        text: "Where"
    },
    {
        text: "We"
    },
    {
        text: "Explore"
    },
    {
        text: "The"
    },
    {
        text: "Fun"
    },
    {
        text: "Of"
    },
    {
        text: "Creativity"
    },
    {
        text: "And Lots More!!!"
    },
]

let button = document.getElementById('touch')
let loop = 0

button.addEventListener('click', function(e){
   
   if(loop < data.length)(e.target.parentNode.children[0].innerHTML = data[loop].text);
   loop++
})