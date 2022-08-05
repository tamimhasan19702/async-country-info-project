'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// // -----------------------------------------------------------

// const renderCountry = (data, className = '') => {
//    const lang = Object.entries(data.languages)[0][1];

//    const curr = Object.entries(data.currencies)[0][1].name;

//      const html = `
//      <article class="country ${className}">
//      <img src="${data.flags.svg}" alt="" class="country-img">
//      <div class="country-data">
//         <h3 class="country-name">${data.name.common}</h3>
//         <h4 class="country-region">${data.region}</h4>
//         <p class="country-row"> <span>👫</span>${(+data.population / 1000000).toFixed(3)}M people</p>
//         <p class="country-row"> <span>🗣️</span>${lang}</p>
//         <p class="country-row"> <span>💰</span>${curr}</p>
//      </div>
//     </article>
//      `

//      countriesContainer.insertAdjacentHTML('beforeend', html);
//      countriesContainer.style.opacity = 1;
// }


// const renderError = (msg => {
//    countriesContainer.insertAdjacentText('beforeend',msg);
//    countriesContainer.style.opacity = 1;
// })

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


// const getCountryAndNeighbour = (country) => {
 
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
     
//       const neighbour = data[0].borders[0]
      
//       if(!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0],'neighbour'))
//     .catch(err => {
//       console.log(`${err}`);
//       renderError(`Something went wrong , ${err.message}`)
//     })
//     .finally(() => {
//        countriesContainer.style.opacity = 1;
//     })
   
// };


// // ==================================================

// btn.addEventListener('click', () => {
// getCountryAndNeighbour('bangladesh');
// })


// ======================================================

// const whereAmI = function(lat,lng){
//    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//       if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//    })
//    .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.country}`)

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//    })
//    .then(res => {
//       if(!res.ok) throw new Error(`Country is not found ${res.status}`);
//       return res.json();
//    })
//    .then(data => renderCountry(data[0]))
//    .catch(err => console.error(`${err.message}`))
// }

// whereAmI(52.508,13.381)
// whereAmI(19.037,72.873)


// ========================================

// const getPosition = function(){
//    return new Promise(function(resolve,reject){
//      navigator.geolocation.getCurrentPosition(resolve,reject)
//    })
// }                                         

// const whereIamNow = function(){
//      getPosition().then(pos => {
//       const {latitude: lat, longitude: lng} = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//      })
//      .then(res => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//      })
//      .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city}, ${data.country}`)

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//      })
//      .then(res => {
//       if(!res.ok) throw new Error(`Country is not found ${res.status}`);
//       return res.json();
//      })
//      .then(data => renderCountry(data[0]))
//      .catch(err => console.error(`${err.message}`))
// }


// btn.addEventListener('click', whereIamNow)

// const wait = function(seconds){
//    return new Promise(function(resolve){
//       setTimeout(resolve,seconds * 1000);
//    })
// }


// const imageContainer = document.querySelector('.images');


// const createImage = function(imgPath){
//    return new Promise(function(resolve,reject){
//       const img = document.createElement('img');
//       img.src = imgPath;

//       img.addEventListener('load',function(){
//          imageContainer.append(img);
//          resolve(img)
//       })
//       img.addEventListener('error',function(){
//          reject(new Error('images not found'))
//       })
//    })
// }

// let currentImage

// createImage('./img/img-1.jpg').then(img => {
//    console.log('image 1 loaded')
//    currentImage = img
//    return wait(2)
// })
// .then(()=> {
// currentImage.style.display = 'none';
// return createImage('./img/img-2.jpg');
// })
// .then(img => {
//    console.log('image 2 loaded')
//    currentImage = img;
//    return wait(2)
// })
// .then(()=> {
// currentImage.style.display = 'none';
// return createImage('./img/img-3.jpg');
// })
// .then(img => {
//  console.log('image 3 loaded')
//  currentImage = img;
//  return wait(2);
// })
// .then(() => {
//    currentImage.style.display = 'none';
// })
// .catch(err => console.error(err));


//========================================================




// const whereAmI = async function(){
//    const pos = await getPosition();
//    const {latitude: lat , longitude:lng} = pos.coords;

//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    const dataGeo = await resGeo.json();
//    console.log(dataGeo);

//    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//    const data = await res.json();
//    console.log(data);
//    renderCountry(data[0])
// };
// whereAmI();


// coding challange -2

const wait = function(seconds){
   return new Promise(function(resolve){
      setTimeout(resolve,seconds * 1000);
   });
};

const imageContainer = document.querySelector('.images');

const createImage = function(imgPath){
   return new Promise(function(resolve,reject){
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load',function(){
         imageContainer.append(img);
         resolve(img);
      });

      img.addEventListener('error',function(){
         reject(new Error('Image is not found'));
      });
   });
};


// let currentImage;

// createImage('./img/img-1.jpg')
// .then(img => {
//    currentImage = img;
//    console.log('Image 1 loaded');
//    return wait(2);
// })
// .then(() => {
//    currentImage.style.display = 'none';
//    return createImage('./img/img-2.jpg')
// })
// .then(img => {
//    currentImage = img;
//    console.log('image 2 loaded');
//    return wait(2);
// })
// .then(() => {
//    currentImage.style.display = 'none';
// })
// .catch(err => console.log(err));


// with async await function

// part-1

const loadNPause = async function(){
   try{
   let img = await createImage('img/img-1.jpg');
   console.log('image 1 loaded');
   await wait(2);
   img.style.display = 'none';

   img = await createImage('./img/img-2.jpg');
   console.log('image 2 loaded');
   await wait(2);
   img.style.display = 'none';

   img = await createImage('./img/img-3.jpg');
   console.log('image 3 loaded');
   await wait(2);
   img.style.display = 'none';

   }catch(err){
     console.log(err) 
   }
}

// loadNPause()


// part-2

const loadAll = async function(imgArr){
   try{
   const imgs = imgArr.map(async img => await createImage(img));
   console.log(imgs);

   const imgEl = await Promise.all(imgs);
   console.log(imgEl);

   imgEl.forEach(img => img.classList.add('parallel'))

   }catch(err){
      console.log(err);
   }
};

loadAll(['./img/img-1.jpg','/img/img-2.jpg','/img/img-3.jpg']);










