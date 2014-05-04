$("tr.file-diff-line.gi").each(function (index, row) {
  var line = $(row).attr('data-line');
  var path = $(row).attr('data-path');
	// Fill in the path to the repo on your computer here
	var repoRoot = '/Users/nick/reporoot/';
	var openInTextmateUrl = 'txmt://open?url=file://' + repoRoot + path + '&line=' + line;
  $(row).find('.line-num-content:eq(0)').html('<a href="' + openInTextmateUrl + '">Txmt</a>');
})
