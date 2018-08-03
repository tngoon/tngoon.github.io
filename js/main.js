"use strict";

$(document).ready(function() {
	console.log("main.js connected");
})
$("#resume").click(resumeClick);

function resumeClick(e) {
   e.preventDefault();
   console.log("this worked");
   gtag('create','UA-123326761-1','auto');
   gtag('event', 'click', {
   	'event_category': 'outbound',
   	'event_label': url,
   	'transport_type': 'beacon',
   	'event_callback': function(){document.location=href;}
   });
 }