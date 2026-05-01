(function($) {
    $.fn.scrollEasy = function(options) {
        // Default options
        var settings = $.extend({
            speed: 800,        
            easing: 'swing',   
            offset: 0,         
            complete: null     
        }, options);

        return this.click(function(event) {
            var target = $(this.hash);
            
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                event.preventDefault();
                
                $('html, body').animate({
                    scrollTop: target.offset().top - settings.offset
                }, settings.speed, settings.easing, function() {
                    if ($.isFunction(settings.complete)) {
                        settings.complete.call(this);
                    }
                });
            }
        });
    };
}(jQuery));
