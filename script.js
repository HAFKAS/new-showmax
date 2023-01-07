let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-x");
    } else {
      this.childNodes[1].classList.remove("fa-x");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



let icon = document.getElementById('icon');

icon.onclick = function(){
  document.body.classList.toggle("light-theme")
  if (document.body.classList.contains("light-theme")) {
    // innerTheme.innerHTML = "Dark theme"
    icon.setAttribute('src', 'images/moon.svg')
} else {
  icon.setAttribute('src', "images/icons8-light-mode-78.png");

}
}

