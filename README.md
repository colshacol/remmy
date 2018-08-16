# remmy

> The template directory factory.

Install it with `npm i -g remmy` or `yarn global add remmy`.

Add the configuration to your `package.json`:

```json
"remmy": {
  "rootDir": "./source",
  "templates": "./path/to/templates",
  "variables": {
    "instanceName": "NAME__"
  }
}
```

Create your templates inside of `./path/to/templates`.

Finally, just run `remmy`.

![remmy-demo](https://user-images.githubusercontent.com/19484365/41815765-cd59d590-7739-11e8-9600-f1c0705772aa.gif)
