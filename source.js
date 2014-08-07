$("tr.file-diff-line > td.diff-line-num-addition.empty-cell").each(function (index, cell) {
  var line = $(cell).parent().attr('data-line');
  var path = $(cell).parent().attr('data-path');
	// Fill in the path to the repo on your computer here
	var repoRoot = '/Users/nick/reporoot/';
	var openInTextmateUrl = 'txmt://open?url=file://' + repoRoot + path + '&line=' + line;
  $(cell).html('<a href="' + openInTextmateUrl + '">Txmt</a>');
})
