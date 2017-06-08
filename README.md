# remmy

### `npm i -g remmy`

> remmy helps you easily scaffold out new directories from pre-defined templates.
---

I get so fed up with creating new React component directories that have three
sub-directories, and a total of 6 files just for boilerplate. So fed up that
I created Remmy.

## Usage

### Create a remmy.json file.
`remmy.json` should live in your project's root directory. It details the names
of your templates, the paths to each template directory, the destination path
for the cloned instance, and also variables to use in template compilation.
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
    "$CSS" : "sass",
    "$JS": "jsx"
  }
}

```

### Create your template directories.
Each template needs its own directory for `remmy` to locate and clone. Directories
can be deep, as long as they are not _infinitely_ deep. Anywhere in your files,
file names, or directory names that `remmy` encounters `$NAME`, it will replace it
like a variable with the name supplied to it.

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

Here is an example file.

```
// $NAME.js
import React from 'react'
import css from './styles/index.$CSS'

export default function $NAME(props) {
  return // ...
}
```

### Be more productive.

`remmy <templateName> <instanceName>`

`remmy` will look up the `<templateName>` in `remmy.json["comps"]` and
clone it with appropriate variables, including `<instanceName>` in place of
any `$NAME` placeholders found in recursively scanning the template directory.

Now, create your new cloneponents!

Example: `remmy comp MyNewComponent`
