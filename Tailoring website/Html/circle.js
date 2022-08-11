const button = document.querySelector("#fetch")
let envelope = document.querySelector("#list")

let dataCopy

button.onclick = () => {
    button.innerHTML = "loading..."
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(resp => resp.json())
    .then((data) => {
        button.innerHTML = "fetched. fetch again"
        dataCopy = data.meals.map((item) => ({
            name: item.strMeal,
            category: item.strCategory,
            image: item.strMealThumb,
            videoId: item.strYoutube.split("watch?v=")[1]
        }))
        dataCopy.map((item, index) => {
            let container = document.createElement("div")
            container.classList.add(`country-${index}`)
            container.innerHTML = `   
            <input type="text" value="Name: ${item.name}" />
            <input type="text" value="Category: ${item.category}" />
            <img src="${item.image}" />
            <iframe width="560" height="315" src="//www.youtube.com/embed/${item.videoId}" frameborder="0" allowfullscreen></iframe>
            `;
            envelope.appendChild(container)
        })
    })
}