//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
		//enabling stickUp on the '.navbar-wrapper' class
		$('.navbar-wrapper').stickUp();
	  });
    });
    
//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
		$('#bar1').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar2').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar3').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar4').barfiller({ barColor: '#f38181', duration: 3000 });
	  });
    });
    
//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
        $('#counter-block').ready(function(){
            $('.Happy').animationCounter({
                start: 0,
                end: 700,
                step: 2,
                delay:10
            });
            $('.Working').animationCounter({
                start: 0,
                end: 4500,
                step: 10,
                txt: ' +',
                delay:10
            });
            $('.coffee').animationCounter({
                start: 0,
                end: 29600,
                step: 60,
                txt: ' +',
                delay:10
            });
            $('.Reviews').animationCounter({
                start: 0,
                end: 1500,
                step: 3,
                delay:10
            });
        });
	  });
	});


    //initiating jQuery
	jQuery(function($) {
        $(document).ready( function() {
          //enabling stickUp on the '.navbar-wrapper' class
          new WOW().init();
        });
      });







    
