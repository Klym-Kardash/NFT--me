(function($) {
    var $window = $(window),
        $item = $('.addToMe');

    function resize() {
        if ($window.width() < 1440) {
            return $item.addClass('__container');
        }

        $item.removeClass('__container');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);