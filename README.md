# Content_Script_Chrome
Simple Chrome extension that adds features on a forum website.
Hover Zoom for images from a image hosting site.

Even though chrome already shows the URL of hyper-link at the bottom left corner, for convenience I use Bootstrap popover to display the URL for better sight.
I plan to add on other features in the future to further improve this extension.

Use JQuery 1.11.3 as well as Bootstrap 3.3.5.
Some non-important files are not included. 

Add a filter list to store trusted domains and change the display of DIV.
After trying with AJAX and other storing method, chrome.storage is chosen and used to store the filter list in the computer.
Now it successfully loads and saves the filter list.
Filter list now can filter trusted websites, and elminate the display of URL.

Plan on adding a modal to display videoes, albums, and multimedia. 
Also will add different styles for Hover Zoom function and fix the rest of the stuff.

TODO:
Allow displays of galleries, albums, videoes, gifs, and other medias with iframe
Improve or add on new stuffs with Bootstrap
