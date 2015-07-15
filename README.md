# URL_Extract
Simple Chrome extension used to extract URL from hyperlink.
Add Hover Zoom for images from a image hosting site.

This chrome extension is used to extract the URL from the hyper-links of one of my favorite forum website. 
Even though chrome already shows the URL of hyper-link at the bottom left corner, for convenience I create a new DIV to display
the information right below the link. 
From this idea, I plan to add on other features in the future to further improve this extension.

Switch to JQuery 1.11.3, life becomes easier.
check.png and jquery-1.11.3.min.js are not included.

Add a filter list to store trusted domains and change the display of DIV.
After trying with AJAX and other storing method, chrome.storage is chosen and used to store the filter list in the computer.
Now it successfully loads and saves the filter list.

TODO:
Finish the filtering script.
Allow display of galleries, and enable to switch images in the gallery.
Add feature for video tag element.
