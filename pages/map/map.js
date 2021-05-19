let local =  {
  "latitude":-23.659962,
  "longitude": -46.769241,
}

let map;
let vets = [];

//Inicia o mapa com a lat e long informados
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { 
      lat: local.latitude , 
      lng: local.longitude 
    },
    zoom: 20,
    disableDefaultUI: true, //remove ui do map
  });

  const svgMarker = {
  path:
    "M40 55C51.0457 55 60 46.0457 60 35C60 23.9543 51.0457 15 40 15C28.9543 15 20 23.9543 20 35C20 46.0457 28.9543 55 40 55Z",
  fillColor: "#004D61",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  anchor: new google.maps.Point(15, 30), // Verificar a precisão do marcador
  };

  const myLocationMarker = {
  path:
  "M40 55C51.0457 55 60 46.0457 60 35C60 23.9543 51.0457 15 40 15C28.9543 15 20 23.9543 20 35C20 46.0457 28.9543 55 40 55Z",
  fillColor: "red",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  };

  //marca o loca do usuario, que é o mesmo do center
  let mark1 = new google.maps.Marker({
    position: { 
      lat:local.latitude, 
      lng: local.longitude
    },
    map: map,
    icon: myLocationMarker
  });

  //Exemplo icone marker  de um vet
 
  for (const vet of vets ) {
    new google.maps.Marker({
      position: { 
        lat: vet.lat,
        lng: vet.lng
      },
      map: map,
      icon: svgMarker
    });
  }
}