## ember-cli-bidi

*WIP*

An Ember CLI Addon that creates right-to-left version of each of your CSS files using [css-flip](https://github.com/twitter/css-flip).

### TODO

* Compile vendor styles, too.

### Installation / Usage

From within your Ember CLI application (must be >= 0.0.41), run the following:

```bash
npm install --save-dev ember-cli-bidi
```

The RTL files are all suffixed with `.rtl`, so for ex. `app.css` will have an `app.rtl.css` version next to it.

**NOTE:** You're responsible for linking the stylesheets in your `index.html`, until I gain a bit more knowledge about the most common scenarios and implement a solution based on that.

### References

* [css-flip](https://github.com/twitter/css-flip)
* [broccoli-css-flip](https://github.com/zeppelin/broccoli-css-flip)

## License

MIT &copy; [Gabor Babicz](http://zeppelin.im)
