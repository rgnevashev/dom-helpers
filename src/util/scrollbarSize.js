var canUseDOM = require('./inDOM');
var style = require('../style')

var size;

module.exports = function(recalc) {
  if (!size || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');

      style(scrollDiv, {
        position: 'absolute',
        top:      '-9999px',
        width:    '50px',
        height:   '50px',
        overflow: 'scroll'
      });

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size
}