;(function($) {
  $.fn.showsize = function(options) {
    // this(3つのimg)
    let elements = this; // 分かりやすいように名付け

    elements.each(function(idx, element) {
      // this (1つのimg)
      $(element).click(function() {
        let msg = $(this).width() + ' x ' + $(this).height();
        let opts = $.extend({}, $.fn.showsize.defaults, options, $(this).data());
        $(this).wrap('<div style="position: relative;"></div>');
        let div = $("<div>")
          .text(msg)
          .css('position', 'absolute')
          .css('top', '0')
          .css('background', 'black')
          .css('color', getRandomColor())
          .css('font-size', opts.size + 'px')
          .css('opacity', opts.opacity)
          .css('padding', '2px')
        $(this).after(div);
      });
    });

    return this; //メソッドチェインできるように
  };

  function getRandomColor() {
    var colors = ['white', 'pink', 'orange', 'green'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  $.fn.showsize.defaults = {
    size: 10,
    opacity: 0.9
  };
})(jQuery);
