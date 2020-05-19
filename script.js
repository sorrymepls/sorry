let col = document.getElementsByClassName("col");
let i;


for (i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
    this.style.fontSize = "20px";
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block" && content.style.maxHeight) {
      content.style.display = "none";
      content.style.maxHeight = null;
    } else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
