# URL_Extract
Simple Chrome extension used to extract URL from hyperlink. 
Add Hover Zoom for images from an image hosting site.

This chrome extension is used to extract the URL from the hyper-links of a forum website I visited a lot.
Move mouse over to see the url, and if the URLs contain the matched host name, an image would be shown instead. 
If the hyper-link leads to a page from the image hosting site, the image would be displayed instead.

Switch to JQuery 1.11.3, life becomes easier.
check.png and jquery-1.11.3.min.js are not included.

Plan to add a filter list to filter out trusted websites.
Use AJAX XmlHttpRequest object and successfully obtain local saved data, but since chrome extension is client-side only, 
there are difficulties saving the data locally with AJAX.

This branch is for testing purpose only, so far I've tried AJAX and I don't think it would work.
The main branch will try HTML5 localStorage, and rest of the project will be updated there.
