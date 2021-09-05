console.log('Hello!');

$(document).ready(function () {
  // 漢堡選單
  $(".ham-icon").click(function (e) {
    e.preventDefault();
    $(".nav").toggleClass("active");
  });
});   



let accordions = document.getElementsByClassName("question");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      // document.getElementsByClassName("arrow-up").style.height="100px";
      console.log(document.getElementsByClassName("arrow-down").style.display);
    }
  };
}

