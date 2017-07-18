document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.home-toolbar .toggle-header')
  var content = toggler.textContent.trim()

  if (content === 'All listing types') {
    toggler.textContent = 'Buy & request'
  }
  
  
  var sellbutton = document.querySelector('a[data-id="79164"] .link-text')
    sellbutton.textContent = 'Sell'
})
