const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('statusText');

// Check storage when popup opens
chrome.storage.local.get('darkModeEnabled', (data) => {
    let isEnabled = !!data.darkModeEnabled;
    
    // Set initial visual state
    toggleSwitch.checked = isEnabled;
    statusText.innerText = isEnabled ? "Mode: ON" : "Mode: OFF";

    // Listen for user sliding the toggle
    toggleSwitch.addEventListener('change', (e) => {
        isEnabled = e.target.checked;
        statusText.innerText = isEnabled ? "Mode: ON" : "Mode: OFF";
        
        // Save the new state
        chrome.storage.local.set({ darkModeEnabled: isEnabled });

        // Send command to the portal
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;
            
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "toggle_dark_mode",
                enabled: isEnabled
            }).catch((err) => {
                console.error("Message failed to send. Tab might need a refresh.", err);
            });
        });
    });
});