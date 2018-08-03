"use strict";

$(document).ready(function() {
	console.log("main.js connected");
})
$("#resume").click(resumeClick);

function resumeClick(e) {
   console.log("this worked");
   e.preventDefault();
   gtag('create','UA-123326761-1','auto');
   gtag('send','event','button','click');
 }