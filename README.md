# remmy

> The template directory factory.

`npm i -g remmy`

## Configuration

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

**rootDir**

I don't remember exactly what this one is for. But I think it was the root directory of where remmy will search for directories for your clone to be placed.

**templates**

The path to the directory in which your template directories exist.

**variables**

Currently only supports (and requires) `instanceName`. This is what remmy will look for in your files / file names to replace with your instance's name.

## Usage

Create your templates inside of `./path/to/templates`.

Finally, just run `remmy`.

![remmy-demo](https://user-images.githubusercontent.com/19484365/41815765-cd59d590-7739-11e8-9600-f1c0705772aa.gif)

[Inspired by birla.](https://github.com/itaditya/birla)

Max Limit 99,99 €  ---  
