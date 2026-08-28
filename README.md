**Legal Disclaimer**

This is an unofficial, community-built open-source project. It is not affiliated with, endorsed by, or sponsored by the University of Science and Technology of Southern Philippines (USTP) or the Management Information Systems (MIS) office.

This extension only modifies the client-side CSS of the portal for accessibility purposes and does not collect, store, or transmit any user data or login credentials. "USTeP" and "PRISM" are properties of their respective owners.

# USTeP Dark Mode Extension 

A custom-built, polished Dark Mode browser extension for the University of Science and Technology e-Learning Portal (USTeP). Built specifically to override the stubborn Lambda2 Moodle theme, reduce eye strain during late-night coding sessions, and provide a cohesive visual experience.

## Features
*   **Bulletproof Backgrounds:** Bypasses WebKit scrolling bugs with a fixed pseudo-element layer to keep the dashboard background continuous.
*   **Gradebook Overrides:** Brute-forces Moodle's hardcoded `.user-grade` tables to remove blinding white borders and light-blue backgrounds.
*   **Smart Transparency:** Perfectly mimics light-mode behavior for the top navigation bar while keeping the logo container solid.
*   **Readable Alerts & Badges:** Automatically darkens Bootstrap alerts, restricted access warnings, and filter tags while maintaining text contrast.
*   **Optimized for Chromium:** Fully compliant with Manifest V3 for Brave, Chrome, and Edge.

## Installation (Developer Mode)
While waiting for official Chrome Web Store approval, you can install this extension manually:

1. Download the latest `.zip` file from the [Releases](../../releases) page and extract it.
2. Open your Chromium-based browser (Brave, Chrome, Edge) and navigate to `chrome://extensions/` or `brave://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** in the top left.
5. Select the extracted `ustep-darkmode-extension` folder.
6. Navigate to [ustep.ustp.edu.ph](https://ustep.ustp.edu.ph/) and enjoy the dark theme!

## Development & Contributing
The codebase is lightweight and managed via standard CSS and vanilla JavaScript. 

**Core Files:**
*   `manifest.json` - Extension configuration (Manifest V3).
*   `content.js` - Script injection.
*   `darkmode_v2.css` - The core stylesheet containing all Moodle and Bootstrap overrides.
*   `icons/` - Contains 16x16, 48x48, and 128x128 PNG icons (compiled from the source SVG).

## Author
**Fabio Joseph M. Tugonon** 
Information Technology (IT4R12) 
University of Science and Technology of Southern Philippines (USTP)

## License
This project is open-source and available under the MIT License.

