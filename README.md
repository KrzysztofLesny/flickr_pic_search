# flickr_pic_search

Web page for searching pictures using Flickr's public API.

Each search returns 4 pictures and presents them on the website.

Technologies used:

    - React
    - CSS
    - JQuery

How it works?

    - user inputs their inquiry into the search bar (empty string, white spaces only, white spaces at the start/end of inquiry are disregarded)
    - on clicking the "Search" button or pressing enter a query is sent to Flickr's public API 
    - if the search yields a postive result up to 4 pictures are rendered to the site
    - if the result yields no results a suitable message is rendered to the site (the message dissapears after 5 seconds)
    - further inquiries can be made
    - rendered collections of pictures can be removed individually



