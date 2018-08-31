		//Wait for intro animation to complete
		$("#bigImg").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
		  $(this).removeClass("animated tada");
		});

		$('#head').on('click',function () {
			 $('#bigImg').addClass("animated tada");
		});

		//On mouse entering image vacinity do the wobble animation
		$("#bigImg").mouseenter(function(event) {
		  $(this).addClass("animated wobble");
		});

		//Wait for the wobble to finish and rest
		$("#bigImg").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
		  $(this).removeClass("animated wobble");
		});

		//Menue  change color mechanics
		$(function() { // change on scroll
		  $(window).scroll(function() {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 97) {
		      $("#nav-menue").addClass('nav-light shadow-sm');
		    } else {
		      $("#nav-menue").removeClass("nav-light shadow-sm");
		    }
		  });
		});

		//refresh position check
		if ($(window).scrollTop() >= 97) {
		  $("#nav-menue").addClass('nav-light shadow-sm');
		} else {
		  $("#nav-menue").removeClass("nav-light shadow-sm");
		}

		//Detect a menue click
		$('a.bouncyScroll').on('click', function(event) {
		  $('html, body').stop().animate({
		    //Move to href location
		    scrollTop: $($(this).attr('href')).offset().top - 50
		  }, 1100, 'easeInOutExpo'); //Using easing plugin
		  event.preventDefault();
		});
