document.querySelector('.touch').addEventListener('click', function (e){
    e.target.parentNode.children[0].innerHTML = 'To'
    e.target.parentNode.children[0].style.color = 'white'
 e.target.parentNode.style.backgroundColor = 'purple'
 if(e.target.parentNode.children[0].innerHTML == 'To'){
    document.querySelector('.touch').addEventListener('click', function (e){
        e.target.parentNode.children[0].innerHTML = 'Nkiru-world'
        e.target.parentNode.children[0].style.color = 'white'
        e.target.parentNode.children[0].style. fontSize = "40px"
        e.target.parentNode.style.backgroundColor = 'black'
    })
} else if(e.target.parentNode.children[0].innerHTML == 'Nkiru-world'){
    document.querySelector('.touch').addEventListener('click', function (e){
        e.target.parentNode.children[0].innerHTML = 'Where'
        e.target.parentNode.style.backgroundColor = 'pink'
        e.target.parentNode.children[0].style.color = 'black'
      
    })
 }
});


