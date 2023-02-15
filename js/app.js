"use strict";

const ipUrl = 'https://api.ipify.org/?format=json';
const userUrl = 'http://ip-api.com/json/';
const btn = document.querySelector('.btnSearch');
const root = document.querySelector('.root');
btn.addEventListener('click', (e) => {
   async function getIp() {
       const responseIp = await fetch(ipUrl)
       .then((request) => {
           return request.json()
       })
           .then((request) => {
                   fetch(userUrl + request.ip)
                       .then((data) => {
                           return data.json();
                       })
                       .then((data) => {
                           root.insertAdjacentHTML("afterend",
                               `<div class="wrapper">
                                    <p class="page-text">Your IP: ${request.ip}</p>
                                    <p class="page-text">Your city: ${data.city}</p>
                                    <p class="page-text">Your country: ${data.country}</p>
                                </div>`);
                           });
                       });
        };
   getIp();
});