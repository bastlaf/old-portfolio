"use strict";

let nom = document.querySelector(".nom");
let titre = document.querySelector(".titre");
let skills = document.querySelector(".skills");
let skills_text = document.querySelector(".skills_text");

// Gestion des parallax

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    let parallaxTitre = value * 0.5 + "px";
    let parallaxSoustitre = value * 0.9 + "px";
    nom.style.transform = `translateX(-${parallaxTitre})`;
    titre.style.transform = `translateX(${parallaxSoustitre})`;
})

// Gestion du curseur
const cursor = document.querySelector('.cursor');

function mouseAnimation(e) {
    cursor.style.top = (e.clientY - 10)+"px";
    cursor.style.left = (e.clientX - 10)+"px";
  }
document.addEventListener('mousemove', mouseAnimation);
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 400)
})

// Gestion de la navigation
let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");
let nav4 = document.querySelector(".nav4");
let nav5 = document.querySelector(".nav5");

nav1.addEventListener('click', () => {
    document.getElementById('section2').scrollIntoView();
})
nav2.addEventListener('click', () => {
    document.getElementById('section3').scrollIntoView();
})
nav3.addEventListener('click', () => {
    document.getElementById('section4').scrollIntoView();
})
nav4.addEventListener('click', () => {
    document.getElementById('section5').scrollIntoView();
})
nav5.addEventListener('click', () => {
    document.getElementById('section6').scrollIntoView();
})






let btnMenu = document.querySelector(".btnMenu");
let headerR = document.querySelector(".header");
let navDiv = document.querySelectorAll(".navDiv");

btnMenu.addEventListener('click', () => {
    headerR.classList.toggle('menuResponsive');
})


navDiv.forEach(i => {
    i.addEventListener('click', () => {
        headerR.classList.remove('menuResponsive');
    })
})

