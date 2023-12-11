/**
 * Author: Robin Trachsel
 * version: 1.0
 * date: 2023-11-10
 * 
 * Description: Script for the style of the website
 */

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');

    const navButtons = document.querySelectorAll('.dropbtn');

    const light = document.getElementById('light');

    const arrows = document.getElementsByClassName('arrow');

    logo.addEventListener('click', function() {
        // go to startpage
        window.location.href = '/';
    });

    light.addEventListener('click', function() {
        if(light.attributes.src.value == './images/moon.png') {
            light.attributes.src.value = './images/sun.png';
            // change variables in css
            /*
            --border-color: #ccc;
            --color-text: #08376B;
            --color-link: #780000;
            --color-product: #0075fa18;
            --color-hover: #c1121e16;
            --background-color: #ffffff;
            --footer-color: #fdf0d5;
            */
            document.documentElement.style.setProperty('--border-color', '#ccc');
            document.documentElement.style.setProperty('--color-text', '#08376B');
            document.documentElement.style.setProperty('--color-link', '#780000');
            document.documentElement.style.setProperty('--color-product', '#0075fa18');
            document.documentElement.style.setProperty('--color-hover', '#c1121e16');
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--footer-color', '#fdf0d5');
        } else {
            light.attributes.src.value = './images/moon.png';
            // change variables in css
            document.documentElement.style.setProperty('--border-color', '#282828');
            document.documentElement.style.setProperty('--color-text', 'white');
            document.documentElement.style.setProperty('--color-link', '#780000');
            document.documentElement.style.setProperty('--color-product', '#');
            document.documentElement.style.setProperty('--color-hover', '#501820');
            document.documentElement.style.setProperty('--background-color', '#181818');
            document.documentElement.style.setProperty('--footer-color', '#282828');
            arrows.forEach(function(arrow) {
                arrow.style.color = 'white';
            });
        }
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
});