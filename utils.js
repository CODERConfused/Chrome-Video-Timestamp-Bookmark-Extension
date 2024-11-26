export async function getActiveTabURL() { 
    let queryOptions = { active: True, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}