const setUserLocation = (endereco) => {

  userLocation =  new google.maps.LatLng(endereco);

  localStorage.setItem("lat",userLocation.lat())
  localStorage.setItem("lng",userLocation.lng())

  userLocationMark.setPosition(userLocation);
  map.setCenter(userLocation);
  findNearbyVets(userLocation);


}