var $ = require("jquery");
window.$ = $;
window.jQuery = $;
require("jquery");
require("popper.js");
require('./bootstrap');

$(function () {
  $('[data-toggle="popover"]').popover();
})
