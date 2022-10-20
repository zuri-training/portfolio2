let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// for future reference
// window.addEventListener("scroll", appear);

// function appear() {
//   if (document.documentElement.scrollTop > 200) {
//     document.getElementById("button").style = "display: block;";
//   } else {
//     document.getElementById("button").style = "display: none;";
//   }
// }

// function goToTop() {
//   document.documentElement.scrollTop = 0;
// }

// document.getElementById("button").addEventListener("click", goToTop);
