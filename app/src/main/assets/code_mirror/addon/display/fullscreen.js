'use strict';(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],c):c(CodeMirror)})(function(c){c.defineOption("fullScreen",!1,function(d,a,b){b==c.Init&&(b=!1);!b!=!a&&(a?(a=d.getWrapperElement(),d.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:a.style.width,height:a.style.height},a.style.width="",a.style.height="auto",a.className+=" CodeMirror-fullscreen",
document.documentElement.style.overflow="hidden"):(a=d.getWrapperElement(),a.className=a.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow="",b=d.state.fullScreenRestore,a.style.width=b.width,a.style.height=b.height,window.scrollTo(b.scrollLeft,b.scrollTop)),d.refresh())})});