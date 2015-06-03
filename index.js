'use strict';

(function () {
    var configurer = {},
        _ = require("lodash"),
        exit = require('exit'),
        config = {};

    /**
     * Provide an initial configuration. 
     * @param configuration The configuration.
     */
    configurer.init = function (configuration) {
        if(typeof configuration == 'object') {
            config = configuration;
        }
    };

    /**
     * Gets a configuration by key.
     * If no configuration key has been provided, the entire configuration will be returned.
     * @param key The optional key.
     * @returns {*}
     */
    configurer.get = function (key) {
        return key !== undefined ? config[key] : config;
    };

    /**
     * Adds or overrides the given configuration under the given key.
     * @param key The key.
     * @param value The configuration.
     */
    configurer.add = function (key, value) {
        config[key] = value;
    };

    /**
     * Merge the already present configuration with the given one.
     * @param key The key.
     * @param value The value.
     */
    configurer.merge = function (key, value) {
        config[key] = _.merge(config[key] || {}, value, function (a, b) {
            if (_.isArray(a)) {
                return a.concat(b);
            }
        });
    };

    /**
     * Init the grunt configuration.
     * @param grunt Grunt
     */
    configurer.initConfig = function(grunt) {
        if(grunt && grunt.hasOwnProperty('initConfig')) {
            grunt.initConfig(config);
        } else {
            exit(1);
        }
        
    };

    module.exports = configurer;
})();
