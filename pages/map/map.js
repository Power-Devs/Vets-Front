let map;

var loc = {
  "latitude": -23.659962,
  "longitude": -46.769241,
}

var home = {
  "latitude": -23.693567466093032,
  "longitude": -46.79873552890088,
}

function initMap() {
    var pointA = new google.maps.LatLng(loc.latitude, loc.longitude),
        pointB = new google.maps.LatLng(home.latitude, home.longitude),
        myOptions = {
            zoom: 20,
            center: {
            lat: loc.latitude,
            lng: loc.longitude
            },
        },
        map = new google.maps.Map(document.getElementById('map'), myOptions),
       
        directionsService = new google.maps.DirectionsService(),
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        }),
        svgMarker1 = {
          // colocar svg 
        }
  
        marker1 = new google.maps.Marker({
          position: { lat: home.latitude, lng: home.longitude },
          map: map,
          icon: svgMarker1
        });
  
        svgMarker2 = {
          path:
            "M40 55C51.0457 55 60 46.0457 60 35C60 23.9543 51.0457 15 40 15C28.9543 15 20 23.9543 20 35C20 46.0457 28.9543 55 40 55Z",
          fillColor: "#004D61",
          fillOpacity: 1,
          strokeWeight: 0,
          rotation: 0,
          scale: 2,
          anchor: new google.maps.Point(15, 30),
        };
  
        marker2 = new google.maps.Marker({
          position: { lat: loc.latitude, lng: loc.longitude },
          map: map,
          icon: svgMarker2
        });

    
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        avoidTolls: true,
        avoidHighways: false,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Requisição falhou' + status);
        }
    });
}

initMap();

function get_text_location(){
  const novoValor = "add conversao de lat e long para endereco manuscrito";
  const localizacao = document.getElementById("localizacao");

  localizacao.value = novoValor;
}

