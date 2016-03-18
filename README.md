CSS Modules Starter Kit
====

Get started with [CSS Modules](https://github.com/css-modules/css-modules).

The `master` branch has the bare minimum:

- [cmify](https://github.com/joshwnj/cmify)
- [browserify](https://github.com/substack/node-browserify)

For info on using CSS Modules with Webpack take a look at the [webpack demo](https://github.com/css-modules/webpack-demo).

Other branches (coming soon)
----

- [`hot-reload`](https://github.com/joshwnj/css-modules-starter-kit/tree/hot-reload): browserify-hmr
- `postcss`: adding autoprefixer and postcss plugins
- `the-lot`: (babel + react + flow)

Running the code
----

After fetching dependencies with `npm install`, run these commands:

- `npm run build` (or `npm run watch` for watch-mode)
- Open `index.html` in a browser (on OSX you can do this by entering `open index.html` in a terminal).

You can also try running `node src/index.js` to see the result of using CSS Modules in node.

Your turn
----

Make some edits to `src/`, then run `npm run build` again and refresh the browser. ✨

License
----

MIT
