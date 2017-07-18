document.addEventListener('DOMContentLoaded', function(){ 
  
  let toggleHeader = document.querySelector(".toggle-header");
  if (toggleHeader.textContent == "All listing types") {
toggleHeader.firstChild.nodeValue = "Buy & request"; 
  }
})


