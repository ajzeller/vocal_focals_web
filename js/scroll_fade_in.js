

// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({
						triggerElement: "#trigger"
					})
					.setVelocity(".animate1", {opacity: 0}, {duration: 400}) // trigger a TweenMax.to tween
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);

					// trigger a velocity opaticy animation
					// $("#animate")
					// 	.velocity("slideDown", { duration: 1500 })
    			// 	.velocity("slideUp", { delay: 500, duration: 1500 });
						// .velocity("fadeIn", { duration: 1500 })
						// .velocity("fadeOut", { delay: 500, duration: 1500 })
					// .setVelocity("#animate", {opacity: 100}, {duration: 400})
					// .addIndicators() // add indicators (requires plugin)
					// .addTo(controller);
