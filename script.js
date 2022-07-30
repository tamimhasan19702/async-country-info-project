'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// -----------------------------------------------------------

const renderCountry = (data, className = '') => {
   const lang = Object.entries(data.languages)[0][1];

   const curr = Object.entries(data.currencies)[0][1].name;

     const html = `
     <article class="country ${className}">
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
}

// ======================================================================

// const getCountryAndNeighbour = function(country){

//    // ajax call for the country
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send()

// request.addEventListener('load', function(){    
//     const [data] = JSON.parse(this.responseText);
//     console.log(data)
  
//    // render country  
//      renderCountry(data);


//    //ajax call neighbor country

//    const neighbour = data.borders[0];

//    if(!neighbour) return;

//    const request2 = new XMLHttpRequest();
//    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//    request2.send();
   
//    request2.addEventListener('load' ,function(){
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2)


//    renderCountry(data2, 'neighbour')   
//    })


// })
// }

// getCountryAndNeighbour('india');


const getCountryAndNeighbour = (country) => {
 
   fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
     
      const neighbour = data[0].borders[0]
      
      if(!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0],'neighbour')
   
      const neighbour2 = data[0].borders[1]
      console.log(neighbour2)

      if(!neighbour2) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour2}`)
   })
   .then(response => response.json())
   .then(data => renderCountry(data[0],'neighbour'))
   
}

getCountryAndNeighbour('italy')