const acc = document.getElementsByClassName("my-projects-buttons");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling.nextElementSibling;
        if (panel.classList.contains("panelhover") === true) {
            panel.classList.replace("panelhover", "panel");
        } else {
             // panel.style.display = "block";
             panel.classList.add("panelhover");
        }
    })
}


//jQuery
// Change the plus/minus fontawesome icons on the projects
$("button.my-projects-buttons").click(ontop);
function ontop() {
    $(this).find("i.projectplus").toggleClass("icon-plus icon-minus");
}




// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }
