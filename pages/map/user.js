const setUserLocation = (endereco) => {

    userLocation =  new google.maps.LatLng(endereco);

    userLocationMark.setPosition(userLocation);
    map.setCenter(userLocation);
    //TODO: Implementar marcação dos vets próximos aqui
    nearbyVets(userLocation);
  }