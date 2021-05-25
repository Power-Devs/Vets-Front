async function searchAddress() {
    let userAddress = document.querySelector("#localizacao").value;

    let userLocation = await googleGeolocationService(userAddress);

    setUserLocation(userLocation);
}

async function googleGeolocationService(endereco){

    let apiKey = "AIzaSyCK0_iwIReeTUn6NdEiS26vedXlb_Yk1xA";
    let userEndereco = encodeURI(endereco);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${userEndereco}&key=${apiKey}`;
    let location;
    let result = await requestHandler(url);


    if(result.status === "OK"){
        location = result.results[0].geometry.location;
        return location;
    }else{
        //TODO: Inserir aqui um aviso erro na interface.
        window.alert("request invalida")
    }
}

async function requestHandler( URL_Request ){
    let response = await fetch( URL_Request );
    let data = await response.json();
    return data;
}