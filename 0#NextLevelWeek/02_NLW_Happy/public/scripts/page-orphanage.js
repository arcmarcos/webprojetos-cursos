const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Pegar valores de latitude e longitude do html
const latitude = document.querySelector('span[data-latitude]').dataset.latitude
const longitude = document.querySelector('span[data-longitude]').dataset.longitude

// Criar var que recebe mapa
const map = L.map('mapid', options).setView([latitude, longitude], 15);

// Criar o mapa
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);

// Criar o icone de localização
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Mostrar o ícone de acordo com a localização
L.marker([latitude,longitude], {icon}).addTo(map)


// galeria de imagens

function selectImage(event) {
    const button = event.currentTarget

    // remover todas os .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    //Selecionar imagem
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar container
    imageContainer.src = image.src

    // Adicionar .active no clicado
    button.classList.add('active')
}
