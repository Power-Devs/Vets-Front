//Utilizar esse primeiro em caso de ambiente local
//const vetsApi = "http://127.0.0.1:8080"

// Descomentar a linha abaixo e comentar a linha acima para usar o endereço de prod
const vetsApi = "https://vets-api.herokuapp.com";

const apiKey = "AIzaSyCK0_iwIReeTUn6NdEiS26vedXlb_Yk1xA";

const googleGeocodeApiRequest = (userEndereco) => `https://maps.googleapis.com/maps/api/geocode/json?address=${userEndereco}&key=${apiKey}`;