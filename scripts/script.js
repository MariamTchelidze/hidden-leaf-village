document.getElementById("toggle-a").addEventListener("click", function () {
  document.body.classList.add("burger-menu-show");

  const burgerMenu = document.getElementsByClassName("show-on-mobile");
  for (let el of burgerMenu) {
    el.style.display = "flex";
  }
  const hide = document.getElementsByClassName("opening");
  for (let hidden of hide) {
    hidden.style.display = "none";
  }
  const show = document.getElementsByClassName("closing");
  for (let showing of show) {
    showing.style.display = "block";
  }
});

document.getElementById("closing-a").addEventListener("click", function () {
  document.body.classList.remove("burger-menu-show");

  const hideMenu = document.getElementsByClassName("show-on-mobile");
  for (let hideoneclose of hideMenu) {
    hideoneclose.style.display = "none";
  }

  const closingbtn = document.getElementsByClassName("closing");
  for (let hidexbtn of closingbtn) {
    hidexbtn.style.display = "none";
  }
  const opening = document.getElementsByClassName("opening");

  for (let displayburger of opening) {
    displayburger.style.display = "block";
  }
});
