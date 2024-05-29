document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const drawerMenu = document.getElementById('drawerMenu');
    const overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', function() {
        drawerMenu.style.width = '250px';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function() {
        drawerMenu.style.width = '0';
        overlay.style.display = 'none';
    });
});
