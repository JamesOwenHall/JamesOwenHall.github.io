function NavMenu(toggleElement, expandableElement) {
    var timeout;

    toggleElement.addEventListener('mouseenter', function(e) {
        mouseEnter();
    });

    for (var i = 0; i < expandableElement.children.length; i++) {
        var menuItem = expandableElement.children.item(i);

        menuItem.addEventListener('mouseenter', function(e) {
            mouseEnter();
        });
        menuItem.addEventListener('mouseleave', function(e) {
            mouseLeave();
        });
    }

    toggleElement.addEventListener('mouseleave', function(e) {
        mouseLeave();
    });

    function mouseEnter() {
        clearTimeout(timeout);

        expandableElement.style.left = toggleElement.offsetLeft + 'px';
        expandableElement.style.top = (toggleElement.offsetTop + toggleElement.clientHeight) + 'px';

        expandableElement.hidden = false;
    }

    function mouseLeave() {
        timeout = setTimeout(hide, 50);
    }

    function hide() {
        expandableElement.hidden = true;
    }
}
