$(document).ready(function(){

// init controller
	// var controller = new ScrollMagic.Controller();

	// build scene
	// var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
					// trigger a velocity opaticy animation
					// $("#animate")
					// 	.velocity("slideDown", { duration: 1500 })
    			// 	.velocity("slideUp", { delay: 500, duration: 1500 });
						// .velocity("fadeIn", { duration: 1500 })
						// .velocity("fadeOut", { delay: 500, duration: 1500 })
					// .setVelocity("#animate", {opacity: 100}, {duration: 400})
					// .addIndicators() // add indicators (requires plugin)
					// .addTo(controller);

var theme_bg_color = "#0074D9";
var fade_bg_color = "#4AABFF";

function bg_fade(){
	$(".container--gradient-bg").velocity({
		/* Animate a color property to a hex value of red... */
		backgroundColor: theme_bg_color,
		/* ... with a 50% opacity. */
		backgroundColorAlpha: 1,
		/* Animate the red RGB component to 50% (0.5 * 255). */
		// colorRed: "50%",
		// /* Concurrently animate to a stronger blue. */
		// colorBlue: "+=50",
		// /* Fade the text down to 85% opacity. */
		// colorAlpha: 0.8
	}, 5000 );

	$(".container--gradient-bg").velocity({
		/* Animate a color property to a hex value of red... */
		backgroundColor: fade_bg_color,
		/* ... with a 50% opacity. */
		backgroundColorAlpha: 1,
		/* Animate the red RGB component to 50% (0.5 * 255). */
		// colorRed: "50%",
		// /* Concurrently animate to a stronger blue. */
		// colorBlue: "+=50",
		// /* Fade the text down to 85% opacity. */
		// colorAlpha: 0.8
	}, 5000 );

	$(".container--gradient-bg").velocity({
		/* Animate a color property to a hex value of red... */
		backgroundColor: theme_bg_color,
		/* ... with a 50% opacity. */
		backgroundColorAlpha: 1,
		/* Animate the red RGB component to 50% (0.5 * 255). */
		// colorRed: "50%",
		// /* Concurrently animate to a stronger blue. */
		// colorBlue: "+=50",
		// /* Fade the text down to 85% opacity. */
		// colorAlpha: 0.8
}, 5000 );
}

setInterval(bg_fade, 500);

});
