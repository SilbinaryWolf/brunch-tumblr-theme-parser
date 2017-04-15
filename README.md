## Brunch Tumblr Theme Parser
Adds [Tumblr Theme Parser](https://github.com/carrot/tumblr-theme-parser) support to [Brunch](https://github.com/brunch/brunch).

## Usage
Install the plugin via npm with `npm install --save-dev brunch-tumblr-theme-parser`.

Or, do manual install:

* Add `"brunch-tumblr-theme-parser": "~x.y.z"` to `package.json` of your brunch app.
* If you want to use git version of plugin, use the GitHub URI
`"brunch-tumblr-theme-parser": "SilbinaryWolf/brunch-tumblr-theme-parser"`.

## Config

Configure a jsonFile in your app folder downloaded from "https://www.tumblr.com/customize_api/demo_content/<name of blog>"

```javascript
plugins: {
	tumblrThemeParser: {
		jsonFile: 'app/data/tumblrdata.json'
	}
}
```
