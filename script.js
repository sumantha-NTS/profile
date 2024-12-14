const sideMenu = document.querySelector("#sideMenu");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button-1');
    const aideticProjectsHidden = document.getElementById('aidetic-hidden');

    toggleButton.addEventListener('click', () => {
        if (aideticProjectsHidden.classList.contains('hidden')) {
            aideticProjectsHidden.classList.remove('hidden');
            toggleButton.textContent = 'View Less';
        } else {
            aideticProjectsHidden.classList.add('hidden');
            toggleButton.textContent = 'View More';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button-2');
    const wowlabzProjectsHidden = document.getElementById('wowlabz-hidden');

    toggleButton.addEventListener('click', () => {
        if (wowlabzProjectsHidden.classList.contains('hidden')) {
            wowlabzProjectsHidden.classList.remove('hidden');
            toggleButton.textContent = 'View Less';
        } else {
            wowlabzProjectsHidden.classList.add('hidden');
            toggleButton.textContent = 'View More';
        }
    });
});