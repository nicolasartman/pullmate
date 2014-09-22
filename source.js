(function (window, jQuery) {
  // Fill in the path to the repo on your computer here
  var repoRoot = '/Users/nick/reporoot/';
  
  // Grab all of the files in diff view
  var fileViews = $('#files:visible > .file');
  
  // If we don't seem to be in diff view, grab all of the diff previews for comments in
  // the main discussion view
  if (!fileViews.length) {
    fileViews = $('.file.inline-review-comment');
  }
  
  if (fileViews.length) {
    fileViews.each(function (index, fileView) {
      var path = $(fileView).children('[data-path]').eq(0).attr('data-path');
    
      $(fileView).find('[data-line-number]').off().click(function () {
        var line = $(this).attr('data-line-number');
        var openInTextmateUrl = 'txmt://open?url=file://' + repoRoot + path + '&line=' + line;
        window.open(openInTextmateUrl, '_self');
      });
    });    
  } else {
    window.alert('Failed to find any diff lines to linkify')
  }
}(window, jQuery));
