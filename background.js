function injectScript(tabId) {
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    files: ['inject.js'],
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url?.startsWith("https://github.com/") || !tab.url?.includes("/pull/")) return undefined;

  if (changeInfo.url) {
      injectScript(tabId);
  }
});
