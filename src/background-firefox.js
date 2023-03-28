browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if ((tab?.url?.startsWith("https://github.com/")) && (changeInfo?.status.toLowerCase() === "complete")) {
    try {
      await browser.scripting.executeScript({
        target: { tabId: tabId },
        files: ['inject.js'],
        injectImmediately: true,
      });
    } catch (err) {
      console.log(`Extension error: ${err}`);
    }
  }
});
