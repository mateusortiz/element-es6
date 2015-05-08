# &lt;hello-world&gt;

> My awesome Custom Element with ES6 using babel

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install hello-world --save
```

Or [download as ZIP](https://github.com/mateusortiz/hello-world-es6/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <script src="dest/helloWorld.js"></script>
    ```

3. Start using it!

    ```html
    <hello-world></hello-world>
    ```

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To watch ES6 compilation and start the development server.

    ```sh
    $ gulp
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/my-user/my-repo/releases).

## License

[MIT License](http://mateusortiz.mit-license.org) © Mateus Ortiz