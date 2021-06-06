async function findNearbyVets(endereco) {

    let local = {
        "latitude": endereco.lat(),
        "longitude": endereco.lng(),
        "raio": 8000
    }

    vets = await requestHandler(`${vetsApi}/location?lat=${local.latitude}&lng=${local.longitude}&raio=${local.raio}`);

    clearVets();

    for (let vet of vets) {
        const infowindow = new google.maps.InfoWindow();

        let abertoAgora = vet.openingHours != null ? vet.openingHours.openNow ? "Sim": "Não" : "Não sabemos"

        let vetLocation = new google.maps.Marker({
            position: new google.maps.LatLng(vet.geometry.location),
            map: map,
            icon: VetMarker,
            animation: google.maps.Animation.DROP,
        })

        vetLocation.addListener("click", (click) => {
            infowindow.close()

            infowindow.setContent(
            "<div class><strong>" +
                vet.name +`   (${vet.rating})`+
                "</strong><br>" +
                '<p class="infoWindowP">Aberto agora:  ' +
                openNowDisplay(abertoAgora)+  
                `<a href="../clinicaDetalhes/clinicaDetalhes.html?id=${vet.placeId }" class="detailsLink">Detalhes</a>` +
                "</p>" +
                '<p class="infoWindowP">'+vet.vicinity +'</p>'+
                "</div>" 
                
            );

            infowindow.open(map, vetLocation);
        });

        vetsLocations.push(vetLocation);

    }
}

function clearVets(){
    if(vetsLocations.length>0){
        for (let vet of vetsLocations) {
            vet.setMap(null);
        }
        vetsLocations = [];
    }
}

function openNowDisplay(openStatus){

    if(openStatus == "Sim"){
        return `<span class="abertoSim">${openStatus}</span>`
    }
  
    if(openStatus == "Não"){
        return `<span class="abertoNao">${openStatus}</span>`
    }
    
    return `<span>${openStatus}</span>`
  
}