(function (window, jQuery) {
  // Fill in the path to the repo on your computer here
  var repoRoot = '/Users/nick/reporoot/';

  $('#files > .file').each(function (index, fileView) {
    var path = $(fileView).children('[data-path]').eq(0).attr('data-path');
    
    $(fileView).find('[data-line-number]').off().click(function () {
      var line = $(this).attr('data-line-number');
      var openInTextmateUrl = 'txmt://open?url=file://' + repoRoot + path + '&line=' + line;
      window.open(openInTextmateUrl, '_self');
    });
  });
}(window, jQuery));
