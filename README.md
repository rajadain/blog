# blog

A static export of [my WordPress blog](http://blog.tuhinanshu.com/). I have grown tired of how slow WordPress is, yet am tied to its analytics, standardized interface, and rich plugin ecosystem. I have often thought about moving to a static site or a flat-file CMS, but all attempts so far have been for naught.

This is an attempt to scratch that itch. This export is generated using the [Simply Static](https://wordpress.org/plugins/simply-static/) plugin, and the resulting site can be hosted on any environment, as long as it is in the root directory. It is tempting to lock up my WordPress site behind a private domain, and after editing content there create a new Simply Static export and have that be the main site. It will be blazing fast, if nothing else.

Here are the pros:

 1. Very easy to setup. I just export the site and put it in a folder that's being run by some server, and it "just works" (for the most part, see the first hiccup below). No need to worry about transferring content to [Ghost](https://ghost.org/) or any other platform.
 2. Static sites can be significantly faster to serve and significantly cheaper to host.
 3. Don't have to worry about hackers trying to exploit my WordPress setup to send spam.
 4. While the generated output is not the cleanest code, and is very repetitive (all pages share basic structure, yet it is repeated in every file), I really don't have to worry about it since I'm doing all the real work in WordPress.
 5. Site looks (styles) and works (URLs) exactly the same, so readers have no idea anything has changed.

Unfortunately, there are some hiccups.

 1. While detail (single post) pages work correctly, list pages (archives) do not. The Twenty Sixteen theme does not load all posts in one page, and does not have clickable pagination. More content is loaded via AJAX, which can't happen on a static site.
 2. I lose Jetpack / Automattic analytics, which I like, and would have to setup Google Analytics which I find confusing and hard to work with.
 3. I lose the ability for people to add comments.
 4. The styling is not 100% there, and may need some tweaks. For example, there is a large white gap below the comment box (which wouldn't work) and the previous and next post buttons.

So I don't think this is ready to be deployed just yet. But I still want to start doing _something_ in this direction, and I think this is a good first step. Even if I can make a habit of creating this export every time I publish a post, at least the content is available in two locations.
