chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({url: 'https://play.google.com/music*'}, function(tabs) {
    for (var i = 0, tab; tab = tabs[i]; i++) {
      chrome.tabs.executeScript(tab.id, {code: "location.assign('javascript:SJBpost(\"" + command + "\");void 0');"});
    }
  });
});
