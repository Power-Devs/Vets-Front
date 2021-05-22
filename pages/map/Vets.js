class Vets{

    constructor(lat,lng,name,distance,rating){

        this.lat = lat;
        this.lng = lng; 
        this.rating = rating;
        this.distance = distance;
        this.name = name;

    }

    
}

function nearbyVets(endereco){
    let local = {
        "latitude": endereco.lat(),
        "longitude": endereco.lng(),
        "raio": 8000
    }

    vets = requestHandlerWithBody("vets-api.herokuapp.com/location",local);
}
