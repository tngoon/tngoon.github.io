'use strict'

$(document).ready(function() {
	console.log("Main.js is connected");
})

$('#about').click(resumeClick);

function resumeClick(e) {
  e.preventDefault();
  gtag('create', 'UA-123326761-1', 'auto');
  gtag('send','event','link','click','resume view');
  console.log("checking if this works");
}