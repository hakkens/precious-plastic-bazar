document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.home-toolbar .toggle-header')

  if (toggler) {
    var content = toggler.textContent.trim()

    if (content === 'All listing types') {
      toggler.textContent = 'Buy & request'
    }
  }



  function addRow() {
      var div = document.createElement('div');

      div.className = 'notification';

      div.innerHTML = '<div id="notification">The website isnt online yet, test version. Online soon </div> ';

       document.getElementById('content').appendChild(div);
  }

  function removeRow(input) {
      document.getElementById('content').removeChild( input.parentNode );
  }
