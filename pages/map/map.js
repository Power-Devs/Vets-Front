let map;

let userLocationMark;
let userLocation;

let vets;
let vetsLocations = [];

async function initMap() {
  const defaultLocation = new google.maps.LatLng(-23.550370,-46.633899);
  
  userLocation =  getLocation()
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation,
    zoom: 15,
    disableDefaultUI: true,
  });

  map.setOptions({ styles });
  
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

  return new google.maps.LatLng(-23.550370,-46.633899);
}