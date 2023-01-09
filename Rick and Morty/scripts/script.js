


function episodes() {
    return fetch("https://rickandmortyapi.com/api/episode") 
    .then(response => {
        return response.json()
    }).then(document.getElementById("sideBar"))
}
