liftoff
=======

A preloader plugin for jQuery

### Getting started:

Start by downloading [liftOff.zip] (2KB) and copying the .js and .css files to your directory.

If you haven't already, link to jQuery from your HTML document. Below that, link to the location of liftOff.js in your directory.

```
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
        
<script src='liftOff.js'></script>
```

Next, link to the location of the liftOff.css stylesheet in your directory.

```
<link rel="stylesheet" type="text/css" href="liftOff.css">
```

Copy the following into your HTML document, directly below the opening `<body>` tag. Make sure to replace `logo.png` with your own logo. If you would like to use a different loader than the one that comes with this plugin, simply replace the content of the `loader-container` div.

```
    <div class="preloader">
            <div class="logo-container">
                <img src="logo.png">
            </div>
            <div class="loader-container">
                <span class="loader">
                    <span class="loader-inner">
                    </span>
                </span>
            </div>
        </div>
 ```

That's it! Enjoy your new preloader.

If you would like to improve on this plugin, feel free to fork it.

[liftOff.zip]:http://liftoff.stessy.co/liftoff.zip