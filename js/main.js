
$(document).ready(function() {
    $('.prod1').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: true
        },
        600: {
        items: 3,
        nav: true
        },
        1000: {
        items: 4,
        nav: true,
        loop: false,
        margin: 8
        }
    }
    })

    $('.mainbanner').owlCarousel({
        loop: true,
        margin: 0,
        dots:true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            loop: false,
            margin: 0
          }
        }
      })
})

$(document).on('click', '.icon', function() {
    $('input[name=stars]').val($(this).data('rate'));
    alert($('input[name=stars]').val());
    var num = 1,iconStar = $(this);
    $('.icon').each(function() {
        if (num <= iconStar.data('rate')) {
            $(this).css('color', '#f5ca35');
        }else{
            $(this).css('color', '#c5c5c5');
        }
        num++;
    });
});

var num = 1,iconStar = $('input[name=stars]').val();
$('.icon').each(function() {
    if (num <= iconStar) {
        $(this).css('color', '#f5ca35');
    }else{
        $(this).css('color', '#c5c5c5');
    }
    num++;
});

/*------------Header Shrink on Scroll-----------*/
$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 100){
      $("header").addClass("shrink");
    }
    else
    {
        $("header").removeClass("shrink");
    }
});

/*------------Main Menu-----------*/
(function($) {
    $.fn.menumaker = function(options) {  
     var cssmenu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);
     return this.each(function() {
       $(this).find(".button").on('click', function(){
         $(this).toggleClass('menu-opened');
         var mainmenu = $(this).next('ul');
         if (mainmenu.hasClass('open')) { 
           mainmenu.slideToggle().removeClass('open');
         }
         else {
           mainmenu.slideToggle().addClass('open');
           if (settings.format === "dropdown") {
             mainmenu.find('ul').show();
           }
         }
       });
       cssmenu.find('li ul').parent().addClass('has-sub');
    multiTg = function() {
         cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
         cssmenu.find('.submenu-button').on('click', function() {
           $(this).toggleClass('submenu-opened');
           if ($(this).siblings('ul').hasClass('open')) {
             $(this).siblings('ul').removeClass('open').slideToggle();
           }
           else {
             $(this).siblings('ul').addClass('open').slideToggle();
           }
         });
       };
       if (settings.format === 'multitoggle') multiTg();
       else cssmenu.addClass('dropdown');
       if (settings.sticky === true) cssmenu.css('position', 'fixed');
    resizeFix = function() {
      var mediasize = 1000;
         if ($( window ).width() > mediasize) {
           cssmenu.find('ul').show();
         }
         if ($(window).width() <= mediasize) {
           cssmenu.find('ul').hide().removeClass('open');
         }
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
     });
      };
    })(jQuery);
    
    (function($){
    $(document).ready(function(){
    $("#cssmenu").menumaker({
       format: "multitoggle"
    });
    });
    })(jQuery);

/*--------------------*/

window.onload = function () {
  $('.wool-paralax').woolParalax();
}

/*------------Seacrh Bar-----------*/
    jQuery('.bg-img').click(function(){
        jQuery('.site-search').addClass('open');
      })
      
      jQuery('.site-search').click(function(){
        jQuery('.site-search').removeClass('open');
      }).children().click(function(e) {
        return false;
      });

/*-----------Banner Start-------------*/

jQuery(document).ready(function($){
	$('#Parallax').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);

			/* Position Each Layer */
			$(this).children('img').each(
				function(){
					var diffX = $('#Parallax').width() - $(this).width();
					var diffY = $('#Parallax').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;


					var myY = diffY * (mouseYPercent / 100);


					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					//$(this).css(cssObj);
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
});
