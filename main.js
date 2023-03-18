const img = document.querySelector('img');
const button = document.querySelector('button');

const API = "https://api.thecatapi.com/v1/images/search";

button.addEventListener('click', changeImage);

getImage(API);

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function getImage(urlApi){
    const image = await fetchData(urlApi);
    img.src = image[0].url;
}

function changeImage(){
    getImage(API);
}

/*
fetch(API)
    .then(response => response.json())
    .then(data => {
        img.src = data[0].url;
    })
*/