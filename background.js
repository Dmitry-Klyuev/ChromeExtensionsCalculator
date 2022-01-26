let color = '#3c2bff';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log(`default color is set to "${color}`);
});

