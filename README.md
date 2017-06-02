# remmy

### `npm i -g remmy`

> remmy helps you easily scaffold out new directories from user defined templates.
---

I get so fed up with creating new React component directories that have three
sub-directories, and a total of 6 files just for boilerplate. So fed up that
I created Remmy.

## Usage

### Create a remmy.json file:
```
{
  "templates": {
    "templateName": {
      "path": "./remmy/comp",
      "dest": "./src/client/comps"
    },

    "anotherTemplate": {
      "path": "./remmy/view",
      "dest": "./src/client/views"
    }
  },

  "variables": {
    "$CSS" : "sass"
  }
}

```

### Create your template directories:
```
|- remmy/
|---- comp/
|-------- $NAME.js
|-------- stores/
|------------ $NAME.store.js
|-------- styles/
|------------ $NAME.$CSS
|---- view/
|-------- $NAME.js
|-------- utils/
|------------ $NAME.utils.js
|-------- styles/
|------------ $NAME.$CSS
```

### Apply variables as needed:

When you run `remmy <templateName> <instanceName>`, remmy will replace any instance
of "$NAME" found within your template files or template file names with the `<instanceName>`
parameter.

Any other variables defined within your `./remmy.json` file will also be acknowledged
and processed accordingly.

### Have fun.

Boom. You have a new directory scaffold in milliseconds.

You may create as many templates as you like, each one having its own template
and predefined output destination.

Now, create your new cloneponents!

Example: `remmy comp MyNewComponent`
