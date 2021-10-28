
const ol = document.querySelector( 'ol' );

const keyAPI = '7fc20c25eac20de03136276c08704b5b';
const lat = 46.558860;
const lon = 18.007621;
const cityNumber = 50;

var apiAddress = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cityNumber}&appid=${keyAPI}`;

async function getCities() {
    const response = await fetch( apiAddress );
    const cityList = await response.json();
    console.log( cityList );
    return cityList.list;
}

async function listCities() {
    const cityList = await getCities();
    var citiesText='';

    cityList.forEach( city => {   
        citiesText += `<li data-id=${city.id}>${city.name}<li>`;
    } );
    
    ol.innerHTML = citiesText;
  
}

listCities();