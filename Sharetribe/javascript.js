document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.home-toolbar .toggle-header')

  if (toggler) {
    var content = toggler.textContent.trim()

    if (content === 'All listing types') {
      toggler.textContent = 'Buy & request'
    }
  }
