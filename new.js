
const ol = document.querySelector( 'ol' );
const weatherCity = document.querySelector( '.weather-city' );

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
        citiesText += `<li data-id="${city.id}">${city.name}</li>`;
    } );
    
    ol.innerHTML = citiesText;
  
}

/**
 * 
 * @param {string} iconName 
 * @returns image element, it should be used appenChild(icon)
 */
async function getIcon(iconName) {
    const iconAddress = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
    const response = await fetch( iconAddress );
    const blob = await response.blob();
    const url = URL.createObjectURL( blob );

    const icon = new Image();
    icon.src = url;

    //weatherCity.appendChild( icon );
    return icon;
}

listCities();
getIcon( '02d' );
