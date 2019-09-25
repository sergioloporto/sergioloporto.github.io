// get the element id
element = document.getElementById("myname");

// reset the animation on mouse hover
element.addEventListener("mouseover", function(myname) {
  myname.preventDefault;

  /* this condition enables continuous animation on each mouse hover.
  * if the changed class is already applied it gets replaced by the original one.
  * I could just remove, because it will be removed  by the way in the next line,
  * but since one day I may want to remove the if, for a 1-time hover animation,
  * I prefer to leave this additional line */
  if (element.classList.contains("mynameanimation-changed") === true) {
    element.classList.replace("mynameanimation-changed", "mynameanimation");
  }

// remove the animation with slow delay (good only on page load)
  element.classList.remove("mynameanimation");

 void element.offsetWidth;

  // add the class with no delay (good for mouse )
  element.classList.add("mynameanimation-changed");
}, false);
