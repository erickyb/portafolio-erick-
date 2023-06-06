window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.pageYOffset > 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  //toggle  menu/navbar

  // document.querySelector('.menu-btn').addEventListener('click', function () {
  //   document.querySelector('.navbar .menu').classList.toggle('active');
  // });



}




);





