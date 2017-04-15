'use strict';

const tumblrThemeParser = require('tumblr-theme-parser');
const fs = require("fs");

class TumblrThemeParserPlugin {
  constructor(config) {
    this.config = config.plugins.tumblrThemeParser || {};
    this.jsonData = {};
    if (this.config.jsonFile !== undefined) {
      this.jsonData = JSON.parse(fs.readFileSync(this.config.jsonFile).toString());
    }
  }

  compileStatic(params) { 
    const htmlData = params.data;
    const path = params.path;
    const jsonData = this.jsonData;
    return new Promise((resolve, reject) => {
      let result, error;
      try {
        let compiled;
        result = tumblrThemeParser.compile(htmlData, jsonData);
      } catch (_error) {
        error = _error;
      } finally {
        if (error) return reject(error);
        resolve(result);
      }
    });
  }
}

TumblrThemeParserPlugin.prototype.brunchPlugin = true;
TumblrThemeParserPlugin.prototype.type = 'template';
TumblrThemeParserPlugin.prototype.extension = 'html';
TumblrThemeParserPlugin.prototype.staticTargetExtension = 'html';

module.exports = TumblrThemeParserPlugin;
