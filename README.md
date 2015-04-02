# preconfigure-grunt

> Node plugin for configuring the configuration of grunt before grunt is initialized.

## Installation
    
npm install --save preconfigure-grunt

##Usage

```js
var configurer = require('preconfigure-grunt');
```

to provide the configurer with an initial configuration you can now do this:

```js
configurer.init({key:'value'});
```

or if you prefer to start with an empty configuration you can skip this function.

to add a configuration option you can now do this:
```js
configurer.add("some.key",value);
```

to merge a configuration option you can now do this:
```js
configurer.merge("some.key",value);
```

this will do a deep merge.

to get a configuration option you can now do this:
```js
configurer.get("some.key");
```

to get the entire configuration you can now do this:
```js
configurer.get();
```

to initialize the grunt initConfig you can now do this:

```js
configurer.initConfig(grunt);
```

instead of configuring it like this:
```js
grunt.initConfig({});
```

##Contributions
If you want to contribute, please add a test. Also, don't change the version in `package.json`.

## Release History
_(Nothing yet)_
