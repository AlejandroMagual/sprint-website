var menuFigure = document.getElementById('menu');   // Hamburger menu <img> element
var menuContent = document.getElementById('menu-content');   // Menu content <div> element
var menuX = document.getElementById('X-menu');   // Menu X <p> element

/*  Events that open Menu */
menuFigure.addEventListener('click',function(e) {
    e.stopPropagation();
    menuContent.style.display = 'block';
});

/*  Events that close Menu */
menuContent.addEventListener('click',function(e) {   // click on menu content shall do nothing
    e.stopPropagation();
});

menuX.addEventListener('click',function() {
    /*e.stopPropagation();*/
    menuContent.style.display = 'none';
});
document.addEventListener('click',function() {
    menuContent.style.display = 'none';
});
