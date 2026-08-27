// Check storage when the page loads
chrome.storage.local.get('darkModeEnabled', (data) => {
    if (data.darkModeEnabled) {
        document.documentElement.classList.add('dark-mode-active');
    }
});

// Listen for the toggle switch from the popup
chrome.runtime.onMessage.addListener((request) => {
    if (request.command === "toggle_dark_mode") {
        if (request.enabled) {
            document.documentElement.classList.add('dark-mode-active');
        } else {
            document.documentElement.classList.remove('dark-mode-active');
        }
    }
});