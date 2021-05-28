class Vets {

    constructor(lat, lng, name, distance, rating) {

        this.lat = lat;
        this.lng = lng;
        this.rating = rating;
        this.distance = distance;
        this.name = name;

    }

}

async function findNearbyVets(endereco) {
    let local = {
        "latitude": endereco.lat(),
        "longitude": endereco.lng(),
        "raio": 8000
    }

    vets = await requestHandler(`${vetsApi}/location?lat=${local.latitude}&lng=${local.longitude}&raio=${local.raio}`);

    clearVets();

    for (let vet of vets) {

        vetsLocations
            .push(new google.maps.Marker({
                position: new google.maps.LatLng(vet.geometry.location),
                map: map,
                icon: VetMarker
            })
        );
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