# remmy

### `npm i -g remmy`

*__v1.0.0 arrives with breaking changes. Read on.__*

### remmy helps you easily scaffold out new React components from user defined templates using a simple cli API.
---

Create a remmy.json file:
```
{
  "templates": {
    "templateName": {
      "path": "./src/comps/TEMP",
      "output": "./src/comps"
    },

    "anotherTemplate": {
      "path": "./src/views/TEMP",
      "output": "./src/views"
    }
  },

  "variables": {
    "$CSS" : "sass"
  }
}

```

You may create as many templates as you like, each one having its own template and pre-defined output destination. Each file in the template's `path` directory will
be scanned for variables and spit out in the `output` directory with the name
provided in the terminal command.

* Variables are not fully supported yet. Currently, the variables object allows you to determine if you wish to use a different CSS extension.

In the path that you specified for your temlate, create your template files and
use the variable `($NAME)` for where the component name will go and `($CSS)` if you
want to use an alternative CSS extension, as defined in your `remmy.json`.

Now, create your new cloneponents!


```
// Create a new clone and name it.

remmy <templateName> <cloneName>
```

Example: `remmy component MyNewComponent`
