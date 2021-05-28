const setUserLocation = (endereco) => {

  userLocation =  new google.maps.LatLng(endereco);

  userLocationMark.setPosition(userLocation);
  map.setCenter(userLocation);
  findNearbyVets(userLocation);
}