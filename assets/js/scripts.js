/*
Template Name: Material Design Coming Soon Template
Created By: TrendyTheme
Envato Profile: https://themeforest.net/user/trendytheme
Website: http://trendytheme.net
Version: 1.0
Support: http://trendytheme.net/support
*/

;(function () {

    "use strict"; // use strict to start

    $(document).ready(function () {


        /* === Preloader === */
        $("#preloader").delay(200).fadeOut("slow");


        /* === Page scrolling feature - requires jQuery Easing plugin === */

        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        

        /* === Full Screen Banner === */
        $(window).on('resizeEnd', function () {
            $(".fullscreen-banner").height($(window).height());
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 300);
        }).trigger("resize");



        /* === Detect IE version === */
        (function () {
            
            function getIEVersion() {
                var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
                return match ? parseInt(match[1], 10) : false;
            }

            if( getIEVersion() ){
                $('html').addClass('ie'+getIEVersion());
            }

        }());


        /* === CountDown === */
        if ($('.countdown').length > 0) {
            $(".countdown").countdown({
                date: "31 december 2017 12:00:00",
                format: "on"
            });
        }


        /* === Progress Bar === */
        $('.progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).off('inview');
            }
        });


        /* ======= Contact Form ======= */
        $('#contactForm').on('submit',function(e){

            e.preventDefault();

            var $action = $(this).prop('action');
            var $data = $(this).serialize();
            var $this = $(this);

            $this.prevAll('.alert').remove();

            $.post( $action, $data, function( data ) {

                if( data.response=='error' ){

                    $this.before( '<div class="alert danger-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times-circle"></i> '+data.message+'</div>' );
                }

                if( data.response=='success' ){

                    $this.before( '<div class="alert success-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-thumbs-o-up"></i> '+data.message+'</div>' );
                    $this.find('input, textarea').val('');
                }

            }, "json");

        });


        /* ======= Stellar for background scrolling ======= */
        if ($('.parallax-bg').length > 0) {
            $('.parallax-bg').imagesLoaded( function() {

            	$(window).stellar({
                    horizontalScrolling: false,
                    verticalOffset: 0,
                    horizontalOffset: 0,
                    responsive: true,
                    hideDistantElements: true
                });
            });
        }

    });


})(jQuery);

