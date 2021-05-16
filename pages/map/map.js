let map;

var loc = {
  "latitude":-23.659962,
  "longitude": -46.769241,
}


//Inicia o mapa com a lat e long informados
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { 
      lat: loc.latitude, 
      lng: loc.longitude 
    },
    zoom: 20,
    //styles: styles carregar depois o json styles
  });
  let mark1 = new google.maps.Marker({
    position: { lat: loc.latitude, lng: loc.longitude },
    map: map
  });

  const svgMarker = {
    path:
      "M40 55C51.0457 55 60 46.0457 60 35C60 23.9543 51.0457 15 40 15C28.9543 15 20 23.9543 20 35C20 46.0457 28.9543 55 40 55Z",
    fillColor: "#004D61",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  let mark2= new google.maps.Marker({
    position: { lat: -23.659702, lng: -46.769021 },
    map: map,
    icon: svgMarker
  });
}

function get_text_location(){
  const novoValor = "add conversao de lat e long para endereco manuscrito";
  const localizacao = document.getElementById("localizacao");

  localizacao.value = novoValor;
}