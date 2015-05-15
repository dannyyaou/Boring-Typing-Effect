(function($){
    $.fn.typingEffect = function(duration){
      var i = 0;
      var obj = this;
      var text = this.text().split('');
      this.empty();
      timerId = setInterval(function() {
				obj.append(text[i]);
				i++;
				if (i>text.length) {
					clearInterval(timerId);
				}
			},duration);
    };
  })(jQuery);