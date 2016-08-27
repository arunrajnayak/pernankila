/*! 2016-08-27 */jQuery(function($) {'use strict';

    // Navigation Scroll
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        $('.navbar-collapse.navbar-right.collapse').removeClass('in');
        return false;
    });

    // User define function
    function Scroll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;
        $('.navbar-collapse').find('.scroll a').each(function(){
            contentTop.push( $( $(this).attr('href') ).offset().top);
            contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
        })
        $.each( contentTop, function(i){
            if ( winTop > contentTop[i] - rangeTop ){
                $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');          
            }
        })
    };

    $('#tohash').on('click', function(){
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        return false;
    });

    // accordian
    $('.accordion-toggle').on('click', function(){
        $(this).closest('.panel-group').children().each(function(){
        $(this).find('>.panel-heading').removeClass('active');
         });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //WOW JS
    new WOW().init();
    smoothScroll.init();
    $(window).load(function(){'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector : '.portfolio-item',
            layoutMode : 'fitRows'
        });
        
        $portfolio_selectors.on('click', function(){
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    });


    $(document).ready(function() {
        //Animated Progress
        $('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).css('width', $(this).data('width') + '%');
                $(this).unbind('inview');
            }
        });

        //Animated Number
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({value: start}).animate({value: stop}, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                        }
                    }
                });
            });
        };

        $('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
                $this.unbind('inview');
            }
        });
    });


    //Google Map
    
    /*To fix full width*/
    var map=$('#map iframe');
    var screenWidth=$(document).width();
    map.attr({
        'width' : screenWidth
    });

    /* To solve zoom when scroll issue*/
    $(document).ready(function(){

        var scrollOff=function(){
            $('#embedMap').addClass('scrolloff');
        }
        var scrollOn=function(){
            $('#embedMap').removeClass('scrolloff');
        } 

        scrollOff();     

        $('#overlay')
            .on("mouseup",scrollOff)
            .on("mouseleave",scrollOff)
            .on("mousedown",scrollOn)
            .on("touchstart",scrollOn)
        });


        /*Gallery*/
        $(document).ready(function() {
          $('.gallery-carousel').slick({
                autoplay: true,
                autoplaySpeed: 2500,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                easing: 'ease-in-out',
                lazyLoad: 'ondemand',
                swipeToSlide: true,
                nextArrow: '<img class="slick-next" src="media/next.png">',
                prevArrow: '<img class="slick-prev" src="media/prev.png">',
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        centerMode:false
                      }
                    }]
          });

          $('.gallery-carousel .item').hover(function() {
               $(this).find('.gallery-desc').stop(true,true).animate({opacity: 0.9},300);
          }, function() {
               $(this).find('.gallery-desc').stop(true,true).animate({opacity: 0.4},150);
          });
     
      });
});