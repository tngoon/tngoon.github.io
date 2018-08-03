"use strict";

$(document).ready(function() {
	console.log("main.js connected");
})
$("#resume").click(resumeClick);

function resumeClick(e) {
   console.log("this worked");
   e.preventDefault();
   ga('create','UA-123326761-1','auto');
   ga('send','event','button','click');
 }