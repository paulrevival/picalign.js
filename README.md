--- Jquery picalign plugin --- <br/>
--- version 0.1 beta	   --- <br/>
--- 2015 by Paul Revival   --- <br/>
--- Feedback is [here](mailto:eternal.jest3r@gmail.com) ---

#### DESCRIPTION

The simplest jquery plugin for aligning/centering/stretching images
relative to their parents.<br />
It'll help you to position your `<img>` in the center of the container,
stretching the image like `{ background: cover }` and `{ backround-position: center center }` props do it together,
or aligning image (both vertically and horizontally) in the middle like `{ display:table-cell }` does.

**No more need for trimming\cropping your images if it don't suite to it's container.**

1. Take your `<img src="..">`;
2. Set class `.pa-piccent` to it.
3. Set width and height to `<img>`'s container(px, %, rem, etc..).
4. Profit..

#### HOW TO

This plugin requires jquery-1.11.x and newer to be included.

1. Just include to your html scripts-folder:
```html
<script src="jquery-1.11.3.min.js"></script>
<script src="jquery.picalign.js"></script>
```
2. Follow such html structure:
```html
<div class="pa-picbox">
  <img src=".." class="pa-piccent">
</div>
```

...and set some width and height props to `.pa-picbox` tag.

Or you can just give the class `.pa-piccent` to all of your img-tags
and *picalign.js* will work independently.<br />
**IN THIS CASE you have to set size to it's parent.**

---
##### *Simple Example:*
---

##### css:
```css
<style>
  .your-box {
    height: 120px; /*percent, rem, etc..*/
    width: 200px; /*percent, rem, etc..*/
  }
</style>
```
##### html:
```html
<div class="your-box">
  <img src=".." class="pa-piccent">
</div>
```

#### OPTIONS

This is the beta-version of picalign.js,
but you already can choose some modes.

Just add attribute
```html
"data-pa-size"
```
to your
```html
<img src=".." class="pa-piccent" data-pa-size="..">
```
and get some miracle.

1. `data-pa-size="center"`<br />
Will center your img inside if `.pa-picbox` without stretching.<br />
It gives a *table-cell* effect with `{ vertical-align: middle }` and `{ text-align: center }`,
but without 'display: table/table-cell' usage.

2. `data-pa-size="fill"` (or no "data-pa-size" prop)<br />
Will produce the default effect with filling
the `.pa-picbox` container with your `.pa-piccent.`<br />
Works like `{ background: cover }` and `{ backround-position: center center }` props,
but with real image.

---
This is the beta version, so some usefull features are **NOT** implemented yet! <br />
It'll be implemented in newer versions necessarily :)

<br />
Powered by **MIT** License.




