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



//Menu not fixed for small screens

function navBarDisappear() {
    const navbar = document.querySelector('.header');
    const media = window.matchMedia(`(max-width: 810px)`);
    if (media.matches) {
        navbar.classList.remove('fixed');
    } else {
        navbar.classList.add('fixed');
    }
}
navBarDisappear();

window.addEventListener("orientationchange", navBarDisappear);

const time = setInterval(function() {
    window.addEventListener("resize", navBarDisappear);
}, 3000);



//Myname animation
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




//Skills
document.addEventListener("DOMContentLoaded", function() {

    var circleProgress = (function(selector) {
        var wrapper = document.querySelectorAll(selector);
        Array.prototype.forEach.call(wrapper, function(wrapper, i) {
            var wrapperWidth,
                wrapperHeight,
                percent,
                innerHTML,
                context,
                lineWidth,
                centerX,
                centerY,
                radius,
                newPercent,
                speed,
                from,
                to,
                duration,
                start,
                strokeStyle,
                text;

            var getValues = function() {
                wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
                wrapperHeight = wrapperWidth;
                percent = wrapper.getAttribute('data-cp-percentage');
                innerHTML = '<span class="percentage"><strong>' + percent + '</strong> %</span><canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
                wrapper.innerHTML = innerHTML;
                text = wrapper.querySelector(".percentage");
                canvas = wrapper.querySelector(".circleProgressCanvas");
                wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
                context = canvas.getContext('2d');
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                newPercent = 0;
                speed = 1;
                from = 0;
                to = percent;
                duration = 1000;
                lineWidth = 25;
                radius = canvas.width / 2 - lineWidth;
                strokeStyle = wrapper.getAttribute('data-cp-color');
                start = new Date().getTime();
            };
            function animate() {
                requestAnimationFrame(animate);
                var time = new Date().getTime() - start;
                if (time <= duration) {
                    var x = easeInOutQuart(time, from, to - from, duration);
                    newPercent = x;
                    // text.innerHTML = Math.round(newPercent) + " %";
                    if (wrapper.classList.contains("html")) {
                        text.innerHTML = '<img class="skill-icon html5" width="40%" height="40%" src="img/skills/html5.svg">';
                    } else if (wrapper.classList.contains("js")) {
                        text.innerHTML = '<img class="skill-icon js" width="35%" height="35%" src="img/skills/javascript.svg">';
                    } else if (wrapper.classList.contains("wordpress")) {
                        text.innerHTML = '<img class="skill-icon js" width="35%" height="35%" src="img/skills/wordpress.svg">';
                    } else if (wrapper.classList.contains("css")) {
                        text.innerHTML = '<img class="skill-icon css" width="40%" height="40%" src="img/skills/css3.svg">';
                    }else if (wrapper.classList.contains("react")) {
                        text.innerHTML = '<img class="skill-icon react" width="70%" height="70%" src="img/skills/react.svg">';
                    } else {
                        text.innerHTML = Math.round(newPercent) + " %";
                    }
                    drawArc();
                }
            }

            function drawArc() {
                var circleStart = 1.5 * Math.PI;
                var circleEnd = circleStart + (newPercent / 50) * Math.PI;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = "#f0f0f0";
                context.stroke();
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = strokeStyle;
                context.stroke();

            }
            var update = function() {
                getValues();
                animate();
            };
            update();



            wrapper.addEventListener("click", function() {
                update();
            });

            var resizeTimer;
            window.addEventListener("resize", function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    clearTimeout(resizeTimer);
                    start = new Date().getTime();
                    update();
                }, 250);
            });
        });

        //
        // http://easings.net/#easeInOutQuart
        //  t: current time
        //  b: beginning value
        //  c: change in value
        //  d: duration
        //
        function easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }

    });

    circleProgress('.counter');

    // Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});

