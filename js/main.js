"use strict";

$(document).ready(function() {
	console.log("main.js connected");
})
$("#about").click(resumeClick);

function resumeClick(e) {
   e.preventDefault();
   console.log("this worked");
   gtag('create','UA-123326761-1','auto');
   gtag('send','event','link','click');
   });
 }