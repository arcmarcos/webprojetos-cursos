// Criar var que recebe mapa
const map = L.map('mapid').setView([-22.9026927,-43.3043838], 14);

// Criar o mapa
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);


// Criar o ícone de localização
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker; //Declarar var que add o marcador

// Função p/ criar e adicionar marcador no mapa
map.on('click', (event) => {
    const latitude = event.latlng.lat; // Pega a latitude
    const longitude = event.latlng.lng; //Pega a longitude

    document.querySelector('[name=latitude]').value = latitude;
    document.querySelector('[name=longitude]').value = longitude;

// Remover ícone
    marker && map.removeLayer(marker);

// Adicionar marcador no mapa
    marker = L.marker([latitude, longitude], {icon}).addTo(map);
})


// Upar fotos
function addPhotoField() {
    // Pegar o container #images
    const container = document.querySelector('#images')

    // Pegar o container p/ duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //Clonar
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // Se o campo tiver vazio, nao adiciona
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }

    // Limpar o campo antes de adicionar outro
    input.value = ""

    //Adicionar clone ao container #images
    container.appendChild(newFieldContainer)
}


// Tratar o campo de upload
function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = "" //Limpa o campo
        return //Deleta a partir do segundo campo
    }

//Deletar o campo
    span.parentNode.remove()
}


// Botoes "Sim" e "Não"
function toggleSelect(event) {
// Retirar classe .active
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

// Colocar classe .active
    const button = event.currentTarget
    button.classList.add('active')

// Atualizar input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
