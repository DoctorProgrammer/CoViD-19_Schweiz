/**
 * Author: Robin Trachsel
 * version: 1.0
 * date: 2023-11-10
 * 
 * Description: Script for the style of the website
 */

function darkMode() {
    // put lightmode to darkmode
    const light = document.getElementById('light');
    const arrows = document.getElementsByClassName('arrow');

    light.attributes.src.value = './images/moon.png';
    light.style.filter = 'invert(100%)';
    document.documentElement.style.setProperty('--border-color', '#282828');
    document.documentElement.style.setProperty('--color-text', 'white');
    document.documentElement.style.setProperty('--color-link', '#780000');
    document.documentElement.style.setProperty('--color-product', '#');
    document.documentElement.style.setProperty('--color-hover', '#501820');
    document.documentElement.style.setProperty('--background-color', '#181818');
    document.documentElement.style.setProperty('--footer-color', '#282828');

    for(let i = 0; i < arrows.length; i++) {
        arrows[i].style.filter = 'invert(100%)';
    }
    
    document.cookie = 'darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'darkmode=true; 31 Dec 9999 23:59:59 GMT; path=/;';
    console.log(document.cookie);
}

function lightMode() {
    // put darkmode to lightmode
    const light = document.getElementById('light');
    const arrows = document.getElementsByClassName('arrow');

    light.attributes.src.value = './images/sun.png';
    light.style.filter = 'invert(0)';
    document.documentElement.style.setProperty('--border-color', '#ccc');
    document.documentElement.style.setProperty('--color-text', '#08376B');
    document.documentElement.style.setProperty('--color-link', '#780000');
    document.documentElement.style.setProperty('--color-product', '#0075fa18');
    document.documentElement.style.setProperty('--color-hover', '#c1121e16');
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--footer-color', '#fdf0d5');

    for(let i = 0; i < arrows.length; i++) {
        arrows[i].style.filter = 'invert(0)';
    }

    document.cookie = 'darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'darkmode=false; 31 Dec 9999 23:59:59 GMT; path=/;';
    console.log(document.cookie);
}

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const navButtons = document.querySelectorAll('.dropbtn');

    light.addEventListener('click', function() {
        if(light.attributes.src.value == './images/moon.png') {
            lightMode();
        } else {
            darkMode();
        }
    });

    logo.addEventListener('click', function() {
        // go to startpage
        window.location.href = '/';
    });

    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // copy the dropdown-content sibling class, and paste it into the dropdown-content id
            let content = button.nextElementSibling;
            let id = document.getElementById('dropdown-content');

            if(id.innerHTML != content.innerHTML) {
                id.innerHTML = content.innerHTML;
                id.style.height = '250px';
                id.style.margin = '1rem 1rem';
            } else {
                id.innerHTML = '';
                id.style.height = '0px';
                id.style.margin = '0 1rem';
            }
        });
    });

    // check if cookie darkmode is set to true
    if(document.cookie == 'darkmode=true') {
        darkMode();
    };
});