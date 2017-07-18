document.addEventListener('DOMContentLoaded', function(){ 
  var toggleHeader = document.querySelector(".home-toolbar .toggle-header");
  var text = toggleHeader.textContent.trim()
  if (text === "All listing types") {
  toggleHeader.textContent = "Buy & request";
  }
  console.log(toggleHeader.textContent)
})
