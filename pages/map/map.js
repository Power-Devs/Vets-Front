let map;

let userLocationMark;
let userLocation;

let vets;
let vetsLocations = [];

async function initMap() {
  //TODO: Globalizar defaultLocation
  const defaultLocation = new google.maps.LatLng(-23.6595142,-46.7686503);
  
  //req to show map ->   /map.html?lat=-23.6595142&lng=-46.7686503
  
  userLocation =  getLocation()
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation,
    zoom: 15,
    disableDefaultUI: true,
  });

  map.setOptions({ styles });
  
  //marca o local do usuario, que é o mesmo do center
  //TODO: Melhorar precisão do gps
  userLocationMark = new google.maps.Marker({
    position: userLocation,
    map: map,
    icon: UserLocationMarker
  });

  if(userLocation!=defaultLocation){
    setUserLocation({lat:userLocation.lat(),lng : userLocation.lng()});
  }
}

function getLocation(){
  
  let lat =  getQueryStringValue("lat");
  let lng =  getQueryStringValue("lng");

  if(lat!=null && lng!=null){
    return new google.maps.LatLng(lat,lng);
  }

  return new google.maps.LatLng(-23.6595142,-46.7686503);
}