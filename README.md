# A sample hyperdev container

This is just a little introduction into [hyperdev](http://www.joelonsoftware.com/items/2016/05/30.html) - a free, online container for creating and developing on a [Node.js](https://nodejs.org/en/) server in the browser.

Check it out, hyperdev is a *very* useful tool for rapid prototyping, since everything *just works* (tm) and it's super easy to get a small team to work together on a project.

This particular project was something I set up to play about with, and to also confirm that this was, in fact, something that could be used for something *useful*

## How useful?

I wanted to solve a realistic problem, so I hooked this up to an online mongo database, and rendered it using some simple jquery in a pivot table.

Why pivots? *We all go a little mad sometimes*, and I **do** love pivots

- You can hook this up to any mongo database you want, but I've used [mlab.com](http://mlab.com) - which is a simple enough online mongo service that will give you a free, small, one-database instance for prototyping.
- I've used Nicolas Kruchten's [javascript pivot table](http://nicolas.kruchten.com/pivottable/examples/) to render the data


# Where is this running?

- You can find the running instance of this here: (https://platinum-fire.hyperdev.space/)
- You can find the hyperdev development environment here: (https://hyperdev.com/#!/project/platinum-fire) 
 
## How to configure this?

If you're running this in node, you'll just need a `.env` file with these settings in here:

```
MONG_USER=
MONG_PASS=
MONG_HOST=
MONG_PORT=
MONG_DB=
```

