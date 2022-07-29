'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// -----------------------------------------------------------


const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send()

request.addEventListener('load', function(){    
    const [data] = JSON.parse(this.responseText);
     console.log(data);
     

     const lang = Object.entries(data.languages)[0][1];
     console.log(lang)
     
     const curr = Object.entries(data.currencies)[0][1].name;
     console.log(curr)


     const html = `
     <article class="country">
     <img src="${data.flags.svg}" alt="" class="country-img">
     <div class="country-data">
        <h3 class="country-name">${data.name.common}</h3>
        <h4 class="country-region">${data.region}</h4>
        <p class="country-row"> <span>👫</span>${(+data.population / 1000000).toFixed(3)}M people</p>
        <p class="country-row"> <span>🗣️</span>${lang}</p>
        <p class="country-row"> <span>💰</span>${curr}</p>
     </div>
    </article>
     `

     countriesContainer.insertAdjacentHTML('beforeend', html);
     countriesContainer.style.opacity = 1;
})
}

getCountryData('bangladesh');
getCountryData('india');
getCountryData('nepal');
getCountryData('usa')