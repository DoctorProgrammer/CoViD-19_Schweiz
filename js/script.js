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
    const dropdownContent = document.querySelectorAll('.dropdown-content');

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
                id.style.height = '200px';
                id.style.margin = '1rem 1rem';
            } else {
                id.innerHTML = '';
                id.style.height = '0px';
                id.style.margin = '0 1rem';
            }
        });
    });
});