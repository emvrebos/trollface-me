let previousTabId = 0;

async function executeScript(previousTabId) {
    console.log('previous tab 1:' + previousTabId);
/*     if (previousTabId !== 0) {
        console.log('previous tab:' + previousTabId);
        chrome.scripting.executeScript({
            target: { tabId: previousTabId },
            files: ['stopTFM.js']
        });
    } */

    const tabId = await getTabId();
    console.log('new tab:' + tabId);
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['startTFM.js']
    });

    //previousTabId = tabId;
    console.log('previous tab 2:' + previousTabId);
}

async function getTabId() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    return (tabs.length > 0) ? tabs[0].id : null;//the chrome.tabs.query function is asynchronous. Because of this, you cannot rely on return, instead you have to use callbacks.
}

chrome.tabs.onActivated.addListener(executeScript);
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        executeScript()
    }
});

