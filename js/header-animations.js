// NAVBAR
(function(d) {
    var
        mainMenu = d.getElementById('mainMenu'),
        items = mainMenu.getElementsByTagName('li'),
        current = mainMenu.getElementsByClassName('header__main-nav-menu--current')[0],
        lastElement = current,
        /* generate our highlight as DOM element */
        highlight = d.createElement('span');

    /* set our highlight position */
        function setHighlight(element) {
        highlight.style.top = element.offsetTop + 'px';
        highlight.style.left = element.offsetLeft + 'px';
        highlight.style.width = element.firstElementChild.clientWidth + 'px';
        highlight.style.height = element.firstElementChild.clientHeight + 'px';
        lastElement.classList.remove('over');
        lastElement = element;
        element.classList.add('over');
        //

    }



    /* set initial position BEFORE attaching to DOM */
    setTimeout(() => {
        setHighlight(current);
    }, 500);


    /* attach it to the DOM before our menu LI */
    mainMenu.insertBefore(highlight, mainMenu.firstChild);

    /* our over/out events */
    function overLI(event) {
        setHighlight(event.currentTarget);
    }

    function outLI(event) {
        setHighlight(current);
    }

    /* now to add the events to all our LI */
    for (var i = 0, li; li = items[i]; i++) {
        li.addEventListener('mouseover', overLI, false);
        li.addEventListener('mouseout', outLI, false);
    }

    /* readjust it if the window is resized! */
    window.addEventListener('resize', function(e) {
        setHighlight(lastElement);
    }, false);

})(document);
// END NAVBAR


// get the element id
nameelement = document.getElementById("myname");

// reset the animation on mouse hover
nameelement.addEventListener("mouseover", function(myname) {
  myname.preventDefault;

  /* this condition enables continuous animation on each mouse hover.
  * if the changed class is already applied it gets replaced by the original one.
  * I could just remove, because it will be removed  by the way in the next line,
  * but since one day I may want to remove the if, for a 1-time hover animation,
  * I prefer to leave this additional line */
  if (nameelement.classList.contains("mynameanimation-changed") === true) {
      nameelement.classList.replace("mynameanimation-changed", "mynameanimation");
  }

// remove the animation with slow delay (good only on page load)
    nameelement.classList.remove("mynameanimation");

 void nameelement.offsetWidth;

  // add the class with no delay (good for mouse )
    nameelement.classList.add("mynameanimation-changed");
}, false);




//Navbar border
$(function() {
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("headershadow");
        } else {
            header.removeClass("headershadow");
        }
    });
});





