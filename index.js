'use strict';

var flip = require('broccoli-css-flip');
var renameFiles = require('broccoli-rename-files');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

function BidiPlugin(options) {
  this.options = options;
};

BidiPlugin.prototype.toTree = function(tree, inputPath, outputPath) {
  var styles = pickFiles(tree, {
    srcDir: '/assets',
    files: ['**/*.css'],
    destDir: '/assets'
  });

  var rtlStyles = flip(styles);
  var rtlFiles = renameFiles(rtlStyles, {
    append: '.rtl'
  });

  return mergeTrees([tree, rtlFiles]);
};


function EmberCLIBidi(project) {
  this.project = project;
  this.name    = 'Ember CLI Bidi';
};

EmberCLIBidi.prototype.included = function(app) {
  var options = {};
  app.registry.add('css', new BidiPlugin(options));
};

module.exports = EmberCLIBidi;
