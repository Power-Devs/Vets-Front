class Vets {

    constructor(lat, lng, name, distance, rating) {

        this.lat = lat;
        this.lng = lng;
        this.rating = rating;
        this.distance = distance;
        this.name = name;

    }

}

async function nearbyVets(endereco) {
    let local = {
        "latitude": endereco.lat(),
        "longitude": endereco.lng(),
        "raio": 8000
    }


    //TODO: Iterar o request criando um array de entidades vets
    vets = await requestHandler(`${vetsApi}/location?lat=${local.latitude}&lng=${local.longitude}&raio=${local.raio}`);

    vetsLocations = [];

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
