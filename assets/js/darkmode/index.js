import Darkmode, { IS_BROWSER } from './darkmode.js';
export default Darkmode;

/* eslint-disable */
if (IS_BROWSER) {
  (function(window) {
    window.Darkmode = Darkmode;
  })(window);
}
/* eslint-enable */
new Darkmode({
  top: '10px',
  right: '5px',
  time: '0.5s',
  label: '🌞🌚🌓'
}).showWidget();