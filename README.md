# Content_Script_Chrome
Chrome extension designed to add features and improve browsing experience on website https://www.reddit.com.
To load the extension, enable Developer Mode on chrome://extensions in Chrome browser, and click on Load Unpack Extension to find and load the directory of these files.

Features:
- Hover Zoom for images from image hosting site https://imgur.com.
  
  Provide a shortcut to view images instead of going to the site. This only works on non gallery and non album imgur links.

- Display hyper-link URL. 
  
  Even though chrome already shows the URL of links at the bottom of browser, for convenience I use Bootstrap popover to display the URL for better viewing.

- Filter list to store trusted domains and enable page preview.
  
  Filter list can filter trusted web domains, and elminate the display of URL. After trying with AJAX and other methods for storing and accessing the list on local machine, I used Chrome API chrome.storage and it can successfully save and load the filter list from local machine. 

- Display page preview with modal window. 
  
  Use Bootstrap modal and iframe to display pages, as well as videoes, albums, and multimedia. To close the modal, click on darker area outside the modal window. Since iframe is used, going back to previous page needs extra steps.


Use JQuery 1.11.3 and Bootstrap 3.3.5.

TODO:
Add options on the display of image Hover Zoom
