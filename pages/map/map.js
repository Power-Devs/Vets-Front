let map;

let userLocationMark;
let userLocation;

let vets;
let vetsLocations = [];

//Inicia o mapa com a lat e long informados
function initMap() {
  //Localização Inicial
  userLocation =  new google.maps.LatLng(-23.6595142,-46.7686503);

  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation,
    zoom: 17,
    disableDefaultUI: true, //remove ui do map
  });

  map.setOptions({ styles: styles });
  
  //marca o local do usuario, que é o mesmo do center
  //TODO: Melhorar precisão do gps
  userLocationMark = new google.maps.Marker({
    position: userLocation,
    map: map,
    icon: UserLocationMarker
  });

}