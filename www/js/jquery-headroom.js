$(function () {
  $('.headroom').each(function () {
    var $doc = $(document)
      , $win = $(window)
      , $self = $(this)

      , isHidden = false
      , lastScrollTop = 0

    $win.on('scroll', function () {
      var scrollTop = $doc.scrollTop()
      var offset = scrollTop - lastScrollTop
      lastScrollTop = scrollTop

      // min-offset, min-scroll-top
      if (offset > 10 && scrollTop > 600 ) {
        if (!isHidden) {
          $self.addClass('headroom-hidden')
          isHidden = false
        }
      } else if (offset < -10 || scrollTop < 200) {
        if (isHidden) {
          $self.removeClass('headroom-hidden')
          isHidden = true
        }
      }
    })
  })
})