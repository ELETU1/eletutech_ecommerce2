let menu = document.getElementById("menubar");

let list = document.getElementById("list");

menu.addEventListener("click", () => {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
