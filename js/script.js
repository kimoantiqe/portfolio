		//Wait for intro animation to complete
		$("#bigImg").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
			$(this).removeClass("animated tada");
		});

		//On mouse entering image vacinity do the wobble animation
		$("#bigImg").mouseenter(function(event) {
			$(this).addClass("animated wobble");
		});

		//Wait for the wobble to finish and rest
		$("#bigImg").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
			$(this).removeClass("animated wobble");
		});

		$(function() {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= 97) {
					$("#nav-menue").addClass('bg-light shadow-sm');
				} else {
					$("#nav-menue").removeClass("bg-light shadow-sm");
				}
			});
		});

