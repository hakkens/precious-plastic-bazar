document.addEventListener('DOMContentLoaded', function(){ 
  var toggleHeader = document.querySelector(".home-toolbar .toggle-header");
  console.log(toggleHeader.textContent)
  if (toggleHeader.textContent === "All listing types") {
  toggleHeader.textContent = "Buy & request";
  }
  console.log(toggleHeader.textContent)
})
