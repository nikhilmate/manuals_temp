var trigger = document.querySelectorAll("a.cta-trigger");

for (var i = 0; i < trigger.length; i++) {
  var element = trigger[i];
  element.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e.target.getAttribute("data-value"));
  });
}


var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if (isFirefox) {
  var removed = document.querySelector(".chrome-desclaimer");
  removed.style.display = "none";
  removed.style.height = "0";
  var footer = document.querySelector(".footer");
  footer.style.paddingTop = "10px";
}